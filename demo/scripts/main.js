require.config({
    paths: {
        "textchange": "../../dest/textchange.min",
        // "textchange": "../../src/textchange",
        "jquery": "vendor/jquery/dist/jquery",
        "underscore": "vendor/underscore-amd/underscore",
        "backbone": "vendor/backbone-amd/backbone"
    },
    shim: {
        'textchange': {
            deps: ['jquery']
        }
    }
});

require(['jquery', 'views/TextChangeEventDemo', 'models/TextChangeEventDemo'], function ($, AppView, AppModel) {
    var appModel = new AppModel({
        "tmaCase2Value": "default value"
    });

    var appView = new AppView({
        el: $(".tmaShowCaseBody"),
        model: appModel
    });

    appView.render();
});