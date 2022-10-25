function BirthdayCakeCandles(candles) {
    let sortCandles = candles.sort();
    let counter = 0;
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] == candles[candles.length-1]) {
            counter++; 
        }
    } 

    return counter;
}

console.log(BirthdayCakeCandles([3,2,1,3]));