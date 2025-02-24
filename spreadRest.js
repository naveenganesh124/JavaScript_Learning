//spread operator [...arr1,...arr2];

let userlist1 = ["Naveen","vijay", "tamil","vijay","ravi", "mathan"]
let userlist2 = ["surya", "nithish", "ganga"]

//it will combine all the element in given array

let users = [...userlist1, ...userlist2];



console.log(users)

//rest operator 

let data1 = [12,23,45,"Naveen"];
let data2 = [23,34,76, "vijya", "vinay"]

//its for function, if we are not sure  
// how much parmater will come for the function 
//  but we need to keep all in single array means. Rest will work fine


function wholeData(...value){
    return value
}

console.log(wholeData(...data1, ...data2,"vipul",1234))


//concat operator

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10]

let allNumbers =arr1.concat(arr2)
console.log(allNumbers);
console.log(allNumbers2)

//concat and spread will work as same, spread is more faster.