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

let arr = [1,2,3,4,5,6,7,8]

arr.map((item, index, array)=>{
       console.log(`item : ${item}  index :${index}  array : ${array}`)
})

let arrayWith5 = arr.map((ele,i,arr)=>{
         return ele* 5;
})
console.log(arrayWith5);



