// Backbone Calculate v0.0.2
// MIT License

_.extend(Backbone.Collection.prototype, { 
  
  calculate: function(method, fields) {
    if (!_.isFunction(method)) {
      throw new Error('Collection#calculate expects a function as the first parameter');
    }
    
    if (arguments.length <= 1) return undefined;
    
    if (arguments.length == 2) {
      if (_.isString(fields)) return method(this.pluck(fields));
      if (_.isArray(fields)) {
        return _.reduce(fields, function(object, field) {
          object[field] = this.calculate(method, field);
          return object;
        }, {}, this);
      }
    }
    
    return _.map(_.toArray(arguments).slice(1), function(field) {
      return this.calculate(method, field);
    }, this);
  }

});

_.each([ 'sum', 'average', 'maximum', 'minimum' ], function(name) {
  this[name] = function() {
    var args = [ _[name] ].concat(_.toArray(arguments));
    return this.calculate.apply(this, args); 
  };
}, Backbone.Collection.prototype);