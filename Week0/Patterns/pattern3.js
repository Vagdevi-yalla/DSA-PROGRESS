//printing numbers in pyramid

function numberPyramid(n){
   
    for(let i = 1; i <= n; i++){
        let count =  ' '
        for(let j = 1; j <=i; j++){
            count = count +  j
           
        }
         console.log(count)
    }
}

numberPyramid(5)

//result:

//  1
//  12
//  123
//  1234
//  12345