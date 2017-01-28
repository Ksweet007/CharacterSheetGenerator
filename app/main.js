/* global jQuery:false, $:false, ko:false, require:false, requirejs:false, moment:false */
define('jquery', function () { return jQuery; });
define('knockout', ko);
requirejs.config({
    paths: {
        'text': '../lib/require/text',
        'durandal':'../lib/durandal/js',
        'plugins' : '../lib/durandal/js/plugins',
        'transitions' : '../lib/durandal/js/transitions',
        'bootstrap': '../lib/bootstrap/js/bootstrap',
      }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator','knockout','_custom/all'],  function (system, app, viewLocator,ko,all) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

		requirejs.config(require.config);
		window.require = require;
		window.requirejs = requirejs;
		window.define = define;

		ko.punches.enableAll();

    app.title = 'Character Builder';

    app.configurePlugins({
        router:true,
        dialog: true
    });

    app.start().then(function() {
        app.setRoot('shell/shell');
    });
});
