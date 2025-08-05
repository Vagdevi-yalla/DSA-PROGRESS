//sum of two numbers

function addTwoNumbers(a, b) {

    return a + b
}
console.log(addTwoNumbers(6, 7))


//square of two numbers

function squareOfNumber(a) {
    return a * a
}

console.log(squareOfNumber(10))

//Voting eligibility

function voteEligibility(num) {
    return num >= 18 ? "Eligible" : "Not eligible"
}

voteEligibility()
const age = 1
console.log(voteEligibility(age))


//check if number is even or odd

function evenOrOdd(num) {

    if (num % 2 == 0) {
        console.log("even numebr")
    } else {
        console.log("odd numebr")
    }
}
evenOrOdd(13)