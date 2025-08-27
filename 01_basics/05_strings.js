const name="atul"  //string declaration
const repocount=50

//console.log(name+repocount+"value");
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);//string interpolation - modern way of writing string

const gameName=new String("atul-raj"); //another method of string declaration
console.log(gameName[0]);
console.log(gameName.__proto__);//prototype

//objects or methods
console.log(gameName.length);//4
console.log(gameName.toUpperCase());//ATUL but not change in original string
console.log(gameName.charAt(2));//u
console.log(gameName.indexOf('t')); // 1

const newString=gameName.substring(0,3); // it includes the fisrt key value but not the last key value i.e., atu
console.log(newString);

const anotherString=gameName.slice(-4,3) //same work as substring
console.log(newString);

const newStringOne="      atul     ";
console.log(newStringOne); // print as it is means the spaces also
console.log(newStringOne.trim()); // remove the white spaces from both its begining and end //trim funcation works on ehite spaces and line terminators


const url="https://atul.com/atul%20raj"
console.log(url.replace('%20','-'));//replaces %20 by -

console.log(url.includes('atul')); //true
console.log(url.includes('mishra')); //false

//converting string into array - split

const myName=("atul-raj-mishra");
console.log(myName.split('-'));//[ 'atul', 'raj', 'mishra' ]