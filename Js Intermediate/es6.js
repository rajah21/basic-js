// var

// let, const

const school = "Brytahub";
console.log(school);
// school = "Bryta";

const student = {
  name: "Joseph",
  class: "Mobile",
};

console.log(student);
// student = {
//   name: "John",
//   class: "Web"
// };

student.name = "Mary";
student.age = 12;
console.log(student);

const favourites = ["Javascript", "React", "Next"];
for (let index = 0; index < favourites.length; index++) {
  console.log(favourites[index]);
}
// var output = " ";
// output += "<li>" + favourites.[] + "</li>";
// document.getElementById('course').innerHTML = output;
// console.log(index);

// IIFEs

(function () {
  var a = 50;
  var b = 60;
  var sum = a + b;
  console.log("The sum is " + sum);
})();

{
  const age1 = 20;
  const age2 = 30;
  const add = age1 + age2;
  console.log("The total age is " + add);
}

const you = "Joe";
const age = 24;
console.log("Your name is " + you + ". And you are " + age + " years old");

console.log(
  `Your name is ${you}. 
And you are ${age} years old`
);

var developers = [
  {
    name: "victor",
    language: "javascript",
  },
  {
    name: "bidemi",
    language: "javascript",
    age: 66
  },
  {
    name: "lifted",
    language: "javascript",
    age: 99
  },
  {
    name: "frank",
    language: "javascript",
    age: 65
  },
];
developers.map(function (developer) {
  console.log(developer.name + " codes in " + developer.language);
});

developers.map((developer) => {
  //   console.log(developer);
  // object destruction extracting properties from an object
  const { name, language } = developer;
  console.log(`${name} codes in ${language}`);
});
// adding default value to an argument
const interestCalc = (principal, rate = 34, time = 5) => {
  //   if (time === undefined) {
  //     time = 5;
  //   }
  const interest = (principal * rate * time) / 100;
  console.log(`The interest is: ${interest}`);
  //   return interest;
};

interestCalc(50000, 50, 6);
// array destructuring
const grade = ["English", 52];

const [subject, result] = grade;

console.log(subject, result);

function addAges(age1, age2, age3, age4) {
  const sum = age1 + age2 + age3 + age4;
  console.log(sum);
}

const ages = [12, 18, 14, 24, 22];

addAges(ages[0], ages[1], ages[2], ages[3]);
addAges(...ages);

//spread and rest
function addAllAges(...years) {
  let sum = 0;
  //   console.log(years);
  years.forEach((year) => {
    sum += year; // sum = sum + year
  });
  console.log(sum);
}

addAllAges(...ages);
