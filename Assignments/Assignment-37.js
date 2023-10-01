"use strict";
function makeShirt(size = "large", message = "I love tpescript") {
    console.log(`The shirt size is ${size} and it will have the message: '${message}' printed on it.`);
}
makeShirt();
makeShirt("medium");
makeShirt("small", "Do I really love typescript?");
