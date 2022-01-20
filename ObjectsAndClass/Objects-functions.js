let obj = {
    name: "Leonardo", 
    age: 25, 
    parents: {
        father: "Paulo",
        mother: "Adriana"
    }
}

// console.log(
//     // Returning the object KEYS as array (don't includes objects inside an object)
//     Object.keys(obj)
// );

// console.log(
//     // Returning TRUE or FALSE if an object inherit the prototype/model of another object
//     obj.isPrototypeOf(Object)
// );

// console.log(
//     // Convert an OBJECT to JSON
//     JSON.stringify(obj)
// );

// console.log(
//     // Convert a JSON to Object
//     JSON.parse('{"name":"Leonardo","age":25,"parents":{"father":"Paulo","mother":"Adriana"}}')
// );

// Functions of the Object()

// Block an object to be modified
Object.freeze(obj);
// Ps: Be careful. once a object is freezed, it can't be 'thawed'

function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;

    // Defines properties of a object key/attributes
    // PARAMS: (obj, 'objCHAVE' { objProp1: definition, objProp2: definition, ... })
    Object.defineProperty(this, 'stock' ,{
        // Defines if the attribute will be displayed
        enumerable: true,
        // Ps: It'll only be displayed, if we call it specific, like 'product1.stock'
        
        // Defines a default value ()
        value: 5,
        // Ps: It'll overwrite the instantiated value

        // Defines if the attribute can have it's value modified
        writable: false,

        // Defines if we can configure later the properties of this attribute
        configurable: true
        // Ps: This also block deletes of this key/attribute (not it's value, but it's attribute)
    })


    Object.defineProperty(this, 'stock' ,{
        value: stock
    })

    // Configuring multiples objects in the same block
    // PARAMS: (this, {  objChave1: {objProp1: definition}, objChave2: { ... }    })
    Object.defineProperties(this, {
        name: {
            enumerable: true,
            value: 'T-Shirt',
            writable: false,
        },
        stock: {
            enumerable: true,
            value: stock
        }
    })
}

const p1 = new Product('Shirt', 20, 3);
console.log(p1);