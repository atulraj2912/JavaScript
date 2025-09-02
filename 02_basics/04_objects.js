// object singletons

const tinderUser = new Object() // singleton object
// cibst tinderUser = {}  //non-singleton object

tinderUser.id ="123abc"
tinderUser.name ="Samay"

console.log(tinderUser);

const regularUser = {
    email:"abc@abc.com",
    fullname: {
        userfullname: {
            firstname: "Atul",
            lastname: "Raj"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

//combining two objects
const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"c", 4:"d"}

//const obj3 = {obj1,obj2}  // this will put object inside object which is not a good idea

//const obj3 =Object.assign({}, obj1, obj2) // syntax to merge two objects //without {}, it will give same result but it is a good practise to put {} as it ensures that the combined value of any number of objects is stored in the empty object and if we dont put it, it will be stored in the obj1


// another and most used way to combine objects
const obj3={...obj1, ...obj2}; // spread operator ...

//console.log(obj3);

//one more syntax can be used specially if we take values from database

//values fro database are usually came in array format 
const users =[         //array of objects
    {
        id: "1",
        email: "abc@gmail.com"
    },
    {
        id: "2",
        email:"abc"
    },
]

users[1].email ///access 1st user email through dot notation
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //it will return all the key values in array so we can easily do any operations like looping etc on it
console.log(Object.values(tinderUser)); //same we can do it with values
console.log(Object.entries(tinderUser)); //return array containing key value pair in array i.e., [ [ 'id', '123abc' ], [ 'name', 'Samay' ] ]

// to find whether there is an existing property or not of an object
console.log(tinderUser.hasOwnProperty('name'));  //true
console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //false
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
