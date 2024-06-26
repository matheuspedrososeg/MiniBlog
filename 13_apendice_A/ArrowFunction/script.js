// 2 Arrow function
const sum = function sum(a, b) {
  return a + b;
};

const arrowSum = (a, b) => a + b;

console.log(sum(5, 5));
console.log(arrowSum(5, 5));

const greeting = (name) => {
  if (name) {
    return "Olá" + name + "!";
  } else {
    return "Olá!";
  }
};

console.log(greeting("Gustavo"));
console.log(greeting(0));

const testeArrow = () => console.log("testou!");

testeArrow();

const user = {
  name: "Theo",
  sayUserName() {
    var self = this
    setTimeout(function () {
      console.log(self);
      console.log("Username: " + self.name);
    }, 500);
  },
  sayUserNameArrow(){
    setTimeout(() => {
        console.log(this)
        console.log("Usernama: " + this.name)
    }, 700)
  }
};

user.sayUserName()
user.sayUserNameArrow()