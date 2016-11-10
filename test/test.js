require('can-route');
require('steal-qunit');

require('../can-view-href');

var makeIframe = function(src){
	var iframe = document.createElement('iframe');
	window.removeMyself = function(){
		delete window.removeMyself;
		delete window.isReady;
		delete window.hasError;
		document.body.removeChild(iframe);
		start();
	};
	window.hasError = function(error) {
		ok(false, error.message);
		window.removeMyself();
	};
	window.isReady = function(el, viewModel, setPrettyUrl) {

		equal(el.getAttribute("href"), "#!&page=recipe&id=5", "should set unpretty href attribute");

		viewModel.recipe.attr('id', 7);
		equal(el.getAttribute("href"), "#!&page=recipe&id=7", "should update href");

		setPrettyUrl();
		viewModel.recipe.attr('id', 8);
		equal(el.getAttribute("href"), "#!recipe/8", "should set pretty href");

		viewModel.recipe.attr('id', 9);
		equal(el.getAttribute("href"), "#!recipe/9", "should update pretty href");

		window.removeMyself();
	};
	document.body.appendChild(iframe);
	iframe.src = src;
};

QUnit.module("can-view-href");
if(window.steal && __dirname !== '/') {
	asyncTest("the basics are able to work for steal", function(){
		makeIframe(  __dirname + "/basics.html?"+Math.random());
	});
}
//else if(window.requirejs) {
//	asyncTest("the basics are able to work for requirejs", function(){
//		makeIframe(can.test.path("../../view/href/tests/requirejs-basics.html?"+Math.random()));
//	});
//} else {
//	asyncTest("the basics are able to work standalone", function(){
//		makeIframe(can.test.path("view/href/tests/standalone-basics.html?"+Math.random()));
//	});
//}
