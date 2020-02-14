import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// 1) number
const numbersCollection = new NumbersCollection([7,4,8,2,9,-10]);
numbersCollection.sort();
console.log('num: ', numbersCollection)
// 2) character
const charactersCollection = new CharactersCollection(['z', 'y', 'b', 'A', 'B', 'K', 'l']);
charactersCollection.sort();
console.log('char: ', charactersCollection)
// 3) linked list
const linkedList = new LinkedList();
linkedList.add(3)
linkedList.add(-20)
linkedList.add(6)
linkedList.add(4)
linkedList.add(100)
linkedList.add(24)
linkedList.add(-1)
linkedList.sort();
console.log(linkedList.print());
