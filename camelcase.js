// camelCase

function camelCase(string) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase())
        counter++;
    }
    return counter + 1;
}

console.log(camelCase('apakahKauMenyayangiku'))