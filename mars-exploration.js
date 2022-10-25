// Mars Exploration

function marsExploration(sos) {
    let num = sos.length/3;
    let counter = 0;
    // let char = sos.split("");
    let a = 0;
    let b = 3;
    for (let i = 0; i < num; i++) {
        let letter = sos.slice(a, b)
        a += 3;
        b += 3;
        if (letter[0] !== 'S') {counter += 1;}
        if (letter[1] !== 'O') {counter += 1;}
        if (letter[2] !== 'S') {counter += 1;}
    }
    return counter;
}

console.log(marsExploration('SOSSOTTOTOOT'))