//fill method

let arr =[1,2,3,4,56,7,6,7,5,11]

// it will make a O from the index 2

arr.fill(0,2);    
console.log(arr);

//FindIndex method

 let arrFI = [1,2,3,4,56,7,6,7,5,11,13,14];

 // it took callback function as a parameter

 indeces = arrFI.findIndex((item)=>{  // return a index of the number.
          return  item ==56;
 })

 console.log(indeces);

 //flat method

 let arrF = [[1,2,3,4,5],[23,23,34,45,"naveen"],78,"vijay",[12,23]]

 //it will make all the nested array into a single array.

  flattedArray=arrF.flat();
 console.log(flattedArray);

 //Reverse method

 let arrRev =[1,2,3,4,5,6,7,8,10,2,3]

 // it will reverse a array

 let reversedArray = arrRev.reverse();

 console.log(reversedArray)


 //sort method 

 arraySo = [2,3,45,34,545,235,4543,34312,2,3,4,"Naveen","Aple"]

 //it will sort the array
 arraySo.sort();
 console.log(arraySo)
 


