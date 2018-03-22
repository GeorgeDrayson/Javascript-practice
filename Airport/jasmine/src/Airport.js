function Airport(weather, capacity = 20) {
  this._planes = [];
  this._DEFAULT_CAPACITY = capacity;
  this.weather = weather
}

Airport.prototype.land = function(plane, weather) {
  if (this._full()) {
    throw new Error('Airport is full');
  }
  if (this.weather.stormy()) {
    throw new Error('Cannot land, bad weather conditions');
  }
  this._planes.push(plane);
  plane.land();
}

Airport.prototype.takeOff = function(plane, weather) {
  if (this.weather.stormy()) {
    throw new Error('Cannot take off, bad weather conditions');
  }
  this._planes.splice(this._planes.indexOf(plane), 1);
  plane.takeOff();
}

Airport.prototype._full = function() {
  return this._planes.length >= this._DEFAULT_CAPACITY
}
