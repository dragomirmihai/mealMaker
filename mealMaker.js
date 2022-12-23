const menu = {
    _courses:{
      appetizers:[],
      mains:[],
      desserts:[]
    },
    get appetizers(){
      return this._curses.appetizers
    },
    get mains(){
      return this._curses.mains
    },
    get desserts(){
      return this._curses.desserts
    },
    set appetizers(appetizer){
      this._courses.appetizers = appetizer
    },
    set mains(mains){
      this._courses.mains = mains
    },
    set desserts(desserts){
      this._courses.desserts = desserts
    },
    get courses(){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
    },
    addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
        name: dishName,
        price: dishPrice
      }
      return this._courses[courseName].push(dish)
    },
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length)
      return dishes[randomIndex];
    },
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name} and total price is ${totalPrice} $`
    }
  }
  
  menu.addDishToCourse('appetizers', 'salad', 5);
  menu.addDishToCourse('appetizers', 'wings', 10);
  menu.addDishToCourse('appetizers', 'fries', 8);
  
  menu.addDishToCourse('mains', 'burger', 12);
  menu.addDishToCourse('mains', 'steak', 18);
  menu.addDishToCourse('mains', 'pizza', 15);
  
  menu.addDishToCourse('desserts', 'clatite', 12);
  menu.addDishToCourse('desserts', 'papanasi', 18);
  menu.addDishToCourse('desserts', 'profiterol', 15);
  
  const meal = menu.generateRandomMeal()
  console.log(meal);