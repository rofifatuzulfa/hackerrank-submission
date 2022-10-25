function CompareTriplets(a, b) {
    let countA = 0;
    let countB = 0;
    let res = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            countA++;
            // i++;
        } else if (a[i] < b[i]) {
            countB++;
            // i++;
        } else {
            continue;
        }
    }
    res.push(countA);
    res.push(countB);
    return (res);
}

console.log(CompareTriplets([17,28,30], [99,16,8]))