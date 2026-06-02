# Issue #111 — Home Assistant Companion App support (findings)

Status: **investigated, not implemented.** Notes for a future attempt.

## What already works

The companion app logs in with the same OAuth / IndieAuth flow as the web frontend,
and we already implement it:

- `GET /auth/authorize` — login page + authorization code
- `POST /auth/token` — `grant_type=authorization_code` and `grant_type=refresh_token`

After login the app uses the **same WebSocket API** we already serve for the web UI
(`subscribe_entities`, `get_states`, `call_service`, `get_config`, …). So the dashboard
itself is, in principle, renderable.

## What blocks it: the `mobile_app` integration

Modern companion-app onboarding does **not** stop at login. Right after auth it registers
the device:

1. `POST /api/mobile_app/registrations` → must return `{ webhook_id, secret, cloudhook_url? }`.
   We do not implement this route, so onboarding **cannot complete** and the app never
   reaches the dashboard.
2. Everything app-side then flows through a per-device webhook
   `POST /api/webhook/<webhook_id>` with its own message envelope
   (`{ type, data, encrypted? }`). Message types include at least:
   `get_config`, `render_template`, `update_location`, `register_sensor`,
   `update_sensor_states`, `get_zones`, `update_registration`, `stream_camera`,
   `scan_tag`. Payloads may be encrypted with the registration `secret`
   (libsodium secretbox).

So a **minimum "view only"** target would need:
- `POST /api/mobile_app/registrations` (issue webhook id + secret, persist them)
- `POST /api/webhook/<id>` handling at least `get_config` (return our `_getConfig()`
  shape) and `render_template`, plus accept/ignore `register_sensor` /
  `update_sensor_states` / `update_location` so the app does not error out.
- Optional encryption support (secretbox) — newer apps default to encrypted webhooks.

Effort: **medium**. Mostly REST plumbing reusing existing config/template code.

## Hard blocker: push notifications

Actionable / push notifications use HA's `mobile_app` push path: the app registers an
FCM (Android) / APNS (iOS) token, and notifications are delivered through HA's push proxy
(Nabu Casa cloud, or a self-hosted `mobile_app` push server / `html5`/`companion`
push component). There is **no way to emulate this** without that push infrastructure and
the Google/Apple credentials behind it. Sensors and device-location reporting are similarly
app→server only and have no equivalent on the ioBroker side.

## Verdict

- **Dashboard-in-app**: achievable with medium effort (registration + webhook stubs).
- **The reasons people actually want the app** (push notifications, phone sensors,
  presence/location): not feasible without HA's mobile_app push infrastructure.

Recommendation: keep #111 parked. Only pursue the registration + webhook path if
"view the dashboard inside the companion app" alone is judged worth the maintenance cost;
set expectations that notifications/sensors will not work.

## Pointers (current code)

- OAuth routes: `src/lib/server.ts` — `GET /auth/authorize` (~2038), `POST /auth/token`
  (~2145, `onAuth`).
- Config payload to reuse for webhook `get_config`: `_getConfig()`.
- `render_template` logic lives in the WS `render_template` branch / TemplateModule
  (on the frontend202605 branch) — would be reused by the webhook handler.
