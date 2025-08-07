//write a function that searches for an element in an array and returns the index, and if the element is not present then just return -1



function searchElement(element, source) {

    for (let i = 0; i < source.length; i++) {


        if (source[i] == element) {

            return i
        }

    }

    return -1

}

console.log(searchElement(20, [5, 8, 9, 33, 7, 2, 1]))
console.log(searchElement(7, [5, 8, 9, 33, 7, 2, 1]))



//write a function that returns the numbers of negative numbers in an array


function countNegatives(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++
        }


    }
    return count
}


console.log(countNegatives([-1, 7, -8, -11, 2, 3, -4, -6]))
console.log(countNegatives([5, 8, 9, 33, 7, 2, 1]))



//Write a function that returns the largest numebr in an array

function largestNumber(arr) {
    let largest = -Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]

        }


    }

    return largest


}

console.log("largest number:", largestNumber([5, 8, 9, 45, 2, 1, 33]))


//Write a function to return the smallest number in an array

function smallestNumber(arr) {
    let smallest = Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
        }
    }

    return smallest
}

console.log("smallest number:", smallestNumber([5, 8, 9, 45, 2, -11, -1, 33]))