# can-view-href (DEPRECATED)

[![Build Status](https://travis-ci.org/canjs/can-view-href.png?branch=master)](https://travis-ci.org/canjs/can-view-href)

*The href plugin have been deprecated in favor of the [routeUrl helper](https://canjs.com/docs/can.stache.helpers.routeUrl.html) instead like: `href="{{routeUrl prop=value}}"`. It will still be maintained up to 3.0 and potentially after. Projects using can-view-href should consider switching to the [routeUrl helper](https://canjs.com/docs/can.stache.helpers.routeUrl.html)*

*The setter plugin (and the attributes plugin) have been deprecated in favor of the [define plugin](https://canjs.com/docs/can.Map.prototype.define.html), which provides the same functionality. It will still be maintained up to 3.0 and potentially after. Projects using setters should consider switching to [define setters](https://canjs.com/docs/can.Map.prototype.define.set.html).*

Make flexible route links

## Installation

### ES6 use

With StealJS, you can import this module directly in a template that is autorendered:

```js
import plugin from 'can-view-href';
```

### CommonJS use

Use `require` to load `can-view-href` and everything else
needed to create a template that uses `can-view-href`:

```js
var plugin = require("can-view-href");
```

## AMD use

Configure the `can` and `jquery` paths and the `can-view-href` package:

```html
<script src="require.js"></script>
<script>
	require.config({
	    paths: {
	        "jquery": "node_modules/jquery/dist/jquery",
	        "can": "node_modules/canjs/dist/amd/can"
	    },
	    packages: [{
		    	name: 'can-view-href',
		    	location: 'node_modules/can-view-href/dist/amd',
		    	main: 'lib/can-view-href'
	    }]
	});
	require(["main-amd"], function(){});
</script>
```

### Standalone use

Load the `global` version of the plugin:

```html
<script src='./node_modules/can-view-href/dist/global/can-view-href.js'></script>
```

## Usage

- Signature: `can-href='{[attrName=attrValue...]}`
- Parameters
	+ `attrName` - `{String}`
	+ `attrValue` `can.stache.key`

Sets an element's href attribute so that it's url will set the specified attribute values on [can.route].

With no pretty routing rules, the following:

```
<li><a can-href='{page="recipe" id=5}'>{{recipe.name}}</a></li>
```

produces:

```
<li><a href='#!&page=5&id=5'>{{recipe.name}}</a></li>
```

If pretty route is defined like:

```
can.route(":page/:id")
```

The previous use of `can-href` will instead produce:

```
<li><a href='#!page/5'>{{recipe.name}}</a></li>
```

You can use values from stache's scope like:

```
<li><a can-href='{page="recipe" id=recipeId}'>{{recipe.name}}</a></li>
```

If `recipeId` was 6:

```
<li><a href='#!page/6'>{{recipe.name}}</a></li>
```

If `recipeId` is observable and changes to 7:

```
<li><a href='#!page/7'>{{recipe.name}}</a></li>
```

## Making Changes

### Making a Build

To make a build of the distributables into `dist/` in the cloned repository run

```
npm install
node build
```

### Running the tests

Tests can run in the browser by opening a webserver and visiting the `test.html` page.
Automated tests that run the tests from the command line in Firefox can be run with

```
npm test
```
