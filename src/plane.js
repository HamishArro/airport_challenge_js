class Plane{

  constructor() {
    this.airport
  }

  land(airport) {
    if (airport.addPlane() === true) { this.airport = airport; return true; }
    else {throw new Error ("Cannot land, airport is at maximum capacity")}
  };

  takeOff() {
    return true
  };

}
