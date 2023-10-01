"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["Ghalib", "Atish", "Mirza"];
console.log(`\nWe are inviting ${guestList.length} people to dinner.\n`);
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
console.log(`\nNow we are inviting ${guestList.length} people to dinner.\n`);
console.log("Updated set of invitation messages:\n");
guestList.forEach(function (value) {
    console.log(`Dear ${value},I would like to invite you to dinner.So,please come.`);
});
console.log("\nUnfortunately, the new dinner table won't arrive in time for the dinner.\nWe can only invite two people for dinner.\n");
let removeGuest;
for (let i = guestList.length; i > 2; i--) {
    removeGuest = guestList.pop();
    console.log(`Sorry,${removeGuest},I am unable to invite you.`);
}
console.log(`\nNow we are inviting ${guestList.length} people to dinner.\n`);
console.log("Invitation messages for remaining guests:\n");
guestList.forEach(function (value) {
    console.log(`Dear ${value},I would like to invite you to dinner.So,please come.`);
});
guestList = [];
console.log("\nCurrent guest list:", guestList);
