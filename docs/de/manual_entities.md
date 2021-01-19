# Manuelle Entitäten

In der Objektansicht kann Lovelace für einzelne Datenpunkte aktiviert werden. Dabei kann einer `Entität` nur die
`Domäne` (`light`, `input_boolean`, ...) und der Name eingestellt werden. Sonst sind aktuell keine weiteren Attribute möglich. 

Es empfiehlt sich daher ganz dringend auf die automatische Erkennung zu setzen, besonders bei komplexeren Geräten
(z.B. Lichter mit Dimm und Farbfunktionen). Auch für (binäre) Sensoren sollte man die automatische Erkennung nutzen, da
dann das Attribut `device_class` gefüllt wird und die Darstellung in der UI besser zum Gerät passt (z.B. wird ein 
binärer Sensor vom Typ "Tür" als "Tür" dargestellt und die Zustände an/aus in offen/zu übersetzt).
