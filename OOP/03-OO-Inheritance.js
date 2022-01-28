// Super Classe
class Person {
    constructor(firstName, lastName, cpf, birthDay) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.cpf = cpf;
        this.birthDay = birthDay;
    }
    
    walk() {
        console.log('Doing a little walk');
    }
    
    isOfAge() {
        const now = new Date();
        if(
            (now.getFullYear() - this.birthDay.getFullYear() > 18 )
            ||
            (
            now.getFullYear() - this.birthDay.getFullYear() == 18
            &&
            this.birthDay.getMonth() <= now.getMonth() 
            && 
            this.birthDay.getDate() <= now.getDate()
            )
        )
        return `${this.firstName} is of age!`
    return `${this.firstName} is not of age!`
    }

}

// Secondary class (child)
class Employee extends Person {
    // Constructor is everything that our instantiated objects will receive
    constructor(firstName, lastName, cpf, birthDay, title, salary) {
        // Super(attr) is what will be inherit from the of parent class constructor
        super(firstName, lastName, cpf, birthDay);
        this.title = title;
        this.salary = salary;
    }
}

// Tertiary class (will inherit Employee and consequently, inherit Person too)
class Employer extends Employee {
    constructor(firstName, lastName, cpf, birthDay, title, salary, company, contract) {
        // Same process. Attributes from both parent classes will be in super()
        super(firstName, lastName, cpf, birthDay, title, salary);
        this.company = company;
        this.contract = contract;
    }
}

const myself = new Employee('Leonardo', 'Estevão dos Santos', '4335959496', new Date(1995, 05, 13), 'Junior Developer', 2500.00)
console.log(myself);
console.log(myself.isOfAge());

const employee2 = new Employer('Freddie', 'Campbell', '468735489', new Date(2004, 00, 28), 'Programador Senior', 8255.21, 'Developers company', '001054');

console.log(employee2);
console.log(employee2.isOfAge());