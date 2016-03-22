# can-view-href

[![Build Status](https://travis-ci.org/canjs/can-view-href.png?branch=master)](https://travis-ci.org/canjs/can-view-href)

Make flexible route links

## Usage

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

## Contributing

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
