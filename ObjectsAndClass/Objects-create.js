// Creating Objects

// Instancing object from Object() Class
let object1 = new Object();

// Object literal
let object2 = {};

// Object Literal with attributes and values
let object3 = {
    name: "Leonardo",
    "if": "We can use js keywords",
    parents: {
        father: "Paulo",
        mother: "Adriana"
    }
}

// Creating object through create()
// PS: Devemos passar um modelo de objeto como parâmetro (mesmo que seja um objeto vazio)
// Ps: We must pass an object model as a param (even if it's an empty object)
let object4 = Object.create(object3);


// Changing an object property value
object1.color = 'Red';

object2['color'] = 'Green';

console.log(object1);
console.log(object2);
console.log(object3);
console.log(object3.parents.father);
console.log(object4);

// ECMAScript 2017
// Return an ARRAY with the keys and values of an object
console.log(
    Object.entries(object3)
);

// Return an array with the values of an object
console.log(
    Object.values(object3)
);