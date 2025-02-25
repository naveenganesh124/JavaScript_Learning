//looping into the string

let userName = "Naveenganesh"

for (let i=0; i<userName.length; i++){
      console.log(userName[i]);
}

//Replacing a charater in the string

let  nameReplace = "Unknown person"

console.log(nameReplace.replace("Unknown" ,"Known"));  //it will replace first instance of the particular chanracter

console.log(nameReplace.replaceAll('n','a')); //it will replace all the instance of the  chanracter

//concat

let str = "Naveen is young and energtic "

console.log(str.concat("and he is working in banglore")) // it will include the string into the str


