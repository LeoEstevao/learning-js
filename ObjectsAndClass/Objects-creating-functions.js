// Factory Functions

    // Factory functions create a Object literal from objects literals
function createClient(name, lastName, gender) {
    return {
        name,
        lastName,
        gender,
        infoClient() {
            return `Name: ${this.name} Gender: ${this.gender}.`;
        }
    }
}
// Ps: If the key and value is the same (ex: name: name), we can hide the value

const cli1 = createClient('Leonardo', 'Estevão dos Santos', 'Masculino');
console.log(cli1);
console.log(cli1.infoClient(), ' = Calling the function of the object');

// Constructor Functions

    // The object constructor function create an empty object, and assign the object 'this' to it, and the model/function continues to be 'referenced' in the created object
function CreateEmployee(name, lastName, gender) {
    this.name = name;
    this.lastName = lastName;
    this.gender = gender;

}

const func1 = new CreateEmployee('Miranda', 'de Oliveira', 'Masculino');
console.log(func1);