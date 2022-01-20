let obj = {
    firstName: "Leonardo",
    lastName: "Santos",
    family: {
        father: "Paul",
        mother: "Drica",
        brother: "Digs",
        sisterInLaw: "Cocakel"
    },    
}

// Rest/Spread
// The Rest/Spread operator, let us push a undefined number of object values into another object (or as params of a function).
    // we need to pass it, inside an object structure {}
let familyObj = {
    ...obj.family
}
console.log(familyObj);

// Destructuring
// The destructuring operator, let us create var os constants of objects or methods 
let { firstName, lastName } = obj;

console.log(firstName + lastName);
