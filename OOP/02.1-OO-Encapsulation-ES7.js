class Employee {
    #cpf;
    #wage;
    constructor(name, birthDay, cpf, wage) {
        this.name = name;
        this.birthDay = birthDay;
        this.#cpf = cpf;
        this.#wage = wage;
    }
    
    get getCpf() {
        return this.#cpf;
    }
    
    set setCpf(value) {
        this.#cpf = value
    }
    
    // #privateFunction() {
        // The way above will return an error

    // Creating a private function
    #privateFunction = () => {
        return "I'm private";
    }

    // Calling the private function
    getPrivateFunction() {
        return this.#privateFunction();
    }
}

let employee1 = new Employee ("Jose", "1989-02-14", "431986229-1", 2777.12);
console.log(employee1);
// employee1.cpf = '123456789-1' // Won't have effect
// console.log(employee1.cpf) //Won't have effect
employee1.setCpf = '123456789-1'
console.log(employee1.getCpf);
console.log(employee1.getPrivateFunction());


// This is private, so it won't work
// console.log(privateFunction);
// console.log(privateFunction());
