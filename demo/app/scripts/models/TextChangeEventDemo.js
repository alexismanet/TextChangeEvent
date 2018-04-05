/**
 * Created by Alexis on 06/06/2017.
 */
define(['backbone'], function (Backbone) {

    var oModel = Backbone.Model.extend({

        getCase2Value: function () {
            var rtn = this.get('tmaCase2Value');
            if (rtn) {
                return rtn;
            }
            return "";
        },

    });

    return oModel;

});