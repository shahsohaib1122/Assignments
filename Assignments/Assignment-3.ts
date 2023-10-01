var nameCases = "My Name is Zohaib";
console.log(`LowerCase:${nameCases.toLowerCase()}`);
console.log(`UpperCase:${nameCases.toUpperCase()}`);

function titleCase(abc:string) {
    let str;
    str = abc.toLowerCase().split(" ");
    for(let i = 0; i < str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(" ");
}

console.log(`TitleCase:${titleCase("My Name is Zohaib")}`);