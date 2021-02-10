class Airport {

  constructor() {
    this.hanger = [];
  }

  addPlane(plane){
    if (this.hanger.length < 60) {this.hanger.push(plane)}
    else {throw new Error('Cannot land, airport is at maximum capacity')}
  }

}
