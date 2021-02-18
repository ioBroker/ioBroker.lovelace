# Eigene Karten

Lovelace lässt sich gut durch selbst erstellte Karten (`Custom Cards`) erweitern. Diese kommen in Form einer Javascript Datei (*.js), die 
über die Konfiguration in lovelace hochgeladen werden muss (Reiter `Eigene Karten`). 
<!-- TODO: Screenshot! Auch Github Release! -->

## Getestete Karten

Die folgenden Karten sind vom Entwickler oder der Comunity getestet worden und funktionieren. Grundsätzlich sollten die
allermeisten Karten funktionieren. Wenn es Probleme gibt, kann es auch an einer Inkompatibilität zwischen der verwendeten
Lovelace Version und der Karte liegen. Ich versuche den Apter im Moment relativ aktuell zu halten, von daher sollte man
versuchen die möglichst neuesten Kartenversionen zu nehmen.

* [Clockork Card](custom_cards.md#clockwork-card)


### Clockwork Card

Repository: https://github.com/barleybobs/ha-clockwork-card (es handelt sich um einen aktuell funktionierenden Fork, die ursprüngliche
Version wird nicht mehr gepflegt). 

Besonderheiten zur Konfiguration, [siehe hier](ui_tipps.md#Uhrzeit).

<!-- Einen `sensor` für die Zeit kann man sich mit einem Skript selber bauen, z.B. so:
`````javascript
schedule('* * * * *', () => {
    setState('0_userdata.0.zeit', Date.now());
});
`````-->
Die Konfiguration muss ohne entity_id und dafür mit Zeitzonen sein. Die Zeit kommt dann vom Browser selber, so in etwas:
`````yaml

`````
