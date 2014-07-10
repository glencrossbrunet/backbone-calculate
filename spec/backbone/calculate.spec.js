describe('Backbone.Collection', function() {

  beforeEach(function() {
    this.collection = new Backbone.Collection([
      { a: 0, b: 0 },
      { a: 2, b: 2 },
      { a: null, b: undefined }
    ]);
    this.results = {
      sum: {
        a_value:    2,
        a_b_values: [ 2, 2 ],
        a_b_array:  { a: 2, b: 2 }
      },
      average: {
        a_value:    1,
        a_b_values: [ 1, 1 ],
        a_b_array:  { a: 1, b: 1 }
      },
      maximum: {
        a_value:    2,
        a_b_values: [ 2, 2 ],
        a_b_array:  { a: 2, b: 2 }
      },
      minimum: {
        a_value:    0,
        a_b_values: [ 0, 0 ],
        a_b_array:  { a: 0, b: 0 }
      }
    };
  });

  describe('#calculate', function() {
    it('should raise error for null method', function() {
      expect(function() { this.collection.calculate(null) }).toThrow();
    });

    it('should raise error for nonexistent method', function() {
      expect(function() { this.collection.calculate('not-a-thing') }).toThrow();
    });
  });

  _.each([ 'sum', 'average', 'maximum', 'minimum' ], function(name) {

    describe('#' + name, function() {

      it('should calculate for values', function() {
        expect( this.collection[name]('a') ).toEqual(this.results[name].a_value);
      });

      it('should calculate for multiple keys splat', function() {
        expect( this.collection[name]('a', 'b') ).toEqual(this.results[name].a_b_values);
      });

      it('should calculate for arrays of keys', function() {
        expect( this.collection[name]([ 'a', 'b' ]) ).toEqual(this.results[name].a_b_array);
      });

    });

  }, this);

});