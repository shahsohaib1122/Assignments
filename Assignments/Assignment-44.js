"use strict";
let sandwichOrder = (items) => {
    console.log("Sandwich Order");
    for (const item of items) {
        console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!\n");
};
sandwichOrder(["Turkey", "Cheese", "Lettuce"]);
sandwichOrder(["Ham", "Tomato"]);
sandwichOrder(["Chicken", "Avocado", "Bacon", "Mayo"]);
