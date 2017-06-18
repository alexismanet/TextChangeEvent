(function ($) {

    $.event.special.textchange = {

        // doing set up job
        setup: function (data, namespaces) {

            var lastValue = this.contentEditable === "true" ? $(this).html() : $(this).val();
            if (data && data.lastValue) {
                lastValue = data.lastValue;
            }

            $(this).data('lastValue', lastValue);
            //https://api.jquery.com/keyup/
            $(this).bind('keyup.textchange', $.event.special.textchange.handler);
            $(this).bind('cut.textchange paste.textchange input.textchange', $.event.special.textchange.delayedHandler);
        },

        // https://learn.jquery.com/events/event-extensions/
        teardown: function (namespaces) {
            $(this).unbind('.textchange');
        },

        handler: function (event) {
            $.event.special.textchange.triggerIfChanged($(this));
        },

        delayedHandler: function (event) {
            var element = $(this);
            setTimeout(function () {
                $.event.special.textchange.triggerIfChanged(element);
            }, 25);
        },

        triggerIfChanged: function (element) {
            var current = element[0].contentEditable === 'true' ? element.html() : element.val();
            if (current !== element.data('lastValue')) {
                element.trigger('textchange', [element.data('lastValue')]);
                element.data('lastValue', current);
            }
        }
    };

    $.event.special.hastext = {

        setup: function (data, namespaces) {
            $(this).bind('textchange', $.event.special.hastext.handler);
        },

        teardown: function (namespaces) {
            $(this).unbind('textchange', $.event.special.hastext.handler);
        },

        handler: function (event, lastValue) {
            if ((lastValue === '') && lastValue !== $(this).val()) {
                $(this).trigger('hastext');
            }
        }
    };

    $.event.special.notext = {

        setup: function (data, namespaces) {
            $(this).bind('textchange', $.event.special.notext.handler);
        },

        teardown: function (namespaces) {
            $(this).unbind('textchange', $.event.special.notext.handler);
        },

        handler: function (event, lastValue) {
            if ($(this).val() === '' && $(this).val() !== lastValue) {
                $(this).trigger('notext');
            }
        }

    };

})(jQuery);