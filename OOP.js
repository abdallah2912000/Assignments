// Class is a cind of functions.
class User {
  static init = 0; // This is a static property we can't acces it by objects but can acess it by class itself.
  #con; // Encapsulation
  constructor(name, num) {
    // constructor is method contains params for this func and it's called automatically by new key word.
    // the next code called property
    this.n = name; //this key word means that the n property === name from the new object to be created.
    this.#con = num;
    this.msg = () => {
      return `Your name is ${this.n}`;
    };
    User.init++;
  }
  //Stores class methods in className.prototype.
  //the next code called Methods.
  hello() {
    return `Hello ${this.n} and Your number is ${this.#con}`;
  }
  static count() {
    // This is a static method we can't acces it by objects but can acess it by class itself.
    return this.init;
  }
}

let userOne = new User("Abdullah", 20); // creat a new object contain all methods and propertyes from User class
console.log(userOne.hello());
// console.log(userOne.count()); // return type error cause count is a static method
console.log(User.count()); // return number of objects was created

// Inheritance
class Admin extends User {
  // class Admin inherits all methods from class User.
  constructor(name, num, id) {
    super(name, num);
    this.id = id;
  }
}

let adminOne = new Admin("Ahmed", 30, 5);

console.log(adminOne.hello());
console.log(Admin.count());
