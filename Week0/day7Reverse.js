let n = 1234

let reverse = 0


while (n > 0) {
    let rem = n % 10;
    reverse = (10*reverse)+rem
    n = Math.floor(n / 10)
}


console.log(reverse)