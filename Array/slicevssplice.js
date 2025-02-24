//slice method

let arrSl =[21,23,35,24]

let arraySliced = arrSl.slice(0,2);  // include the start index
                                     //disclude the end index
                                     //it won't affect he original array
                                   
console.log(arraySliced);
console.log(arrSl)  // original array remains same


//splice method

let arrSpl = [21,23,35,24];

let arrSpliced = arrSpl.splice(0,2);    // include the start index
                                        //it will affect the original array

console.log(arrSpliced);
console.log(arrSpl); // origin array will be changed


