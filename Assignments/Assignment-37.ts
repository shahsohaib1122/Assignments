function makeShirt(size: string = "large", message: string = "I love tpescript") {
    console.log(`The shirt size is ${size} and it will have the message: '${message}' printed on it.`);
}

makeShirt();
makeShirt("medium");
makeShirt("small","Do I really love typescript?");