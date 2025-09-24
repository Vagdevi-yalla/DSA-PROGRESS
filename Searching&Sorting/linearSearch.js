function linearSearch(arr, num){
    for(let i = 0;i<arr.length; i++){
        if(arr[i]=== num){
            return i
        }
    }

    
    return -1
        

}
let myArray = [2,4,6,7,3,53,87,8]
console.log(linearSearch(myArray, 6))