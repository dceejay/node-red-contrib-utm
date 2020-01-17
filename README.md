node-red-red-contrib-utm
========================

A <a href="http://nodered.org" target="_new">Node-RED</a> node convert Latitubde and Longitude to UTM.

### Install

Either use the Node-RED menu - manage palette - install option, or run the following command in your Node-RED user directory - typically `~/.node-red`

    npm i node-red-contrib-utm

### Usage

If `msg.payload` contains `.lat` and `.lon` properties, this node adds a corresponding UTM location as `msg.payload.utm`.

If the object contains a `msg.payload.utm` property and not `.lat` and `.lon` they will be created.
