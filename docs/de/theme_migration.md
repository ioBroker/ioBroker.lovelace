# Themes anpassen (Frontend-Update 2026)

Mit dem Frontend-Update wurde die Theme-Engine von Home Assistant grundlegend
überarbeitet. **Bestehende Themes funktionieren weiterhin** – die alten Variablen
bleiben erhalten. Es gibt aber ein paar Änderungen, die zu sichtbaren Problemen
führen können. Das häufigste: **weiße Hintergründe bei Eingabefeldern**.

## Inhalt

* [Das Problem: weiße Eingabefelder](#das-problem-weiße-eingabefelder)
* [Schnelle Lösung](#schnelle-lösung)
* [Empfohlene Theme-Vorlage (hell + dunkel)](#empfohlene-theme-vorlage-hell--dunkel)
* [Was hat sich geändert?](#was-hat-sich-geändert)
* [Häufige Fragen](#häufige-fragen)

---

## Das Problem: weiße Eingabefelder

Mehrere Eingabe-Elemente (Textfelder, Auswahllisten, Schieberegler, Schalter,
Checkboxen, Zeit-Eingaben …) verwenden jetzt neue Komponenten. Diese holen ihre
Hintergrundfarbe **nicht mehr** aus den alten Variablen
`--mdc-text-field-fill-color` / `--input-fill-color`, sondern aus einer **neuen
Variable**:

```
--ha-color-form-background
```

Deren Standardwerte sind:

| Modus | Standard | Ergebnis |
|-------|----------|----------|
| Hell | `--ha-color-neutral-95` | ≈ `#f3f3f3` (fast weiß) |
| Dunkel | `--ha-color-neutral-20` | ≈ `#363636` (dunkel) |

**Wichtig:** Der dunkle Wert greift **nur, wenn der Dunkelmodus aktiv ist**.
`--ha-color-form-background` folgt **nicht** automatisch `--card-background-color`.
Wenn dein Theme also nur `card-background-color` und die alten
`--mdc-text-field-*`-Variablen setzt (wie z. B. das klassische *synthwave*-Theme),
bleibt `--ha-color-form-background` auf dem hellen Standard → **weiße Felder**,
auch in einem ansonsten dunklen Theme.

---

## Schnelle Lösung

Setze in deinem Theme die neue Variable `--ha-color-form-background` (plus die
beiden Varianten für Hover und deaktiviert):

```yaml
mein_theme:
  ha-color-form-background: 'var(--card-background-color)'         # Feld-Hintergrund
  ha-color-form-background-hover: 'var(--light-primary-color)'     # beim Überfahren
  ha-color-form-background-disabled: 'var(--primary-background-color)'  # deaktiviert
```

Du kannst statt der `var(...)` auch direkt feste Farben angeben, z. B.
`ha-color-form-background: '#34294f'`.

> Beim *synthwave*-Theme reicht es genau, diese drei Zeilen zu ergänzen –
> es hat `card-background-color` bereits gesetzt, aber nicht
> `ha-color-form-background`. Die aktuelle Upstream-Version des Themes setzt diese
> Variable bereits selbst.

---

## Empfohlene Theme-Vorlage (hell + dunkel)

Damit helle und dunkle Darstellung beide korrekt aussehen, benutze den
`modes`-Block. Home Assistant wählt dann automatisch den passenden Satz:

```yaml
mein_theme:
  # für beide Modi
  primary-color: "#18bcf2"
  accent-color: "#f36d00"
  modes:
    light:
      primary-background-color: "#fafafa"
      card-background-color: "#ffffff"
      secondary-background-color: "#e5e5e5"
      primary-text-color: "#212121"
      secondary-text-color: "#727272"
    dark:
      primary-background-color: "#111111"
      card-background-color: "#1c1c1c"
      secondary-background-color: "#282828"
      primary-text-color: "#e1e1e1"
      secondary-text-color: "#9b9b9b"
      ha-color-form-background: "#1c1c1c"
      ha-color-form-background-hover: "#282828"
      ha-color-form-background-disabled: "#111111"
```

`--ha-color-form-background` pro Modus zu setzen ist genau das, was die neuen
Eingabefelder korrekt einfärbt. Im Hellmodus brauchst du es meist nicht, weil der
helle Standard dort passt – im Dunkelmodus (oder bei dunklen Themes ohne `modes`)
ist es nötig.

---

## Was hat sich geändert?

### 1. Neues mehrschichtiges Farb-System

Es gibt jetzt drei Ebenen von Farb-Variablen:

| Ebene | Beispiele | Zweck |
|-------|-----------|-------|
| **Kern** | `--ha-color-primary-50`, `--ha-color-neutral-90` … | Rohe Farbpalette. Nicht direkt verwenden. |
| **Semantisch** | `--ha-color-text-primary`, `--ha-color-fill-neutral-normal-resting`, `--ha-color-surface-*` | Zweckgebundene Farben, abgeleitet aus der Kern-Ebene. |
| **Alt (Kompatibilität)** | `--card-background-color`, `--primary-text-color`, `--primary-color` … | Bleiben vorhanden und funktionieren weiter. |

Themes, die die alten Variablen setzen, laufen weiter. Neue Komponenten lesen
aber teils die semantischen oder `--wa-*`-Variablen – die ein Theme, das nur
alte Variablen setzt, nicht überschreibt.

### 2. `primary-color` erzeugt automatisch eine Palette

Wenn ein Theme `primary-color` setzt, erzeugt das Frontend daraus automatisch
die komplette `--ha-color-primary-*`-Palette. Eine einzelne `primary-color`
wirkt sich also auf die neuen Variablen aus. **Hintergründe/Oberflächen werden
nicht automatisch abgeleitet** – die musst du selbst setzen.

### 3. Dunkelmodus

Der Dunkelmodus setzt die dunklen Werte der neuen Farb-Ebenen **nur, wenn der
Dunkelmodus auch wirklich aktiv ist**. Ein "dunkel aussehendes" Theme, das im
Hellmodus angewendet wird (ohne `modes`), startet von den **hellen** Standard-
Farben → weiße Felder. Deshalb: `modes`-Block verwenden.

### 4. Entfernte interne Dateien

Intern wurden alte Style-Dateien entfernt und durch ein neues Theme-System
ersetzt. Themes, die nur dokumentierte HA-Variablen nutzen, sind nicht betroffen.
Themes, die interne Variablennamen kopiert hatten, können kaputtgehen.

---

## Häufige Fragen

**Muss ich mein Theme komplett neu schreiben?**
Nein. In den meisten Fällen reicht es, `ha-color-form-background` (plus `-hover`
und `-disabled`) zu ergänzen.

**Mein Theme war nur für Dunkel gedacht und sieht jetzt teils hell aus
(weiße Felder).**
Das ist der häufigste Fall. Setze `ha-color-form-background` auf eine dunkle
Farbe (z. B. `var(--card-background-color)`). Optional: die Werte in einen
`modes: dark:`-Block verschieben und den Dunkelmodus aktivieren, dann greifen auch
die dunklen Standardwerte der neuen Variablen automatisch.

**Wo trage ich das Theme ein?**
Wie bisher in den Adapter-Einstellungen unter "Themes" (YAML). Der Adapter liefert
diese Themes unverändert an das Frontend.

**Brauche ich die neuen `--ha-color-*`-Variablen?**
Für die meisten Themes reicht es, **`ha-color-form-background`** zu ergänzen –
das ist die einzige neue Variable, die fast alle betrifft (weiße Eingabefelder).
Die übrigen `--ha-color-*`-Variablen sind nur für Feinabstimmung nötig.
