function findMedian(arr) {
    // Write your code here
    arr.sort((a,b) => a - b);
    let loc = Math.floor(arr.length/2);
    return arr[loc];
}

console.log(findMedian([0,1,2,4,6,5,3]));