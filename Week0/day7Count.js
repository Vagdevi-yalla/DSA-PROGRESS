// write  a function that returns the count of digits in a number


function countDigits(num) {
    if (num == 0) {
        return 1
    }

    num = Math.abs(num)
    let count = 0;

    while (num > 0) {
        num = Math.floor(num / 10);
        count++
    }

    return count


}


const result = countDigits(-23847)

console.log("result:", result)