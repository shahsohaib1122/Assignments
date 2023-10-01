"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let alien_color = "green";
//Version that passes if(green) statement
if (alien_color == "green")
    console.log("Congratulations! You just earned 5 points.");
else if (alien_color == "yellow")
    console.log("Congratulations! You just earned 10 points.");
else if (alien_color == "red")
    console.log("Congratulations! You just earned 15 points.");
else
    console.log("Kill a valid color alien");
//Version that passes if(yellow) statement
alien_color = "yellow";
if (alien_color == "green")
    console.log("Congratulations! You just earned 5 points.");
else if (alien_color == "yellow")
    console.log("Congratulations! You just earned 10 points.");
else if (alien_color == "red")
    console.log("Congratulations! You just earned 15 points.");
else
    console.log("Kill a valid color alien");
//Version that passes if(red) statement
alien_color = "red";
if (alien_color == "green")
    console.log("Congratulations! You just earned 5 points.");
else if (alien_color == "yellow")
    console.log("Congratulations! You just earned 10 points.");
else if (alien_color == "red")
    console.log("Congratulations! You just earned 15 points.");
else
    console.log("Kill a valid color alien");
