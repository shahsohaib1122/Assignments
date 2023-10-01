"use strict";
let usernames = ["Ghalib", "Mirza", "admin", "Iqbal", "Bilal"];
usernames.forEach(function (value) {
    if (value == "admin") {
        console.log(`Hello ${value},would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${value},thank you for logging in again.`);
    }
});
