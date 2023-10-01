"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["Ghalib", "Atish", "Mirza"];
let guest = guestList[1];
console.log(`${guest} cannot make it to the dinner.\n`);
guestList[1] = "Rahat";
console.log("Printing new set of invitation messages.");
guestList.forEach(function (value) {
    console.log(`Dear ${value},I would like to invite you to dinner.So,please come.`);
});
console.log("\nHurrah!We found a bigger dinner table");
guestList.unshift("Iqbal");
guestList.splice((guestList.length / 2), 0, "Shibli");
guestList.push("Noman");
console.log("\nUpdated set of invitation messages:\n");
guestList.forEach(function (value) {
    console.log(`Dear ${value},I would like to invite you to dinner.So,please come.`);
});
