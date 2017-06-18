define(['backbone', 'underscore', 'textchange'], function (Backbone, _, textchange) {
    //noinspection UnnecessaryLocalVariableJS
    var App = Backbone.View.extend({

        events: {
            "click .tmaCase2 button": "onClickCase2Button"
        },

        render: function () {
            this.$el.find('.tmaCase2 textarea').val(this.model.getCase2Value());
        },

        onClickCase2Button: function (event) {
            event.preventDefault();
            this.$el.find('.tmaCase2 textarea').val("");
            this.$el.find('.tmaCase2 .output').empty();
        },

        ajaxRequest: _.debounce(function () {
            var currentValue = this.$el.find('.tmaCase4 textarea').val();
            this.$el.find('.tmaCase4 .output').prepend('<p  class="text-primary">Send request value<strong>' + currentValue + '</strong> </p>');
        }, 400),

        initialize: function () {
            var pThis = this;

            var $case1btn = this.$el.find('.tmaCase1 button');
            this.$el.find('.tmaCase1 textarea')
                .on('hastext', function () {
                    $case1btn.removeClass('disabled').prop('disabled', false);
                })
                .on('notext', function () {
                    $case1btn.addClass('disabled').prop('disabled', true);
                });

            var case2Value = this.model.getCase2Value();
            var $case2output = this.$el.find('.tmaCase2 .output');
            this.$el.find('.tmaCase2 textarea').on('textchange', {
                "lastValue": case2Value
            }, function (event, previousText) {
                $case2output.prepend('<p>Text changed from <strong>' + previousText + '</strong> to <strong>' + $(this).val() + '</strong> </p>');
            });

            var $case3btn = this.$el.find('.tmaCase3 button');
            var $case3count = this.$el.find('.tmaCase3 .count');
            this.$el.find('.tmaCase3 textarea').on('textchange', function () {
                var count = 140 - parseInt($(this).val().length);
                $case3count.html(" (" + count + ") ");
                if (count <= 140 && count >= 0) {
                    $case3btn.removeClass('disabled').prop('disabled', false);
                } else {
                    $case3btn.addClass('disabled').prop('disabled', true);
                }
            });

            var $case4output = this.$el.find('.tmaCase4 .output');
            this.$el.find('.tmaCase4 textarea').on('textchange', function (event, previousText) {
                $case4output.prepend('<p>Text changed from <strong>' + previousText + '</strong> to <strong>' + $(this).val() + '</strong> </p>');
                pThis.ajaxRequest(previousText);
            });

        }
    });

    return App;
});