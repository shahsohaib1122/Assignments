export { };
let magicianNames = ["Harry", "Bittering", "David", "Daniyal"];

let make_great = (magicians:string[]) => {
    for(let i in magicians){
        magicians[i] = `The Great ${magicians[i]}.`
    }
}

let show_magicians = (magicians: string[]) => {
    for (const magician of magicians) {
        console.log(magician);
    }
}

make_great(magicianNames);

show_magicians(magicianNames);