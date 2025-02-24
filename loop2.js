//some

let arrSome = [1,2,3,4,5,6,7,8]
// true or false  => if the array contains the element value more than 5

let isGreaterThan5 = arrSome.some((item, index, array)=>{    
     return item > 5
})

console.log(isGreaterThan5);

// every

let arrEvery = [10,20,30,40,50,60,70,11];
// T or F => if all the elemnets is divided by 10

let multiplesOf10 = arrEvery.every((item,index,array)=>{ 
      return item%10 == 0
});

console.log(multiplesOf10);

// find 

let arrFind = [1,2,3,4,5,100,6,7,4,6,7,23,25,100,102]
// return first value when meets a condition , here  the first value greater that 100

let findMoreThan100 = arrFind.find((item, index, array)=>{
      return item> 100;
})

console.log(findMoreThan100);

