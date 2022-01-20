let person = {
    person1: {
        name: "Leonardo",
        "if": "We can use javascript keywords this way",
        parents: {
            father: "Paulo",
            mother: "Adriana"
    }},
    person2:{
        name: "Antonia",
        "if": "We can use javascript keywords this way",
        parents: {
            father: "Rodolfo",
            mother: "Josefa"
    }}
};
// Tips, avoid using an object of objects. Instead, use an array of objects

// For in retorna os NOMES de ATRIBUTOS do objeto atual
// FOR IN returns the key/references of the attributes of the object
for (const key in person) {
    console.log(key)
}


// Accessing an object inside another object
for (const objChild1 in person) {
    for(const objChild2 in person[objChild1]){
        console.log('OBJECT:', objChild1, ' ATTRIBUTE/KEY:',objChild2, ' VALUES:', person[objChild1][objChild2]);
    }
}