# Tipps für die Gestaltung der Oberfläche

## Inhalt 

* [Anpassen der Titelleiste](ui_tipps.md#anpassen-der-titelleiste)
* [Mini Media Card mit TTS und Shortcuts](ui_tipps.md#mini-media-card-mit-text2speech-tts-und-musik-shortcuts)
* [Uhrzeit](ui_tipps.md#uhrzeit)
* [Bindings](ui_tipps.md#bindings)


## Anpassen der Titelleiste

Die Titelleiste kann mit Hilfe der Erweiterung [Cardmod](https://github.com/thomasloven/lovelace-card-mod/tree/master) angepasst werden. 
Dazu können die folgenden YAML Codebeispiele zum eigenen Theme hinzugefügt werden:


### 1. Glocke entfernen   
```yaml
  card-mod-theme: THEMENAME
  card-mod-root: |
    mwc-icon-button[label] {
      display: none; 
    }
```

### 2. Suche und Assist entfernen 
```yaml
  card-mod-theme: THEMENAME
  card-mod-root: |
    mwc-icon-button[label] {
      display: none; 
    }
    ha-icon-button[slot="actionItems"] {
      display: none; 
    }
```

### 3. Suche, Assist und Punktmenü entfernen 
```yaml
  card-mod-theme: THEMENAME
  card-mod-root: |
    mwc-icon-button[label] {
      display: none; 
    }
    ha-icon-button[slot] {
      display: none; 
    }
```

### 4. Titelleiste vollständig verbergen

Ab Version 4.0.1 gibt es die Möglichkeit den State `lovelace.0.instances.hideHeader` auf `true` zu setzen, was
(nach einem reload) die Titelleiste bei allen Browsern entfernt. Der State existiert auch für alle Instanzen. Er kann
also auch pro Browser gesetzt werden.

## Mini-Media-Card mit Text2Speech (TTS) und Musik-Shortcuts

Die Mini-Media-Card unterstützt für Smarte-Lautsprecher (Echo, Google Home, ...) eine Text to Speech (TTS) Eingabe. Zusätzlich kann
man Shortcut Knöpfe für Musikstücke / Sender o.ä. anlegen. Leider wird für TTS ein Service verwendet, den ioBroker so nicht
ohne weiteres unterstützt, also ist hier eine ioBroker spezifische Konfiguration notwendig, tts geht so:

````yaml
tts:
  platform: iobroker
  entity_id: input_text.multimedia_Alexa_Arbeitszimmer_Commands_speak
````

`platform` muss dabei auf `iobroker` gesetzt werden. Die `entity_id` muss auf ein (existierendes) `entity` zeigen, 
was dann mit dem Text gefüllt wird. Damit lässt sich also in ioBroker jedes beliebige System zur Sprachausgabe nutzen.

Die Knöpfe können mit jedem beliebigem Service-Call gefüllt werden, gut klappt für ioBroker so etwas:
````yaml
shortcuts:
  columns: 4
  buttons:
    - icon: 'mdi:pirate'
      type: service
      id: input_text.set_value
      data:
        entity_id: input_text.multimedia_Alexa_Arbeitszimmer_Player_playSongAmazon
        value: Piraten von Karsten Glück
    - icon: 'mdi:cake'
      type: service
      id: input_text.set_value
      data:
        entity_id: input_text.multimedia_Alexa_Arbeitszimmer_Player_playSongAmazon
        value: Wie schön dass du geboren bist
    - icon: 'mdi:waves'
      type: service
      id: input_text.set_value
      data:
        entity_id: input_text.multimedia_Alexa_Arbeitszimmer_Player_playSongAmazon
        value: Wellerman von Wellermen
    - icon: 'mdi:chess-queen'
      type: service
      id: input_text.set_value
      data:
        entity_id: input_text.multimedia_Alexa_Arbeitszimmer_Player_playSongAmazon
        value: Let it go von Idina Menzel
````

Dabei wird mit `input_text.set_value` angegeben, dass ein Text in einen Datenpunkt geschrieben werden soll. Im `data` Teil
wird dann mit `entity_id` wieder die Text `entity` angegeben und mit `value` der Text, der eingetragen werden soll.

Das Ergebnis sieht dann so etwa aus:
![mini media player mit TTS und Shortcuts](media/mini-media-player.JPG)

## Uhrzeit

Die Uhrzeit lässt sich z.B. mit der [Clockwork-Card](custom_cards.md#clockwork-card) einbinden.
Einen Zeit-Sensor gibt es nicht. Vielleicht kann man sich einen mit einem Javascript zusammen bauen, allerdings wird 
dann jede Minute relativ viel Aufwand getrieben. Die Uhrzeit hat der Browser selber und die wird mit folgender Konfiguration 
verwendet:
````yaml
type: 'custom:clockwork-card'
title: Zeit
locale: de-de
other_time:
  - Europe/Berlin
````
Wenn man den Block rechts nicht mag, kann man ihn, zusammen mit der `card mod card` ausblenden:
````yaml
type: 'custom:clockwork-card'
title: Zeit
style: |
    .other_clocks {
      display: none
    }
locale: de-de
other_time:
    - Europe/Berlin
````

## Bindings

Die Markdown-Karte kann mit Bindings verwendet werden. Dabei ist die Konfiguration, wie in [ioBroker.vis](https://github.com/ioBroker/ioBroker.vis#bindings-of-objects) üblich.

Zum Beispiel erzeugt der Text `Admin läuft{a:system.adapter.admin.0.alive;a === true || a === 'true' ? '' : ' nicht'}.` den text `Admin läuft` in der Markdown-Karte.
