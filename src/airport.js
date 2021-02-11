class Airport {

  constructor() {
    this.hanger = [];
  };

  addPlane(plane){
    if (this.hanger.length < 60) {
      this.hanger.push(plane);
      return true;}
    else {throw new Error('Airport is at maximum capacity')};
  };

}
