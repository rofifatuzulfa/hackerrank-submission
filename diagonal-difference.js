function DiagonalDifference(arr) {
    let j = arr.length;
    let dia1 = 0;
    let dia2 = 0;

    for (let i = 0; i < arr.length; i++) {
        j--;
        dia1 += arr[i][i];
        dia2 += arr[i][j];
    }
    return Math.abs(dia1 - dia2)
}

console.log(DiagonalDifference([[1,2,3], [4,5,6], [9,8,9]]));