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

//trim

let str1 ="               hello            world     "
 console.log(str1.trim()); // it will remove the leading space from starting and ending

//IndexOF

let stringIndex = "Naveen and vijay are friends"
 
console.log(stringIndex.indexOf('e'));  // it will return the first index of the given value
console.log(stringIndex.lastIndexOf('e')) // it will return the last indec of the given value


//startsWith and endswith

let strwi = "time is gold"

console.log(strwi.startsWith('r'));  // return t or f,by checking starting character of the given string
console.log(strwi.endsWith('d')); // return t or f,by checking ending character of the given string



