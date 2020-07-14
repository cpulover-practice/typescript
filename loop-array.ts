let myLanguages: string[] = ["Java", "Python"];

// Normal for loop
console.log("My languages on June:")
for (let i = 0; i < myLanguages.length; i++) {
    console.log(myLanguages[i]);
}

// TypeScript array is dynamic
myLanguages.push("TypeScript");

// Simplified for foop
console.log("My languages on July:")
for (let language of myLanguages) {
    if (language == "Java") {
        console.log(`${language} <<< My favorite!`);
    }
    else { console.log(language); }
}
