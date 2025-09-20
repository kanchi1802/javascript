let score = "33abc"
console.log(typeof score);
console.log(typeof (score));    //can also be written as method

let valueInNumber = Number(score)  /*number mein conversion hota hai using keyword(Number),
similarly String and other variables can be also converted*/ 

console.log(typeof valueInNumber); //33abc cannot be converted in a number so we will check value 
console.log(valueInNumber); //nan means not a number, so isliye don't rely on typecheck

/* 
"33" = 33
 "33abc" = NaN
 true = 1
 false = 0
 null = 0
 undefined = NaN
 */

 let value = ""
 let booleanvalue = Boolean(value);
 console.log(typeof booleanvalue);
 console.log(booleanvalue);
 /* 1 = true, 0 = false, "" = false, 
 "kanchi" = true, 764 = true */

 let number = 44
 let stringnum = String(number)
 console.log(typeof stringnum);
 console.log(stringnum); 
 // looks like numbe but string mein convert hogya hai