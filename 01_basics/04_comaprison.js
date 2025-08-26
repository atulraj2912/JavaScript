console.log(2>1);//true
console.log(2>=1); //true   these types are simple 

//comparison between two different datatypes // sometimes leads to unpredictable results

console.log("2">1);//true
console.log("02">1);//true

console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true 

// strict checks ===  (it also checks datatype)
console.log("2"==2) //true
console.log("2"===2)//false