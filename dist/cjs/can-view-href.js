/*can-view-href@3.0.3#can-view-href*/
var expression = require('can-stache/src/expression');
var viewCallbacks = require('can-view-callbacks');
var compute = require('can-compute');
var route = require('can-route');
require('can-util/dom/events/removed/removed');
var domEvents = require('can-util/dom/events/events');
var removeCurly = function (value) {
    if (value[0] === '{' && value[value.length - 1] === '}') {
        return value.substr(1, value.length - 2);
    }
    return value;
};
viewCallbacks.attr('can-href', function (el, attrData) {
    var attrInfo = expression.parse('tmp(' + removeCurly(el.getAttribute('can-href')) + ')', { baseMethodType: 'Call' });
    var getHash = attrInfo.argExprs[0].value(attrData.scope, null);
    var routeHref = compute(function () {
        return route.url(getHash());
    });
    el.setAttribute('href', routeHref());
    var handler = function (ev, newVal) {
        el.setAttribute('href', newVal);
    };
    routeHref.on('change', handler);
    domEvents.addEventListener.call(el, 'removed', function () {
        routeHref.off('change', handler);
    });
});