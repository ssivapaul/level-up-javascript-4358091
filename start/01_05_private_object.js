// Write your code here

// class User {
//   #username;
//   #password;
//   constructor(username, password) {
//     this.#username = username;
//     this.#password = password;
//   }
//   getUserName() {
//     return this.#username;
//   }
//   getPassWord() {
//     return this.#password;
//   }
// }

// const user = new User("Siva", 1234);
// console.log(user.getUserName());
// console.log(user.getPassWord());

const usr = Symbol("userame");
const pwd = Symbol("passord");

const user = {
  [usr]: "emmabostian",
  [pwd]: "1234566",
  age: 27
};

console.log(user.usr);
console.log(user.pwd);