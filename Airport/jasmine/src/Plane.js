function Plane() {
  this._status = 'air'
}

Plane.prototype.land = function(airport) {
  this._status = airport
}

Plane.prototype.takeOff = function() {
  this._status = 'air'
}
