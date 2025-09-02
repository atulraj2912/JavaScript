//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    //var c=30
    // console.log("INNER: ", a);
    
}



// console.log(a);    // 300   //a(values 10) connot be accesed outside the block scope
// console.log(b);    // b connot be accesed outside the block scope
// console.log(c);    // it will print 30 and hence we generally avoid using var


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))    //it will print the value without any error

function addone(num){
    return num + 1
}

// addone(5)     //it will return the value without any error


//addTwo(5)       //it will show error because of format of declaring function and detail of it will be there in the topic hoisting
const addTwo = function(num){
    return num + 2
}
//addTwo(5)   // it will return the value without any error