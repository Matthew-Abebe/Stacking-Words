let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

let buildMeUp = "";

addExcitement = (theWordArray, character) => {
    for (i = 0; i < theWordArray.length; i++) {
        if (i === 0 || i % 3 !== 0) {
            buildMeUp += theWordArray[i] + " ";
        }
        else if (i % 3 === 0) {
            buildMeUp += theWordArray[i] + character
        }
    }
}

addExcitement(sentence, "?");
console.log(buildMeUp);