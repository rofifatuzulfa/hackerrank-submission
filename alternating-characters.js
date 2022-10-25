function alternatingCharacters(s) {
    // Write your code here
    let counter = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i-1]) {
            counter+=1;
        }
    }
    return counter;
}

console.log(alternatingCharacters("AAABBB"));