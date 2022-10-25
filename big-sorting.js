// Big Sorting

function bigSorting(arr) {
    arr.sort((a, b) => a - b)
    return arr
}

console.log(bigSorting([5, 10000, 3.14, 2, 10]))