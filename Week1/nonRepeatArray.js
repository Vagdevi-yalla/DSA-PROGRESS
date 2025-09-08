let array1 = [2,3,4,5,2,3,3,4,4,4,6]

function nonRepeat(arr){

    for (let i = 0; i < arr.length; i++) {
        let count = 0
        for (j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++
            }


        }
        if (count === 1) {
            console.log(arr[i])
        }

    }
}

nonRepeat(array1)