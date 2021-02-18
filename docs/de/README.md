![Logo](../../admin/lovelace.png)
# ioBroker.lovelace

Mit diesem Adapter kann die HomeAssistant UI Lovelace für ioBroker genutzt werden.

Wichtige Features:
* Lovelace ist responsive, passt sich also automatisch an das Display an (PC, Tablet, Smartphone, ...)
* Es lassen sich schnell hübsche UIs erstellen mit Hilf der `Cards`
* Der Editor ist in die UI integriert und weitgehend WYSIWYG

Damit Lovelace funktioniert muss dieser Adapter allerdings eine HomeAssistant Umgebung emulieren mit den Geräten, 
die in ioBroker vorhanden sind. In HomeAssistant werden Funktionen in `entities` bereitgestellt. Ein `entity` entspricht meist einem Gerät.
In ioBroker bestehen Geräte allerdings oft aus mehreren `states` und eine 1:1 Zuordnung von `state` zu `entity` ist nicht so einfach möglich ist. 

Ein `entity` benötigt immer eine eindeutige ID, die wie folgt aussieht: `domain.unique_name`. Dabei beschreibt die `domain`
die Funktion des `entity`. Je nach `domain` (z.B. `light`, `cover`, `input_number`) verhalten sich die Karten der Lovelace UI unterschiedlich.   

Um `entities` aus ioBroker Objekten zu erstellen gibt es zwei Wege:
1. [Automatische Erkennung](automatic_entities.md) von Geräten (bevorzugt)
2. [Manuelle Konfiguration](manual_entities.md) (funktioniert nur für `entities`, die sich mit nur einem Datenpunkt darstellen/steuern lassen)

Die Oberfläche kann durch eigene Karten erweitert / individualisiert werden. Dort gibt es von der HomeAssistant Community
schon eine ganze Reihe Karten. [Mehr dazu und welche funktionieren](custom_cards.md).

Andere Themen (inklusive Hinweisen zu ioBroker Besonderheiten):
* [Unterstütze entities](supported_entities.md) 
* [Eigene Karten](custom_cards.md)
* [Tipps für die Gestaltung der Oberfläche](ui_tipps.md)
