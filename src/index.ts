import { Sorter } from "./sorter";
import { NumbersCollection } from "./NumberCollections";
import { CharacterCollection } from "./CharacterCollection";

// const numberCollections = new NumbersCollection([1,3,-5,7,9]);
// const sorter = new Sorter(numberCollections);
// sorter.sort();
// console.log(numberCollections.data);

const characterCollection = new CharacterCollection("Abytyzopmjklx");
const sorter = new Sorter(characterCollection);
sorter.sort();
console.log(characterCollection.data)