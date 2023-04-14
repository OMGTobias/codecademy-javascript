let userName = 'something';
userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello!`)
const userQuestion = 'What time is it?';
console.log(userQuestion);
//In order to make this set of numbers range from 0 (inclusive) to 8 (exclusive) we can multiply the returned value by 8.
let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);
let eightBall = '';
switch(randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}
console.log(eightBall);