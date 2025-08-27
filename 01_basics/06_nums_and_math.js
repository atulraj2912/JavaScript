const score=400
console.log(score);//400

const balance= new Number(100)
console.log(balance);// [Number: 100]
console.log(balance.toString()); //converts the number to string
console.log(balance.toString().length); //3(denoted the length of string)
console.log(balance.toFixed(2)); //100.00

const otherNumber=23.8966
console.log(otherNumber.toPrecision(4));  // conerts to string and gives precise value // 23.90

const hundreds=1000000
console.log(hundreds.toLocaleString()); //1,000,000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000


//+++++++++++++++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math); // Object [Math] {} //contains various methods
console.log(Math.abs(-4)); //4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.2)); //4
console.log(Math.min(4,3,6,8));  // 3
console.log(Math.max(4,3,6,8));  //8

console.log(Math.random()); //values between 0 and 1
console.log(Math.random()*10); // values bwtween 0 and 9
console.log((Math.random()*10)+1);  //values between 1 and 9
console.log(Math.floor(Math.random()*10)+1); // integer values between 1 and 9

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min); //integer values between min and max values
