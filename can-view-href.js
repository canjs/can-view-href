var expression = require('can-stache/src/expression');
var viewCallbacks = require('can-view-callbacks');
var compute = require('can-compute');
var route = require('can-route');

require('can-util/dom/events/removed/removed');
var domEvents = require('can-util/dom/events/events');

var removeCurly = function(value){
	if(value[0] === "{" && value[value.length-1] === "}") {
		return value.substr(1, value.length - 2);
	}
	return value;
};

// registers a callback can-href
viewCallbacks.attr("can-href", function(el, attrData){

	// foo='bar' zed=5 abc=myValue
	// Note: 'tmp ' is added because expressionData "Breaks up the name and arguments of a stache expression.", but we don't use name:
	var attrInfo = expression.parse('tmp(' + removeCurly(el.getAttribute("can-href"))+")", {baseMethodType: "Call"});
	var getHash = attrInfo.argExprs[0].value(attrData.scope, null);
	// -> {hash: {foo: 'bar', zed: 5, abc: {get: 'myValue'}}}
	var routeHref = compute(function(){
		return route.url(getHash());
	});


	el.setAttribute("href", routeHref());

	var handler = function(ev, newVal){
		el.setAttribute("href", newVal);
	};

	routeHref.on("change", handler );


	domEvents.addEventListener.call(el,"removed", function(){
		routeHref.off("change", handler );
	});
});
