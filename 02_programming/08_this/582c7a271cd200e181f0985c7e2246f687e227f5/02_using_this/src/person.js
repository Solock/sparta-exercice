const person = {
  firstname: "Abdel",
  lastname: "Sadki",
  age: 42,
  fullname: function () {
    return `${this.firstname} ${this.lastname}`;
  },
  introduceMyself: function () {
    console.log(`Hello! I'm ${this.fullname()} and I'm ${this.age}.`);
    return this;
  },
  growOlder: function () {
    this.age = this.age + 1;
    return this;
  },
  // Complete here
};

console.log(person.introduceMyself().growOlder().introduceMyself());

module.exports = person;
