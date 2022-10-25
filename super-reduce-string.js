// Super reduced String

function superReducedString(string) {
    for (let i = 1; i < string.length; i++) {
        let prev = string[i - 1];
        let current = string[i];

        if (prev === current) {
            string = string.substring(0, i - 1) + string.substring(i + 1);
            i = 0;
        }
    }
    return string || 'Empty String';
}

console.log(superReducedString('aabb'))
console.log(superReducedString('aabbc'))