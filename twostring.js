// Two Strings

function twoStrings(s1, s2) {
    if (s2.length < s1.length) [s1, s2] = [s2, s1];
    for (let i = 0; i < s1.length; i++) {
        if (s1.includes(s2[i]))
        return 'YES';
    }
    return 'NO';
}

console.log(twoStrings('anyeong', 'world'))

// module.exports = twoStrings;