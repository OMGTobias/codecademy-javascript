//293 kelvin, it's a constant value so its a const variable. It can't be changed
const kelvin = 0;
//Constant value again, Celsius is 273 degrees less than Kelvin so have to subcract that from kelvin and then store in a constant variable named celsius
const celsius = kelvin - 273;
//Non constant variable that calculates Fahrenheit and then saves it
let fahrenheit = celsius * (9/5) + 32;
//Change to round the number so theres no decimal
fahrenheit = Math.floor(fahrenheit);
//from celsius to newton
let newton = celsius * (33/100);
//Change to round the number so theres no decimal
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees newton.`);
