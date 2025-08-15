// star pattern

//n*n pattern

// let n = 6

// for (let i = 0; i < n; i++) {
//     let row = ''
//     for (let j = 0; j < n; j++) {
//         row = row + '*'

//     }
//     console.log(row)
// }


//pyramid

let n = 4


for (let i = 0; i < n; i++) {
    let row = ''
    for (let j = 0; j <= i; j++) {
        row = row + '*'
    }
    console.log("pyramid:", row)
}

let m = 5

for (let i = 0; i < m; i++) {
    let count = ''
    for (let j = 0; j <= i; j++) {
        count = count + (j + 1)
    }
    console.log(count)
}


let l = 5

for (let i = 0; i < l; i++) {
    let count = ''
    for (let j = 0; j <= i; j++) {
        count = count + (i + 1)
    }
    console.log(count)
}

//indexing from 1

let k = 5

for (let i = 1; i <= 5; i++) {
    let count = ''
    for (let j = 1; j <= i; j++) {
        count = count + i
    }
    console.log(count)
}


//reverse pyramid number

let a = 5


for (let i = 0; i < a; i++) {
    let row = ''
    for (let j = 0; j < a - i; j++) {
        row = row + (j + 1)
    }
    console.log(row)
}

//reverse pyramid star

for (let i = 0; i < a; i++) {
    let row = ''
    for (let j = 0; j < a - i; j++) {
        row = row + "*"
    }
    console.log(row)
}


//print

//     *
//    **
//   ***
//  ****
// *****


for (let i = 0; i < a; i++) {
    let row = ''
    for (let j = 0; j < a - (i + 1); j++) {
        row = row + '-'
    }
    for (let k = 0; k < (i + 1); k++) {
        row = row + '*'
    };

    console.log(row)
}


for (let i = 0; i < a; i++) {
    let row = ''
    let toggel = 1
    for (let j = 0; j <= i; j++) {
        row = row + toggel

        if (toggel == 1) {
            toggel = 0
        } else {
            toggel = 1
        }
    }
    console.log(row)
}

let toggel = 1
for (let i = 0; i < a; i++) {
    let row = ''

    for (let j = 0; j <= i; j++) {
        row = row + toggel

        if (toggel == 1) {
            toggel = 0
        } else {
            toggel = 1
        }
    }
    console.log(row)
}