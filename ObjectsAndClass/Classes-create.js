// By convention, every Class must have it's first letter capitalized

class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    toWork() {
        console.log('Working');
    }

    endJob() {
        return console.log('Job done!')
    }

}

const employee1 = new Employee('Mauricio', 'de Souza');

console.log(employee1)
console.log(employee1.toWork())
console.log(employee1.endJob())