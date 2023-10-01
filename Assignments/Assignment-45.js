"use strict";
function storeCarInfo(manufacturer, model, ...extras) {
    const car = { manufacturer, model };
    for (const [key, value] of extras) {
        car[key] = value;
    }
    return car;
}
// Calling storeCarInfo() with required and optional information
const carInfo = storeCarInfo("Tesla", "Model 3", ["color", "red"], ["feature", "autopilot"]);
// Printing the car object
console.log(carInfo);
