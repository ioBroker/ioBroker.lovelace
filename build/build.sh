git clone https://github.com/GermanBluefox/home-assistant-polymer.git
cd home-assistant-polymer
git checkout master
git pull
npm i
gulp run build-app
cp -rf ./hass_frontend/* ../../hass_frontend/
cd ../..
gulp rename