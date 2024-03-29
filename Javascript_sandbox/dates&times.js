let val;

const today = new Date(); // Today's Date
let birthday = new Date('8-16-1990');
birthday = new Date('August 16 1990');
birthday = new Date('8/16/1990');

val = today;
val = birthday;
val = today.getMonth();
val = today.getDate(); 
val = today.getDay(); 
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);

console.log(typeof val);
console.log(birthday);