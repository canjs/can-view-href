@module {undefined} can-view-href
@parent can-views
@collection can-legacy
@package ./package.json

@deprecated {2.3} Use the [can-stache.helpers.routeUrl routeUrl helper] instead like:
`href="{{routeUrl prop=value}}"`.

@description Sets an element’s `href` attribute so that its url will set the specified attribute values on [can-route].

@signature `can-href='{[attrName=attrValue...]}'`

  @param {String} attrName
  @param {can-stache/expressions/key-lookup} attrValue

@body

## Use

With no pretty routing rules, the following:

```html
<li><a can-href='{page="recipe" id=5}'>{{recipe.name}}</a></li>
```

produces:

```html
<li><a href='#!&page=5&id=5'>{{recipe.name}}</a></li>
```

If pretty route is defined like:

```js
can.route(":page/:id")
```

The previous use of `can-href` will instead produce:

```html
<li><a href='#!page/5'>{{recipe.name}}</a></li>
```

You can use values from stache's scope like:

```html
<li><a can-href='{page="recipe" id=recipeId}'>{{recipe.name}}</a></li>
```

If `recipeId` was 6:

```html
<li><a href='#!page/6'>{{recipe.name}}</a></li>
```

If `recipeId` is observable and changes to 7:

```html
<li><a href='#!page/7'>{{recipe.name}}</a></li>
```
