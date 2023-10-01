"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicianNames = ["Harry", "Bittering", "David", "Daniyal"];
let make_great = (magicians) => {
    for (let i in magicians) {
        magicians[i] = `The Great ${magicians[i]}.`;
    }
};
let show_magicians = (magicians) => {
    for (const magician of magicians) {
        console.log(magician);
    }
};
make_great(magicianNames);
show_magicians(magicianNames);
