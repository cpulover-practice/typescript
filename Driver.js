"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Student_1 = require("./Student");
var person1 = new Person_1.Person("Ma", "Tri");
var person2 = new Student_1.Student("Hieu", "Ngo", "Software Engineering");
console.log(person1.toString());
console.log(person2.toString());
