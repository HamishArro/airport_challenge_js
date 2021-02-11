describe('Plane', function() {
  var plane;
  var airport;

  beforeEach(function() { plane = new Plane; });
  beforeEach(function() { airport = new Airport; });



  it('instructs a plane to land at an aiport', function() {
    expect(plane.land(airport)).toEqual(true);
  });

  it('cannot land the plane if airport is full', function() {
    spyOn(airport, 'addPlane').and.returnValue(new Error ("Airport is at maximum capacity"));
    expect( function() {plane.land(airport);
    }).toThrow(new Error ("Cannot land, airport is at maximum capacity"));
  });

  it('instructs a plane to take off from an airport', function() {
    expect(plane.takeOff()).toEqual(true);
  });


})
