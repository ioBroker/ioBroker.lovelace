git clone https://github.com/home-assistant/home-assistant-polymer.git
cd home-assistant-polymer
git checkout master
git pull
npm install
gulp run build-app
xcopy ".\hass_frontend\*.*" "..\..\hass_frontend\" /E /Y
cd ..\..
gulp rename