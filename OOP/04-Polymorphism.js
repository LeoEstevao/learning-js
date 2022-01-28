// Super Classe
class Account {
    constructor(agency, account, balance) {
        this.agency = agency;
        this.account = account;
        this.balance = balance;
    }
    deposit(deposit) {
        this.balance = this.balance + deposit;
    }

    withdraw(withdraw) {
        console.log(`Amount withdrawn: ${withdraw}`)
        this.balance = this.balance - withdraw;
        this.viewBalance();
    }
    viewBalance() {
        return console.log(`Balance: ${this.balance}`);
    }

}

class SavingAccount extends Account {
    constructor(agency, account, balance) {
        super(agency, account, balance);
    }
    
    // Polymorphism
    withdraw(withdraw) {
        if(withdraw > 1000){
            // console.log(`Valor de ${withdraw} de saque acima do limite diário!`)
            console.log(`Value exceeds the daily limit withdraw (${withdraw})!`)
        }
        else{
            this.balance = this.balance - withdraw;
            console.log(`Amount withdrawn: ${withdraw}`)
        }
        this.viewBalance();
    }
}

// SavingAccount = Conta Poupança
// CheckingAccount Conta Corrente
const myAccount = new Account(341, '006154', 3500);
const mySavingAccount = new SavingAccount(341, '006154', 3500);

myAccount.viewBalance();

// Same function and values, but the function was redefined (polymorphism)
myAccount.withdraw(1500);
mySavingAccount.withdraw(1500);

mySavingAccount.viewBalance();
mySavingAccount.withdraw(1000);
