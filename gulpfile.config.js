'use strict';
var GulpConfig = (function() {
    function GulpConfig() {
        this.vendors = {
            js: [],
            css: [],
            fonts: []
        };

        this.app = {
            js: [],
            less: [],
            views: [],
            index: ['./src/index.html']
        }
    }
    return GulpConfig;
})();

module.exports = GulpConfig;