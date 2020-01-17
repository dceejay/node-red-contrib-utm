node-red-contrib-utm
====================

A <a href="http://nodered.org" target="_new">Node-RED</a> node convert co-ordinates in Latitude and Longitude to and from UTM.

### Install

Either use the Node-RED menu - manage palette - install option, or run the following command in your Node-RED user directory - typically `~/.node-red`

    npm i node-red-contrib-utm

### Usage

If `msg.payload` contains `.lat` and `.lon` properties, this node adds a corresponding UTM location as `msg.payload.utm`.

If the object contains a `msg.payload.utm` property as below, and not `.lat` and `.lon` they will be created.

    msg.payload.utm.x = eastings
    msg.payload.utm.y = northings
    msg.payload.utm.z = zone code - eg 30U 
