
const arr = [1,2,3,4,5] 
function oddSum(n){
    isOdd = arr[n] % 2 !==0
    if(n == 0){
        return isOdd?arr[n]:0
        
    }

    return (isOdd ? arr[n]:0 ) + oddSum(n-1)

}

console.log(oddSum(arr.length - 1))