//Printing pyramind  with star

function pyramid(n){
    for(let i =0; i < n; i++){
        row = ' '
        for(let j = 0; j <= i; j++){
          row = row + " * "
        }
        console.log(row)
    }
}

pyramid(5)

//result:

//   * 
//   *  * 
//   *  *  *
//   *  *  *  *
//   *  *  *  *  *