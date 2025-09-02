// Immediately Invoked Function Expressions (IIFE)
//sometimes global scopes create pollutions. to avoit it we use iife

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();     //implecit return  //semicolon is needed here to seperate the two functions

( (name) => {     //arrow function
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
