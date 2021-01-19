# Automatische Erkennung

Dieser Weg `Entitäten` zu erstellen ist immer zu bevorzugen, wenn möglich. Für die Erkennung wird eine ioBroker 
Bibliothek Namens `type-dector` genutzt. Diese ist auch in anderen Adaptern, wie `iot` oder `material` in Verwendung. 
Wenn die Geräte für einen dieser Adapter sauber konfiguriert sind, profitieren also gleich mehrere.

Mittlerweile gibt es mit dem [Geräte Adapter](https://github.com/iobroker/iobroker.devices) auch eine UI für den `type-dector`.
Es wird daher dringend empfohlen, falls noch nicht geschehen, diesen Adapter zu installieren und den Tab im Admin zu aktivieren.
Dort tauchen alle erkannten Geräte auf. Diese können potentiell auch in Lovelace verwendet werden.

Für die Erkennung ist es wichtig, dass die Datenpunkte der Geräte die richtigen Rollen und Typen (Nummer, String, Boolean, ..) haben.
Sollte das bei einem eurer Geräte nicht der Fall sein, empfiehlt es sich mit der Alias-Funktion des js-Controllers ein
Gerät zusammenzustellen. Am einfachsten geht dies ebenfalls im *Geräte-Tab* des Admin. Dort kann für die Datenpunkte
eines Geräts jeweils ein vorhandenes Objekt ausgewählt werden. Die Rollen und anderen Eigenschaften werden dann beim 
Alias direkt richtig gesetzt, so, dass die Erkennung funktioniert.   

Lovelace wird alle Geräte, die im Geräte-Tab dargestellt werden und die Raum **und** Funktion zugewiesen haben erkennen.
Geräte bei denen eins von beiden fehlt, werden ignoriert.
