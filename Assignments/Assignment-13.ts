let ownArray = [
    "Civic",
    "Honda",
    "Corolla",
    "Airplane",
    "Boat"
]

ownArray.forEach(function (value) {
    switch (value) {
        case "Civic":
            console.log("I want to buy a Civic.");
            break;
        case "Honda":
            console.log("I also want to own a Honda.");
            break;
        case "Corolla":
            console.log("I thinks Corolla is also suitable for me.");
            break;
        case "Airplane":
            console.log("By flying in an airplane,we can cover large distances.");    
            break;
        case "Boat":
            console.log("Sailing in the boat is also a peaceful panorama.");
            break;
        default :
        console.log("Unknown mode of transportation.");
    }
})