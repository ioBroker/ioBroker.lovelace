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

## Themen
* [Entitäten](entities.md) — automatische Erkennung, manuelle Konfiguration, unterstützte & besondere Entity-Typen
* [Eigene Karten, Themes & UI-Tipps](cards_and_ui.md)
* [Funktionen](features.md) — Benachrichtigungen, Sprachsteuerung, Video, Fehlersuche
* [Themes anpassen (Frontend-Update 2026)](theme_migration.md)

Die Entwickler-/Build-Dokumentation steht im [Root-README](../../README.md#development).

## Fernzugriff über ioBroker Cloud

Neben den Optionen VPN zu nutzen oder den Port der Lovelace Instanz nach außen frei zu geben und die eingebaute 
Autorisierung und SSL zu nutzen gibt es auch die Möglichkeit Lovelace über die ioBroker-Cloud zu nutzen. Der Vorteil ist, dass
dann keine Verbindung von außen in euer Netz aufgebaut wird, sondern die Verbindung wird vom Cloud Adapter von eurem
System aus initiiert. Das hiflt, neben dem "guten Gefühl", dass nix offen steht, insbesondere bei Dual Stack Lite oder anderen
kompleren Netzwerklösungen, auf die man nicht den vollen Zugriff hat. 

Um den Fernzugriff so zu erlauben muss sich auf iobroker.pro Registrieren und den Cloud Adapter installieren. In der Konfiguration 
vom Cloud-Adapter muss man noch die gewünschte lovelace-Instanz auswählen. Danach taucht Lovelace in der Oberfläche 
iobroker.pro bei "Anwendungen" auf und ist, nach Einloggen unter der URL `https://iobroker.pro:4443/lovelace/` erreichbar.

In der Lovelace Instanz sollte dann SSL ausgeschaltet sein. Autorisierung ist ebenfalls nicht notwendig, da die über 
das ioBroker-Konto gemacht wird.
