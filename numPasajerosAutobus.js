var number = function(busStops) {
    let peopleOnBus = 0;
  
    for (let i = 0; i < busStops.length; i++) {
      const [peopleIn, peopleOut] = busStops[i];
      peopleOnBus += peopleIn - peopleOut;
    }
  
    return peopleOnBus;
  }