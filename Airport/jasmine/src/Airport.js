function Airport() {
  this._planes = []
}

Airport.prototype.land = function(plane) {
  this._planes.push(plane);
  plane.land();
}

Airport.prototype.takeOff = function(plane) {
  this._planes.splice(this._planes.indexOf(plane), 1);
  plane.takeOff();
}
