function StairCase(n) {
    for (let i = 1, j = (n-1); i <= n; i++, j--) {
        console.log(" ".repeat(j) + "#".repeat(i));
    }
    return ;
}

console.log(StairCase(6))