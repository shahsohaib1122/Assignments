let current_users = ["Bilal", "Ahmed", "Ali", "Mohsin", "Zain"];
let new_users = ["Moaz", "bilal", "Hammad", "Daniyal", "ahmed"];

for (let i = 0; i < new_users.length; i++) {
    let usernameExits = false;
    for (let j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            usernameExits = true;
            break;
        }
    }

    if (usernameExits) {
        console.log(`Sorry,the username '${new_users[i]}' is already taken.Please choose a differnet username.`);
    }
    else {
        console.log(`Congratulations!The username '${new_users[i]}' is available.`);
    }

}