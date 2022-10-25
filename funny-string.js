function funnyString(s) {
    // Write your code here
    let reverseStr = s.split('').reverse().join('');
    let ascii = [];
     for (let i = 0; i < reverseStr.length; i++) {
         let code = reverseStr.charCodeAt(i)
         ascii.push(code);
     }

    // console.log(asciiRev);
    let asciiRev = [];
    for (let j = ascii.length - 1; j >= 0; j--) {
        asciiRev.push(ascii[j]);
    }
    
    let diff = 0;
    let arrdiff = [];
    for (let k = 0; k < ascii.length - 1; k++) {
        diff = Math.abs(ascii[k+1]-ascii[k]);
        arrdiff.push(diff)
    }

    let diff2 = 0;
    let arrdiff2 = [];
    for (let m = 0; m < asciiRev.length - 1; m++) {
        diff2 = Math.abs(asciiRev[m+1]-asciiRev[m]);
        arrdiff2.push(diff2)
    }
    
    let sum = 0;
    for (let n = 0; n < arrdiff.length; n++) {
        if (arrdiff[n] == arrdiff2[n]) {
            sum += 1;
        }
    }

    if (sum === arrdiff.length) {
        return 'Funny'
    }
    return 'Not Funny'
}

console.log(funnyString("acxz"));
console.log(funnyString("bcxz"));