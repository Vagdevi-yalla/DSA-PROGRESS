for (let i = 0; i < 10; i++) {
    console.log("single increment", i)
}

for (let i = 2; i < 9; i = i + 2) {
    console.log("vasu:::", i)
}

for (let i = 5; i > 0; i = i - 1) {
    console.log("decrement")
}

//print all even numbers from an array


function printOnlyEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log("even number:", arr[i])
        }
    }

}

const ages = [22, 3, 2, 28, 3, 7, 8, 39, 283]
printOnlyEven(ages)


let arr1 = [22, 3, 2, 28, 3, 7, 8, 39, 283]
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0) {
        console.log("even number:", arr1[i])
    }
}

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 1) {
        console.log("odd number:", arr1[i])
    }
}
