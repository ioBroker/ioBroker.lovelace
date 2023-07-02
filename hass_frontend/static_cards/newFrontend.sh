#/bin/bash

cd ~/development/iobroker/ioBroker.lovelace/hass_frontend/

rm -rf frontend_* static *.py *.html py.typed robots.txt *.js

cp -r ~/development/iobroker/home-assistant-polymer/hass_frontend/* .
