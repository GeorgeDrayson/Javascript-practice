describe("Airport", function() {
  var airport;
  var plane;
  var goodWeather;
  var badWeather;

  beforeEach(function() {
    plane = jasmine.createSpyObj('plane', ['takeOff', 'land']);
    goodWeather = jasmine.createSpyObj('goodWeather',['stormy']);
    goodWeather.stormy.and.returnValue(false);
    badWeather = jasmine.createSpyObj('badWeather',['stormy']);
    badWeather.stormy.and.returnValue(true);
    airport = new Airport(goodWeather)
    airport2 = new Airport(badWeather)
  });

  describe('Airport lands planes', function() {

    it("Adds a plane to an array", function() {
      airport.land(plane);
      expect(airport._planes).toContain(plane);
    });

    it("Calls the land method on plane", function() {
      airport.land(plane);
      expect(plane.land).toHaveBeenCalled();
    });

  });

  describe('Airport takes off planes', function() {

    it("Removes a plane from the array", function() {
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport._planes).toEqual([]);
    });

    it("Calls the takeOff method on plane", function() {
      airport.land(plane);
      airport.takeOff(plane);
      expect(plane.takeOff).toHaveBeenCalled();
    });

  });

  describe("Airport knows when it is full", function() {

    it("raises an error when the station is full", function() {
      for (var i = 0; i < airport._DEFAULT_CAPACITY; i++ ) {
        airport._planes.push(plane);
      }
      expect(function(){airport.land(plane);}).toThrowError('Airport is full');
    });

  });


  describe('Planes cannot take off when it is stromy', function() {

    it('Raises an error when you take off when it is stormy', function() {
      expect(function(){airport2.takeOff(plane);}).toThrowError('Cannot take off, bad weather conditions');
    });

  });

  describe('Planes cannot land when it is stromy', function() {

    it('Raises an error when you land when it is stormy', function() {
      expect(function(){airport2.land(plane);}).toThrowError('Cannot land, bad weather conditions');
    });

  });

  describe('You can set the default capacity', function() {

    it('Sets the default capacity', function() {
      var airport = new Airport(goodWeather, 30);
      expect(airport._DEFAULT_CAPACITY).toEqual(30);
    });

  });




});
