describe('Airport', function() {
  var airport;

  beforeEach(function() { airport = new Airport; });

  it('will not let planes land when it is full', function() {
    for (let iteration = 0; iteration < 60; iteration++) { airport.addPlane('plane'); };
    expect( function() { airport.addPlane('plane');
    }).toThrow(new Error ("Cannot land, airport is at maximum capacity"))
  });

})
