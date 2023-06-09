//Object of empty menu
const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  
//Creating getters and setters
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },
  set mains(mains) {
    this._courses.mains = mains;
  },
  set desserts(desserts) {
    this._courses.desserts = desserts;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  
//Adding a new dish to the specified course
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  
//Geting a random dish from a course
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];    
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  
//Generating a random meal
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');  
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice.toFixed(2)}`;
  },
};

//Adding dishes to appetizers, mains, and desserts
menu.addDishToCourse('appetizers', 'Mozzarella sticks', 5.65);
menu.addDishToCourse('appetizers', 'Chips and Salsa', 4.00);
menu.addDishToCourse('appetizers', 'wings', 8.50);

menu.addDishToCourse('mains','Steak', 20.13);
menu.addDishToCourse('mains','Quesadilla', 12.90);
menu.addDishToCourse('mains','Cheeseburger', 10.90);

menu.addDishToCourse('desserts','cake',6.20);
menu.addDishToCourse('desserts','brownies',6.50);
menu.addDishToCourse('desserts','ice cream',6.90);

const meal = menu.generateRandomMeal();
console.log(meal);