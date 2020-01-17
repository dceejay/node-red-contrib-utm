
module.exports = function(RED) {
    var utmObj = require('utm-latlng');
    var utm = new utmObj(); //Default Ellipsoid is 'WGS 84'

    function UTMNode(n) {
        RED.nodes.createNode(this,n);
        this.precision = n.precision || 2;
        var node = this;
        this.on("input", function(msg) {
            if ((typeof msg.payload.lat !== "undefined")&(typeof msg.payload.lon !== "undefined")) {
                var ut = utm.convertLatLngToUtm(msg.payload.lat*1, msg.payload.lon*1, parseInt(node.precision));
                msg.payload.utm = {x:ut.Easting, y:ut.Northing, z:""+ut.ZoneNumber+ut.ZoneLetter};
            }
            if (msg.payload.utm && (typeof msg.payload.utm.x !== "undefined") && (typeof msg.payload.utm.y !== "undefined") && (typeof msg.payload.utm.z !== "undefined")) {
                var zn = parseInt(msg.payload.utm.z);
                var zl = msg.payload.utm.z.substr(-1);
                var ll = utm.convertUtmToLatLng(msg.payload.utm.x, msg.payload.utm.y, zn, zl);
                msg.payload.lat = msg.payload.lat || ll.lat;
                msg.payload.lon = msg.payload.lon || ll.lng;
            }
            node.send(msg);
        });
    }
    RED.nodes.registerType("utm",UTMNode);
}
