interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
  }
  
  function storeCarInfo(manufacturer: string, model: string, ...extras: [string, any][]): Car {
    const car: Car = { manufacturer, model };
    for (const [key, value] of extras) {
      car[key] = value;
    }
    return car;
  }
  
  // Calling storeCarInfo() with required and optional information
  const carInfo = storeCarInfo("Tesla", "Model 3", ["color", "red"], ["feature", "autopilot"]);
  
  // Printing the car object
  console.log(carInfo);
  