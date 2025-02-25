//extracting substring

//Substring and slice, need to see again

let str = "naveen is young and engertic!"

console.log(str.substring(20,-1));

//converting Case

let toBeConverted = 1;
console.log(typeof(toBeConverted));
console.log(typeof(String(toBeConverted))); // it will return a string as type



//for object;

let user = {name : "vijayaRaja"};
let userString = '{"nameFirst" : "Unknown raja" , "isConverted" : true }'

console.log(String(user)); // It will not convert that object into string

console.log(JSON.stringify(user)); // it will return a string
console.log(typeof(JSON.stringify(user))); 
console.log(JSON.parse(userString)); //it will convert the string into object


//UpperCase and LowerCase

let caseString = "NaveenGaNEsh"
console.log(caseString.toLowerCase());
console.log(caseString.toUpperCase());


//localeCompare

let str11 = "Naveen";
let str21 = "apple"
console.log(str11.localeCompare(str21));

//include 

let str31 = "subscribe to Naveen youtube channel"

console.log(str31.includes('subscribe'));  // return  T or F by checking that given string is avialble or not

//Split and join strings

let str41 ="Naveen Ganesh"
console.log(str41.split(' ')); //it will return array by spliting the word  by empty space

let arr42 = ["Naveen", "Vijay", "Arun"];
console.log(arr42.join(" and "))  // it will join the array element witht he string and

