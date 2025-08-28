//singleton
//Object.create

//object literals

const mySym = Symbol("key1") //symbol


const JsUser={
    "full name":"Atul Raj",
    [mySym]: "mykey1",   // syntax to use symbol in objects
    name:"Atul",
    age:18,
    location:"Banglore",
    email:"araj29122004@gmail.com",
}

console.log(JsUser.email) //araj29122004@gmail.com
console.log(JsUser["email"]) //araj29122004@gmail.com
console.log(JsUser["full name"]) //Atul Raj
console.log(JsUser[mySym]) // syntax to access the Symbol

JsUser.email="araj@chatgpt.com" // way to change the email
//Object.freeze(JsUser)  // prevents any future changes
//JsUser.email="araj@google.com" // this wont be reflected
console.log(JsUser) //araj@chatgpt.com


// function implementation in object

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`); // access user name using interpolation and this function
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
