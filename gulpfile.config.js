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
            css: ['./src/css/**/*.css'],
            views: [],
            index: ['./src/index.html']
        }
    }
    return GulpConfig;
})();

module.exports = GulpConfig;