describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport()
    plane = jasmine.createSpyObj('plane', ['takeOff', 'land']);
  });

  describe('Airport lands planes', function() {

    it("Adds a plane to an array", function() {
      // spyOn(Math, ‘random’).and.returnValue(0.09);
      airport.land(plane)
      expect(airport.planes).toEqual([plane])
    });

    it("Calls the land method on plane", function() {
      airport.land(plane)
      expect(plane.land).toHaveBeenCalled();
    })

  });

  describe('Airport takes off planes', function() {

    it("Removes a plane from the array", function() {
      airport.land(plane)
      airport.takeOff(plane)
      expect(airport.planes).toEqual([])
    });

    it("Calls the takeOff method on plane", function() {
      airport.land(plane)
      airport.takeOff(plane)
      expect(plane.takeOff).toHaveBeenCalled();
    })

  });

  describe("Airport knows when it is full", function() {

    it("raises an error when the station is full", function() {

    });

  });





});
