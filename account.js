const EventEmitter = require('events').EventEmitter;

class Account extends EventEmitter{
    constructor(bal=0){

        super();
        
        this.balance = bal;

        // Initiate Goal
        this.on('balanceChanged', this.printBalance);
        this.on('balanceChanged', this.checkGoal);
        this.on('balanceChanged', this.overdrawn);
    }

    depot(amount){
        this.balance += amount;
        this.emit('balanceChanged');
    }

    withdraw(amount){
        this.balance -= amount;
        this.emit('balanceChanged');
    }

    getBalance(){
        return this.balance;
    }

    printBalance(){
        console.log(`Balance: ${this.balance}`);
    }

    checkGoal(goal=1000){
        if(this.balance >= goal)
            console.log(`Goal achieved!`);
    }

    overdrawn(){
        if(this.balance < 0)
            console.log('Overdrawn!');
    }
}

module.exports = Account;