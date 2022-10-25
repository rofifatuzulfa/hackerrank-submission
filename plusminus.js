function PlusMinus(arr) {
    let pos = 0;
    let min = 0;
    let zero = 0;
    for (let i = 0; i < arr.length ; i++) {
        if (arr[i] > 0) {
            pos++;
        } else if (arr[i] < 0) {
            min++;
        } else if (arr[i] == 0) {
            zero++;
        }
    }
    console.log((pos/arr.length).toFixed(6));
    console.log((min/arr.length).toFixed(6));
    console.log((zero/arr.length).toFixed(6));
    return;
}

console.log(PlusMinus([1,1,0,-1,-1]));