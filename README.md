# backbone-calculate ![Build Status](https://travis-ci.org/glencrossbrunet/backbone-calculate.png?branch=master)

The calculation methods are inspired by Rails and taken a bit further. This package uses **[underscore-calculate](https://github.com/glencrossbrunet/underscore-calculate)** under the hood which only considers numbers, and returns `undefined` for empty collections. We use this package to graph data from collections. 

Each calculation method either returns a value, an array of values, or an object with fields and values depending on parameters. For each example, consider the following collection:

```javascript
var collection = new Backbone.Collection;
collection.add(new collection.model({ a: 0, b: 2 }));
collection.add(new collection.model({ a: 2, b: 4 }));

// the following model won't end up in any calculations
collection.add(new collection.model({ a: null, b: undefined }));
```

#### average

```javascript
collection.average('a');
// 1

collection.average('a', 'b');
// [ 1, 3 ]

collection.average([ 'a', 'b' ])
// { a: 1, b: 3 } 

collection.average( function(e) { return e.get('a') && e.get('b') && (e.get('a') * e.get('b')); } );
// 4
```

#### sum

```javascript
collection.sum('a');
// 2

collection.sum('a', 'b');
// [ 2, 6 ]

collection.sum([ 'a', 'b' ])
// { a: 2, b: 6 }

collection.sum( function(e) { return e.get('a') && e.get('b') && (e.get('a') * e.get('b')); } );
// 8
```

#### maximum

```javascript
collection.maximum('a');
// 2

collection.maximum('a', 'b');
// [ 2, 4 ]

collection.maximum([ 'a', 'b' ])
// { a: 2, b: 4 } 

collection.maximum( function(e) { return e.get('a') && e.get('b') && (e.get('a') * e.get('b')); } );
// 8
```

#### minimum

```javascript
collection.minimum('a');
// 0

collection.minimum('a', 'b');
// [ 0, 2 ]

collection.minimum([ 'a', 'b' ])
// { a: 0, b: 2 } 

collection.minimum( function(e) { return e.get('a') && e.get('b') && (e.get('a') * e.get('b')); } );
// 0
```

### Notes

To use backbone-calculate, copy the `backbone.calculate.js` file into your project and include it after backbone.

License: MIT