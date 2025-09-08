//printing pyramid with only row numbers

function rowPyramid(n){
    for (let i = 1; i <= n; i++) {
        let count = ''
        for (let j = 1; j <= i; j++) {
            count = count + i
        }

        console.log(count)
    }
}

rowPyramid(6)

//result:

// 1
// 22
// 333
// 4444
// 55555
// 666666