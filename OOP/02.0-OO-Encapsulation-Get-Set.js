class Employee {
    constructor(name, birthDay, _cpf, _wage) {
        //By convention, when defining an attribute or function starting with '_', we are declaring our intention to make it private, only being accessed by GET/SET
        // Ps: A new feature makes it available to do this with #
        this.name = name;
        this.birthDay = birthDay;
        this._cpf = _cpf;
        this._wage = _wage;
    }
    // GETTERS and SETTERS
    // Private attributes/functions, only can be accessed through it's class.
    // We can only access it from outside, using GETTERS and SETTERS
    
    // To Call a GET function, we only need to call it like a attribute. Ex: employee1.employeeWage;
    get employeeWage() {
        return this._wage;
    }

    set employeeWage(updSalario) {
        this._wage = updSalario;
    }
    // Ps: We should define the GET and SET with the same name, as javascript is smart to find out that we are interacting with these functions
    // In other words, if we call it with a param, javascript will find out we are calling set, and if we only call it, GET will be called
}

// Instancing 
// Ps: Constructor is a way to pass parameters when instancing an object directly with values, instead of create the object then assign its values hard coded 
let employee1 = new Employee ("Jose", "1989-02-14", "431986229-1", 2350.30);

employee1.employeeWage = 2122.90
console.log(employee1.employeeWage)
