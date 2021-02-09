![Logo](../../admin/lovelace.png)
# ioBroker.lovelace

Mit diesem Adapter kann die HomeAssistant UI Lovelace für ioBroker genutzt werden.

Wichtige Features:
* Lovelace ist responsive, passt sich also an das Display an (PC, Tablet, Smartphone, ...)
* Es lassen sich schnell hübsche UIs erstellen mit Hilf der `Cards`
* Das UI lässt sich einfach durch Aktivieren des Editiermodus verändern, ggf. auch auf dem Handy

Damit Lovelace funktioniert muss dieser Adapter allerdings eine HomeAssistant Umgebung emulieren mit den Geräten, 
die in ioBroker vorhanden sind. In HomeAssistant wird mit `entities` gearbeitet. Diese entsprechen meist einem Gerät,
was in ioBroker allerdings oft aus mehreren Datentypen besteht und eine 1:1 Zuordnung nicht so einfach möglich ist. 
Je nach `Domäne` (z.B. `light`, `cover`, `input_number`) einer `entity` verhalten sich die Karten der Lovelace UI unterschiedlich.   

Um `entities` aus ioBroker Objekten zu erstellen gibt es zwei Wege:
1. [Automatische Erkennung](automatic_entities.md) von Geräten (bevorzugt)
2. [Manuelle Konfiguration](manual_entities.md) (funktioniert nur für `entities`, die sich mit nur einem Datenpunkt darstellen/steuern lassen)

[Unterstütze entities](supported_entities.md) (inklusive ggf. ioBroker Besonderheiten) 
