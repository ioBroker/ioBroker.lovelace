![Logo](../../admin/lovelace.png)
# ioBroker.lovelace

Mit diesem Adapter kann die HomeAssistant UI Lovelace für ioBroker genutzt werden.

Wichtige Features:
* Lovelace ist responsive, passt sich also an das Display an (PC, Tablet, Smartphone, ...)
* Es lassen sich schnell hübsche UIs erstellen mit Hilf der `Karten`
* Das UI lässt sich einfach durch aktivieren des Editiermodus verändern, ggf. auch vom Handy

Damit Lovelace funktioniert muss dieser Adapter allerdings eine HomeAssistant Umgebung emulieren mit den Geräten, 
die in ioBroker vorhanden sind. In HomeAssistant wird mit `Entitäten` gearbeitet. Diese entsprechen meist einem Gerät,
was in ioBroker oft aus mehreren Datentypen besteht. Je nach `Domäne` einer Entität verhalten sich die Karten der Lovelace
UI unterschiedlich.   

Um Entitäten aus ioBroker Objekten zu erstellen gibt es zwei Wege:
1. [Automatische Erkennung](automatic_entities.md) von Geräten (bevorzugt)
2. [Manuelle Konfiguration](manual_entities.md) (funktioniert nur für `Entitäten`, die sich mit nur einem Datenpunkt darstellen/steuern lassen)
