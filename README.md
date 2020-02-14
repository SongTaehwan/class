## Installation & Run
```
npm install -g typescript // if need
npm install
npm start // shortcut for npm run start:build && npm run build:run
```

## Explanation
- ```src/Sort.js```
  - Simple basic Bubble sort class but can only sort numbers of array
- ```src/inheritance/Sort.js``` 
  - Bubble sort class created with a conception of Object inheritance
  - Subclass is derived Abstract class
- ```src/composition/Sort.js```
  - Bubble sort class created with a conception of Object composition
  - The other classes have a relationship with Sorter class (Sort class has references to other classes)
  - able to sort data. no matter what type of data it is, if the data can be sortable data and the other class that contain data has proper methods that Sort class interface required

## What I learn
- 2 ways to refactor verbose class, hence learn how to make class reusable with object inheritance and object composition
- understanding the conception of object inheritance and object composition and the differences between them
- How to type class by using typescript (interface, implements, abstract, modifier, and basic type)
