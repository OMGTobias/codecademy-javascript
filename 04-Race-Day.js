let raceNumber = Math.floor(Math.random() * 1000);
let early = false;
let age = 18;

if (early && age > 18) {
  raceNumber += 1000;
}

if (age > 18 && early) {
  console.log(`Your race will start at 9:30. Your number is ${raceNumber}`);
} else if (age > 18 && !early) {
  console.log(`Your race will start at 11:00. Your number is ${raceNumber}`);
} else if (age < 18) {
  console.log(`Your race will start at 12:30. Your number is ${raceNumber}`);
} else if (age = 18) {
  console.log("See registration desk");
}
