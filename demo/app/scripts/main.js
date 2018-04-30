require.config({
    baseUrl: "./../..",
    paths: {
        "models": "scripts/models",
        "views": "scripts/views",

        "textchange": "src/jquery-textchange",
        "jquery": "bower_components/jquery/dist/jquery",
        "underscore": "bower_components/underscore/underscore",
        "backbone": "bower_components/backbone/backbone"
    },
    shim: {
        'jquery-textchange': {
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