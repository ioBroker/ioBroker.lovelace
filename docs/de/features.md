![Logo](../../admin/lovelace.png)
# Funktionen

* [Benachrichtigungen](#benachrichtigungen)
* [Sprachsteuerung](#sprachsteuerung)
* [Video / Live-Stream anzeigen](#video--live-stream-anzeigen)
* [Fehlersuche](#fehlersuche)

## Benachrichtigungen
Benachrichtigungen können über die `sendTo`-Funktion oder durch Schreiben in den State `lovelace.X.notifications.add` hinzugefügt werden:

```js
sendTo('lovelace.0', 'send', {message: 'Nachrichtentext', title: 'Titel'}); // vollständig
sendTo('lovelace.0', 'send', 'Nachrichtentext'); // Kurzform
```

oder

```js
setState('lovelace.0.notifications.add', '{"message": "Nachrichtentext", "title": "Titel"}'); // vollständig
setState('lovelace.0.notifications.add', 'Nachrichtentext'); // Kurzform
```

## Sprachsteuerung
Alle Befehle aus dem Web-Interface werden mit `ack=false` in den State `lovelace.X.conversation` geschrieben. Man kann ein Skript schreiben, das darauf reagiert und antwortet:

```js
on({id: 'lovelace.0.conversation', ack: false, change: 'any'}, obj => {
   console.log('Frage: ' + obj.state.val);
   if (obj.state.val.includes('Zeit')) {
      setState('lovelace.0.conversation', new Date().toString(), true); // true markiert dies als Antwort
   } else {
      setState('lovelace.0.conversation', 'Entschuldigung, das weiß ich nicht', true);
   }
});
```

## Video / Live-Stream anzeigen
Ein Video oder einen Live-Stream (z. B. Türklingel / Ring-Kamera) kann man mit einer `iframe`-Karte anzeigen, die auf die Stream-URL zeigt. Bei einer festen URL genügt eine einfache `iframe`-Karte mit `url:`. Ändert sich die URL (z. B. bei jedem neuen Clip / jeder neuen Live-Sitzung), liest man sie dynamisch aus einem State mit der [config-template-card](https://github.com/iantrich/config-template-card) (Installation über HACS).

Den ioBroker-State mit der URL (z. B. `ring.0.doorbell_625818110.Livestream.url`) als `input_text`-Entität anlegen, dann:

```yaml
type: custom:config-template-card
variables:
  URL: states['input_text.doorbell_625818110_Livestream_url'].state
entities:
  - input_text.doorbell_625818110_Livestream_url
card:
  type: iframe
  url: ${URL}
  aspect_ratio: 100%
  title: Letztes Live Video
```

(Danke an @Vippis2000 in [#575](https://github.com/ioBroker/ioBroker.lovelace/issues/575).)

## Fehlersuche
Wenn der YAML-Code kaputt ist und eine leere Seite erscheint, aber das obere Menü noch da ist, kann man im Menü den Bearbeitungsmodus aktivieren (falls noch nicht aktiv) und dann über das Menü den „RAW Yaml Editor“ öffnen, in dem der vollständige YAML-Code steht und bereinigt werden kann.

Hilft das nicht, kann man das Objekt `lovelace.*.configuration` im Raw-Editor in ioBroker öffnen und dort nachsehen. Man kann dieses Objekt auch aus einem Backup wiederherstellen — es enthält die komplette Konfiguration der Visualisierung.
