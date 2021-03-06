odoo.define('website.user_custom_code', function (require) {
'use strict';

var Dialog = require('web.Dialog');
var publicWidget = require('web.public.widget');

publicWidget.registry.HelloWorldPopup = publicWidget.Widget.extend({
    selector: '#wrapwrap',

    start: function () {
        Dialog.alert(this, "Hello, world!");
        return this._super.apply(this, arguments);
    },
})
});