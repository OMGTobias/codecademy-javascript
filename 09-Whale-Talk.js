//String to be converted into whale speak
let input = "Turpentine And Turtles";
input = input.toLowerCase();

// vowels array
const vowels = ['a', 'e', 'i', 'o', 'u'];

//Array to store vowels found inside of 'Input' string.  This will an empty array initially.
let resultArray = [];

//Logic that compares 'Input' variable text to the 'vowels' array.  Goal is to find all the vowels inside the 'Input' string.  We will use a for loop
for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {  
  for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {  
    if (input[inputIndex] === vowels[vowelIndex]) {
      resultArray.push(input[inputIndex]);
    }    
  }
  if (input[inputIndex] === 'e' || input[inputIndex] === 'u') {
    resultArray.push(input[inputIndex]);
  }
}

console.log(resultArray.join('').toUpperCase());