const myAge = 12; 
let earlyYears = 2;
earlyYears *= 10.4;
let laterYears = myAge - 2;
laterYears *= 4;

console.log(earlyYears + ' ' + laterYears);

let myAgeInDogYears = earlyYears + laterYears;

let myName = 'Tobias'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);