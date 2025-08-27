// Date

let myDate = new Date()
console.log(myDate.toString()); //Wed Aug 27 2025 09:08:52 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Wed Aug 27 2025
console.log(myDate.toISOString());//2025-08-27T09:08:52.838Z
console.log(typeof myDate); //object
console.log(myDate.toLocaleString());//8/27/2025, 9:08:52 AM
let myCreatedDate =new Date(2025,0,23,5,3);// month counting start from 0 i.e., 0 means january
console.log(myCreatedDate.toLocaleString());//1/23/2025, 5:03:00 AM
let myDate1=new Date("2025-1-27"); //in dd-mm-yyyy or yyyy-mm--dd format the month numbering starts from 1 i.e., 1=january

let myTimeStamp= Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());//1674443580000
console.log(Math.floor(Date.now()/1000));//1693117732

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})