# can-view-href (DEPRECATED)

*The href plugin have been deprecated in favor of the [routeUrl helper](https://canjs.com/docs/can.stache.helpers.routeUrl.html) instead like: `href="{{routeUrl prop=value}}"`. It will still be maintained up to 3.0 and potentially after. Projects using can-view-href should consider switching to the [routeUrl helper](https://canjs.com/docs/can.stache.helpers.routeUrl.html)*

[![Build Status](https://travis-ci.org/canjs/can-view-href.png?branch=master)](https://travis-ci.org/canjs/can-view-href)

Make flexible route links

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
