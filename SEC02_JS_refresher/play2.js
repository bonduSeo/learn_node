const person = {
  name: "Max",
  age: 29,
  greet() {
    console.log("HI. I am " + this.name);
  },
};
// person.greet();

const printName = ({ name }) => {
  console.log(name);
};
// printName(person);

const { name, age } = person;
// console.log(name, age);

const copiedPerson = { ...person };
// console.log(copiedPerson);

const hobbies = ["sports", "cooking"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

// for (let hobby of hobbies) {
//   console.log(hobby);
// }

// console.log(hobbies.map((hobby) => "Hobby: " + hobby));
// console.log(hobbies);

// const copiedArray = hobbies.slice();
const copiedArray = [...hobbies];
// console.log(copiedArray);
