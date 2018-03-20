function Airport() {
  this.planes = []
}

Airport.prototype.land = function(plane) {
  this.planes.push(plane);
  plane.land();
}

Airport.prototype.takeOff = function(plane) {
  this.planes.splice(this.planes.indexOf(plane), 1);
  plane.takeOff();
}
