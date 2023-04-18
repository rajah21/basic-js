var emmanuel = {
  firstName: "Emmanuel",
  lastName: "Efegoma",
  course: "Architecture"
};
console.log(emmanuel);

var Student = function(firstName, lastName, course, yearOfEntry) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.course = course;
  this.yearOfEntry = yearOfEntry;
};

Student.prototype.active = true;
Student.prototype.calcYears = function() {
  console.log(2019 - this.yearOfEntry);
};

var lifted = new Student("Lifted", "Ugheoke", "ICT", 2019);
var frank = new Student("Frank", "Ikpe", "Computer Science", 2015);

console.log(lifted);
console.log(frank);
console.log(lifted.active);
console.log(frank.calcYears());

const names = "John ogie";
console.log(names);

String.prototype.replaceAll = function(search, replace) {
  var scope = this;
  return scope.split(search).join(replace);
};

console.log(names.replaceAll("o", "a"));

console.log("Joe is a boy in class 2".replaceAll("i", "o"));
console.log("5,000,000".replaceAll(",", ""));

var Developer = {
  language: "Javascript",
  experience: 5
};

var victor = Object.create(Developer);
victor.level = "Intermediate";
victor.location = "Abuja";

var bidemi = Object.create(Developer, {
  level: { value: "Intermediate" },
  location: { value: "Abuja" }
});

console.log(victor);
console.log(bidemi);

//Primitives and Objects

var student1 = "Ife";
var student2 = student1;

student1 = "Tade";

console.log(student1);
console.log(student2);

var person1 = {
  age: 12
};
var person2 = person1;

person1.age = 15;
person2.age = 40;

console.log(person1);
console.log(person2);

function updateValue(first, second) {
  first = "Justus";
  second.age = 35;
}

updateValue(student1, person1);

console.log(student1);
console.log(person1.age);

//functions
var scores = [76, 87, 98, 74, 59];

function calculator(arr, fn) {
  var resultArray = [];
  for (var index = 0; index < arr.length; index++) {
    resultArray.push(fn(arr[index]));
  }
  return resultArray;
}

function isPassed(value) {
  return value >= 70;
}

var passes = calculator(scores, isPassed);
console.log(passes);

// i = (p*r*t)/100
function interestCalc(principal, rate, time) {
  var interest = (principal * rate * time) / 100;
  return interest;
}
var p = 5000;
var r = 34;
var t = 5;
interestCalc(p, r, t);

//functions returning functions
//closures
function jobPayment(language) {
  if (language === "Javascript") {
    return function(name) {
      console.log(language);
      console.log("Hey " + name + ", you wil be paid N10000 per hour");
    };
  } else {
    return function(name) {
      console.log(language);
      console.log("Hey, " + name + ". We owe you not!");
    };
  }
}

var jsJob = jobPayment("Javascript");
var javaJob = jobPayment("Java");

jsJob("John");
javaJob("Janet");

jobPayment("Javascript")("Peter");
jobPayment("Python")("Paulina");

//IIFE - Immediately Invoked Function Expressions
function dice() {
  var value = Math.floor(Math.random() * 6) + 1;
  return value === 6;
}
console.log(dice());

(function() {
  var value = Math.floor(Math.random() * 6) + 1;
  console.log(value === 6);
})();

(function(bet) {
  var value = Math.floor(Math.random() * 6) + 1;
  console.log(value === bet);
})(4);

//bind, call and apply
var emmanuel = {
  name: "Emmanuel",
  course: " Architecture",
  greeting: function(format, dayTime) {
    if (format === "formal") {
      console.log(
        "Good " + dayTime + ", ladies and gentlemen. My name is " + this.name
      );
    } else {
      console.log(
        "Howdy, " + dayTime + ", guys and ladies. My name is " + this.name
      );
    }
  }
};

var lifted = {
  name: "Lifted",
  course: "ICT"
};
emmanuel.greeting("informal", "morning");
// lifted.greeting("formal", "afternoon");
emmanuel.greeting.call(lifted, "formal", "evening");
// emmanuel.greeting.apply(lifted, ["formal", "evening"]);

var emmanuelInformal = emmanuel.greeting.bind(emmanuel, "informal");
emmanuelInformal("afternoon");

var liftedFormal = emmanuel.greeting.bind(lifted, "formal");
liftedFormal("evening");
