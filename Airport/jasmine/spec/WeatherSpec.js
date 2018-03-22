describe("Weather", function() {
  var weather;

  beforeEach(function() {
    weather = new Weather()
  })

  describe("Randomised weather", function() {

    it("Should return false when sunny", function() {
      spyOn(Math, 'random').and.returnValue(0.8)
      expect(weather.stormy()).toEqual(false)
    })
    it("Should return true when stormy", function() {
      spyOn(Math, 'random').and.returnValue(0.2)
      expect(weather.stormy()).toEqual(true)
    })
    
  })


})
