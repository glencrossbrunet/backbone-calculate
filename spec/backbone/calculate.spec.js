describe('Backbone.Collection', function() {
  beforeEach(function() {
    this.collection = new Backbone.Collection;

    _.each([ { a: 0, b: 0 }, { a: 2, b: 2 }, { a: null, b: undefined } ], function(attrs) {
      this.add(new this.model(attrs));
    }, this.collection);
  });

  describe('#calculate', function() {
    it('should raise error for null method', function() {
      expect(function() { this.collection.calculate(null) }).toThrow();
    });

    it('should raise error for nonexistent method', function() {
      expect(function() { this.collection.calculate('not-a-thing') }).toThrow();
    });
  });

  describe('#sum', function() {
    it('should sum values', function() {
      expect( this.collection.sum('a') ).toEqual(2);
    });

    it('should splat multiple keys', function() {
      expect( this.collection.sum('a', 'b') ).toEqual([ 2, 2 ]);
    });

    it('should sum arrays of keys', function() {
      expect( this.collection.sum([ 'a', 'b' ]) ).toEqual({ a: 2, b: 2 });
    });
  });

  describe('#average', function() {
    it('should average values', function() {
      expect( this.collection.average('a') ).toEqual(1);
    });

    it('should splat multiple fields', function() {
      expect( this.collection.average('a', 'b') ).toEqual([ 1, 1 ]);
    });

    it('should key-value array of fields', function() {
      expect( this.collection.average([ 'a', 'b' ]) ).toEqual({ a: 1, b: 1 });
    });
  });

  describe('#maximum', function() {
    it('should find max value', function() {
      expect( this.collection.maximum('a') ).toEqual(2);
    });

    it('should splat multiple fields', function() {
      expect( this.collection.maximum('a', 'b') ).toEqual([ 2, 2 ]);
    });

    it('should key-value array of fields', function() {
      expect( this.collection.maximum([ 'a', 'b' ]) ).toEqual({ a: 2, b: 2 });
    });
  });

  describe('#minimum', function() {
    it('should find max value', function() {
      expect( this.collection.minimum('a') ).toEqual(0);
    });

    it('should splat multiple fields', function() {
      expect( this.collection.minimum('a', 'b') ).toEqual([ 0, 0 ]);
    });

    it('should key-value array of fields', function() {
      expect( this.collection.minimum([ 'a', 'b' ]) ).toEqual({ a: 0, b: 0 });
    });
  });
});