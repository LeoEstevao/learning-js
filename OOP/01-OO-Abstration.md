# Pillar of Abstraction

## Abstract things from the real word to the context of programming

```javascript
// Classes are objects models, used to design every types of objects
class BankAccount {
    // A bank account should have: Agency, account number, balance, limit...
    constructor() {
        this.agency = 1057,
        this.accountNumber = 8519000,
        this.balance = 50.55,
        this.limit = 450.00
    }

    // A bank account should do: Deposit, withdraw, check balance
    depositar(amountDeposited) {
        this.balance += amountDeposited;
    }

    sacar(amountWithdrawn) {
        this.balance -= amountWithdrawn;
    }

    checkBalance() {
        return this.balance;
    }

    // Instancing an object
    let checkingAccount = new BankAccount ();
    let savingAccount = new BankAccount ();

    console.log(checkingAccount.checkBalance());
    checkingAccount.depositar(105.80);
    console.log(checkingAccount.checkBalance());
    checkingAccount.sacar(30.40);
    console.log(checkingAccount.checkBalance()); 
}
```