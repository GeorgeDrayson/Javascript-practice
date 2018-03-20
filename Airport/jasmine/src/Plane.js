function Plane() {
  this.status = 'air'
}

Plane.prototype.land = function(airport) {
  this.status = airport
}

Plane.prototype.takeOff = function() {
  this.status = 'air'
}
