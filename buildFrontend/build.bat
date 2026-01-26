git clone https://github.com/GermanBluefox/home-assistant-polymer.git
cd home-assistant-polymer
git checkout master
git pull
npm i
gulp run build-app
xcopy ".\hass_frontend\*.*" "..\..\hass_frontend\" /E /Y
cd ..\..
gulp rename