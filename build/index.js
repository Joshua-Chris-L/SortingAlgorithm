"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sorter_1 = require("./sorter");
const CharacterCollection_1 = require("./CharacterCollection");
// const numberCollections = new NumbersCollection([1,3,-5,7,9]);
// const sorter = new Sorter(numberCollections);
// sorter.sort();
// console.log(numberCollections.data);
const characterCollection = new CharacterCollection_1.CharacterCollection("Abytyzopmjklx");
const sorter = new sorter_1.Sorter(characterCollection);
sorter.sort();
console.log(characterCollection.data);
// const linkedList = new LinkedList();
// linkedList.add(500);
// linkedList.add(-10);
// linkedList.add(-3);
// linkedList.add(8)
// const sorter = new Sorter(linkedList);
// sorter.sort();
// console.log(linkedList.print())
// console.log(linkedList);
// console.log("I love Jesus");
