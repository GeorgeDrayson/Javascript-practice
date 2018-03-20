describe("Plane", function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['name']);
  });

  describe('Plane status', function() {

    it("Has an automatic status of air", function() {
      expect(plane._status).toEqual('air');
    });

  });

  describe('Plane lands itself', function() {

    it("lands itself and sets status to the airport", function() {
      plane.land(airport);
      expect(plane._status).toEqual(airport);
    });

  });

  describe('Plane takes off itself', function() {

    it("takes off and sets status to air", function() {
      plane.land(airport);
      plane.takeOff();
      expect(plane._status).toEqual('air');
    });

  });



});
