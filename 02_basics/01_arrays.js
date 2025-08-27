//Arrays
const myArray = [0,1, 2, 3, 4, 5];
const myHeros=["captain","ironman"];
const myArr2=new Array(1,2,3,4,5);
console.log(myArray);
console.log(myArray[0]);
console.log(myArray.length);
console.log(myArray[myArray.length - 1]);

// Array Methods
myArray.push(6); // adds value
console.log(myArray); // [0, 1, 2, 3, 4, 5, 6]
myArray.pop(); // removes last value
console.log(myArray); // [0, 1, 2, 3, 4, 5]
myArray.unshift(-1); // adds value to the beginning
console.log(myArray); // [-1, 0, 1, 2, 3, 4, 5]
myArray.shift(); // removes first value
console.log(myArray); // [0, 1, 2, 3, 4, 5]

console.log(myArray.includes(9)); // false
console.log(myArray.indexOf(3)); // 3
console.log(myArray.indexOf(5)); // 5

const newArr=myArray.join(); //converts array to string
console.log(newArr); // 0,1,2,3,4,5


// slice, splice

console.log("A", myArray); // A [ 0, 1, 2, 3, 4, 5 ]

const myn1= myArray.slice(1,3) 
console.log(myn1); // [ 1, 2 ]
console.log("B", myArray); // B [ 0, 1, 2, 3, 4, 5 ]

const myn2=myArray.splice(1,3);
console.log(myn1); // [ 1, 2 ]
console.log(myn2); // [ 1, 2, 3 ]
console.log("C", myArray); // C [ 0, 4, 5 ]
