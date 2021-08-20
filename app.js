const menu={
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
},
get appetizers(){
return this._courses.appetizers;
},
set appetizers(appetizerIn){
this._courses.appetizers=appetizerIn;
},
get mains(){
return this._courses.mains;
},
set mains(mainIn){
this._courses.mains=mainIn;
},
get desserts(){
return this._courses.desserts;
},
set desserts(dessertIn){
this._courses['desserts']=dessertIn;
},
get courses(){
  return{appetizers: this.appetizers,
         mains: this.mains,
         desserts: this.desserts
}

},
addDishToCourse(courseName,dishName,dishPrice){
const dish ={
  name:dishName,
  price: dishPrice
};
return this._courses[courseName].push(dish);

},
getRandomDishFromCourse(courseName){
const dishes=this._courses[courseName];
const i=Math.floor(Math.random()*dishes.length);
return dishes[i];
},
generateRandomMeal(){
  const appetizer
  =this.getRandomDishFromCourse('appetizers');
 const main=
 this.getRandomDishFromCourse('mains');
 const dessert=
 this.getRandomDishFromCourse('desserts');

 const totalPrice=appetizer.price + main.price + dessert.price;
 return `Your meal is ${appetizer.name},${main.name} and
 ${dessert.name}. The price is ${totalPrice}.`;
}
 
};
menu.addDishToCourse('appetizers','Caesar Salad',11);
menu.addDishToCourse('appetizers','pudding',15);
menu.addDishToCourse('appetizers','cake',9);

menu.addDishToCourse('mains','pizza',20);
menu.addDishToCourse('mains','sandwitch',22);
menu.addDishToCourse('mains','fries',18);

menu.addDishToCourse('desserts','shake',13);
menu.addDishToCourse('desserts','yogurt',5);
menu.addDishToCourse('desserts','pancake',7);

let meal=menu.generateRandomMeal();

console.log(meal);
