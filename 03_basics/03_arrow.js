const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); //prints hitesh
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);   //undefined because with this syntax we can only access the context in objects not functions
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);  //undefined because with this syntax we can only access the context in objects not functions
// }

const chai =  () => {      // since it was not accessed in function so arrow function was introduced. replace function keyword with =>
    let username = "hitesh"
    console.log(this);  //still same  //undefined because with this syntax we can only access the context in objects not functions
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2        //explicit return
// }

// const addTwo = (num1, num2) =>  num1 + num2   //implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )  // implicit return

const addTwo = (num1, num2) => ({username: "hitesh"})   //return object


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()