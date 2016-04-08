/*can-view-href@0.1.0#can-view-href*/
var can = require('can/util/util');
var expression = require('can/view/stache/expression');
require('can/view/callbacks/callbacks');
require('can/view/scope/scope');
require('can/route/route');
var removeCurly = function (value) {
    if (value[0] === '{' && value[value.length - 1] === '}') {
        return value.substr(1, value.length - 2);
    }
    return value;
};
can.view.attr('can-href', function (el, attrData) {
    var attrInfo = expression.parse('tmp(' + removeCurly(el.getAttribute('can-href')) + ')', { baseMethodType: 'Call' });
    var getHash = attrInfo.hash(attrData.scope, null);
    var routeHref = can.compute(function () {
        return can.route.url(getHash());
    });
    el.setAttribute('href', routeHref());
    var handler = function (ev, newVal) {
        el.setAttribute('href', newVal);
    };
    routeHref.bind('change', handler);
    can.bind.call(el, 'removed', function () {
        routeHref.unbind('change', handler);
    });
});