let fruits = ["apple","bannana", "orange","cherry"];


//for loop
for(let i =0 ; i<fruits.length;i++){
    console.log(fruits[i]);
}

//while loop

let i = 0;
while(i<fruits.length){
    console.log(`index : ${i}   element : ${fruits[i]}`)
        i++;        
}


//Inbuild loops  

//Map

let arrMap = [1,2,3,4,5,6,7,8]

arrMap.map((item, index, array)=>{
       console.log(`item : ${item}  index :${index}  array : ${array}`)
})

let arrayWith5 = arrMap.map((ele,i,arr)=>{            // it will return array element * 5
         return ele* 5;                        
})
console.log(arrayWith5);       


//filter

let arrFilter = [1,2,3,4,5,6,7,8,9,10]

arrFilter.filter((item, index, array)=>{
    console.log(`item : ${item}  index :${index}  array : ${array}`)
})
 
let arrayWitheven = arrFilter.filter((ele)=>{                // it will return the value greater than 3
     return ele > 3;
})

console.log(arrayWitheven);


//reduce

// array.reduce((previousValue, currentValue, currentIndex, array) => {
//     // Your logic
//  }, initialValue);
 

let arrReduce = [1,2,3,4,5,6,7,8,9,10]

arrReduce.reduce((previousValue,currrentValue ,currenIndex, array )=>{
      console.log(`previousValue : ${previousValue},  currrentValue : ${currrentValue} ,   currenIndex : ${currenIndex}, array : ${array}`)
      return currrentValue;
},0)

let sumArray = arrReduce.reduce((prev, current)=>{  // it will return the sum of the array.
    return prev + current;
},0)

console.log(sumArray);




