"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function makeGreat(magicians) {
    const modifiedMagicians = [];
    for (const magician of magicians) {
        modifiedMagicians.push(`the Great ${magician}`);
    }
    return modifiedMagicians;
}
// Creating an array of magician's names
const magicianNames = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Calling makeGreat() with a copy of the array
const modifiedNames = makeGreat([...magicianNames]);
// Calling the showMagicians() function with both arrays
console.log("Original Magicians:");
showMagicians(magicianNames);
console.log("\nModified Magicians:");
showMagicians(modifiedNames);
