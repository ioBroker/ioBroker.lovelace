#/bin/bash

cd hass_frontend/ || { echo "Error, please run script from root of the git project."; exit 1; }

rm -rf frontend_* static *.py *.html py.typed robots.txt *.js

cp -r ../../home-assistant-polymer/hass_frontend/* .
# will try to read version from this:
cp -r ../../home-assistant-polymer/pyproject.toml .