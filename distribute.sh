#!/bin/bash

sudo -Hu iobroker cp /tmp/server.js /opt/iobroker/node_modules/iobroker.lovelace/lib/
iobroker restart lovelace.1

pause;
