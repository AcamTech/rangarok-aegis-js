rangarok-aegis-js forked from ragnarok-js
=========================================

Setup
-------------------------

* Rename settings.tmpl.js to settings.js
* Set the data folder URI to the folder where you've extracted data.grf
* If you want music, copy the BGM folder from your Ragnarok installation into the client folder
* If you want to use it as a desktop application, download [node-webkit](https://github.com/rogerwang/node-webkit) and run nw from the root folder

Additional info
-------------------------

* TCP sockets are only supported under node-webkit
* node-webkit doesn't have MP3 support by default (search for it if you need it)
* WebSocket requires a WebSocket to TCP tunnel. Try [websockify](https://github.com/kanaka/websockify)
