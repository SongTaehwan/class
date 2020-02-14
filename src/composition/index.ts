import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// const sorter = new Sorter();
// const sorter = new Sorter();

// 1) number
// const numbersCollection = new NumbersCollection([5,4,6,1,-10,-5])
// const sorter = new Sorter(numbersCollection);
// sorter.sort()
// console.log(numbersCollection.data);


// 2) string
// const charactersCollection = new CharactersCollection(['d', 'c', 'a', 'Z', 'A', 'W', 'r', 's']);
// const sorter = new Sorter(charactersCollection);
// sorter.sort()
// console.log(charactersCollection.data);

// 3) linked list
const linkedList = new LinkedList();
linkedList.add(3)
linkedList.add(-20)
linkedList.add(6)
linkedList.add(4)
linkedList.add(100)
linkedList.add(24)
linkedList.add(-1)
const sorter = new Sorter(linkedList);
sorter.sort()
console.log(linkedList.print());