export {};
let usernames = ["Ghalib","Mirza","admin","Iqbal","Bilal"];

if (usernames.length == 0) {
  console.log("We need to find some users!");
} else usernames.forEach(function(value){
    if(value == "admin"){
        console.log(`Hello ${value},would you like to see a status report?`);
    }
    else{
        console.log(`Hello ${value},thank you for logging in again.`)
    }
})

// Removing all usernames from the array
usernames = [];

if (usernames.length == 0) {
  console.log("We need to find some users!");
}
