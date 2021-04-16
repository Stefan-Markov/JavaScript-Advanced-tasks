class Bank {

    constructor(bankName) {
        this.allCustomers = [];
        this._bankName = bankName;
    }

    newCustomer({firstName, lastName, personalId}) {
        let hasCustomer = this.allCustomers.find(c => c.personalId === personalId);
        if (hasCustomer) {
            throw new Error(`${firstName} ${lastName} is already our customer!`);
        }
        let customer = {firstName, lastName, personalId};
        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(personalId, amount) {
        let currentCustomer = this.allCustomers.find(c => c.personalId === personalId);
        if (!currentCustomer) {
            throw new Error(`We have no customer with this ID!`);
        }
        if (currentCustomer.totalMoney) {
            currentCustomer.totalMoney += amount;
        } else {
            currentCustomer.totalMoney = amount;
            currentCustomer.transactions = [];
        }
        currentCustomer.transactions.push(`${currentCustomer.firstName} ${currentCustomer.lastName} made deposit of ${amount}$!`);

        return `${currentCustomer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        let currentCustomer = this.allCustomers.find(c => c.personalId === personalId);
        if (!currentCustomer) {
            throw new Error(`We have no customer with this ID!`);
        }

        if (currentCustomer.totalMoney < amount) {
            throw new Error(`${currentCustomer.firstName} ${currentCustomer.lastName} does not have enough money to withdraw that amount!`);
        } else {
            currentCustomer.totalMoney -= amount;
            currentCustomer.transactions.push(`${currentCustomer.firstName} ${currentCustomer.lastName} withdraw ${amount}$!`);
        }
        return `${currentCustomer.totalMoney}$`;
    }

    customerInfo(personalId) {
        let currentCustomer = this.allCustomers.find(c => c.personalId === personalId);
        if (!currentCustomer) {
            throw new Error(`We have no customer with this ID!`);
        }
        let output = `Bank name: ${bank._bankName}\n`;
        output += `Customer name: ${currentCustomer.firstName} ${currentCustomer.lastName}\n`;
        output += `Customer ID: ${currentCustomer.personalId}\n`;
        output += `Total Money: ${currentCustomer.totalMoney}$\n`;
        output += `Transactions:\n`;

        for (let i = currentCustomer.transactions.length; i > 0; i--) {
            output += `${i}. ${currentCustomer.transactions[i - 1]}\n`;
        }

        return output.trim();
    }

}

let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({firstName: "Svetlin", lastName: "Nakov", personalId: 6233267}));
console.log(bank.newCustomer({firstName: "Mihaela", lastName: "Mileva", personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));
console.log(bank.customerInfo(6233267));