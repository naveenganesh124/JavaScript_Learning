let arr = new Array();
arr.push(5, 5);
console.log(` arr  : ${arr}`);

//----Easy array creation 

let easyArrCreation = [5, 6]
console.log(`easyArrCreation ${easyArrCreation}`);


//- accesing the array element

let fruits =["apple","orange","banana"];  //index value starts from 0
console.log(fruits[1]);   

//Array will allow object also
 
fruitWithExpiryDate ={
    fruitName : "pineapple",
    expiryDate : "13.12.2025"
}

fruits1 = ["apple","bannana", "orange" , fruitWithExpiryDate.fruitName];

console.log(fruits1);
console.log(fruits1.length); //for getting the length of an array
