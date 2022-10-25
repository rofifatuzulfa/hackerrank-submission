function MiniMaxSum(arr) {
    let arrSort = arr.sort();
    let miniArr = arrSort.slice(0,4);
    let mini = miniArr.reduce((a,b) => a+b, 0)
    let maxArr = arrSort.slice(1,5);
    let max = maxArr.reduce((a,b) => a+b, 0);
    // return res;
}

console.log(MiniMaxSum([2,3,4,5,1]))