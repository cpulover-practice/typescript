var myLanguages = ["Java", "Python"];
// Normal for loop
console.log("My languages on June:");
for (var i = 0; i < myLanguages.length; i++) {
    console.log(myLanguages[i]);
}
myLanguages.push("TypeScript");
// Simplified for foop
console.log("My languages on July:");
for (var _i = 0, myLanguages_1 = myLanguages; _i < myLanguages_1.length; _i++) {
    var language = myLanguages_1[_i];
    if (language == "Java") {
        console.log(language + " <<< My favorite!");
    }
    else {
        console.log(language);
    }
}
