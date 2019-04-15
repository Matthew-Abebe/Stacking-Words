let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

let buildMeUp = "";

addExcitement = (theWordArray) => {
    for (i = 0; i < theWordArray.length; i++) {
        if (i === 0 || i % 3 !== 0) {
            buildMeUp += theWordArray[i] + " ";
        }
        else if (i % 3 === 0) {
            buildMeUp += theWordArray[i] + "!"
        }
    }
}

addExcitement(sentence);
console.log(buildMeUp);