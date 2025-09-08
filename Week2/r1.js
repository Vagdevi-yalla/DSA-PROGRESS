const myArray = [1,2,3,4,5] 


function sumOfAllArrayElements(n){
 
 if (n == 0){
    return myArray[n]
 }

 return myArray[n] + sumOfAllArrayElements(n-1)
}



console.log(sumOfAllArrayElements(myArray.length - 1))