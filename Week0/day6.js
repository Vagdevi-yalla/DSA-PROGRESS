//find the second largest number in an array

function secondLargestNumber(arr) {
    let largest = -Infinity
    let secondLargest = -Infinity
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largest) {
            secondLargest = largest
            largest = arr[i]
        } else if (arr[i] > secondLargest) {
            secondLargest = arr[i]
        }
    }

    return secondLargest
}

console.log("secondLargestNumber:", secondLargestNumber([5, 8, 9, 45, 2, -11, -1, 33]))


//with edge cases


//find the second largest number in an array

function secondLargestNumber(arr) {
    if (arr.length < 2) {
        return "Array should have more than 2 numbers"
    }
    let largest = -Infinity
    let secondLargest = -Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest
            largest = arr[i]
        } else if (arr[i] > secondLargest && arr[i] != largest) {
            secondLargest = arr[i]
        }
    }

    return secondLargest
}

console.log("secondLargestNumber:", secondLargestNumber([5, 8, 8, 9, 33, 45, 45, 2, -11, -1, 33]))


//loop in loop

//loop in loop


for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(i + " " + j)
    }
}
console.log("======================================")

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < i; j++) {
        console.log("2:", i + " " + j)
    }
}


console.log("======================================")

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i; j++) {
        console.log(i + " " + j)
    }
}

console.log("======================================")

for (let i = 0; i < 3; i++) {
    for (let j = i; j > 0; j--) {
        console.log(i + " " + j)
    }
}

console.log("======================================")

//infinite loop
// for (let i = 0; i < 3; i++) {
//     for (let j = i; j <= 0; j--) {
//         console.log(i + " " + j)
//     }
// }

for (let i = 0; i < 3; i++) {
    for (let j = i; j >= 0; j--) {
        console.log(i + " " + j)
    }
}


console.log("======================================")

for (let i = 5; i >0; i--) {
    for (let j = 0; j < i; j++) {
        console.log(i + " " + j)
    }
}