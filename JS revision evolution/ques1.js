function createBankAccount(accountNumber, accountHolderName, initialBalance) {
    let balance = initialBalance;
    let tranctions = [];
    return {
        deposit(amount) {
            if (amount <=  0) {
                throw new Error("Invalid deposit amount");
            }
            balance += amount;
            tranctions.push({ type: "deposit", amount });
        },
        withdraw(amount) {
            if (amount <= 0) {
                throw new Error("Invalid withdrawal amount");
            }
            if (amount > balance) {
                throw new Error("Insufficient funds");
            }
            balance -= amount;
            tranctions.push({ type: "withdraw", amount });
        },
        getBalance() {
            return balance;
        },
        getTransactionHistory() {
            return tranctions;
        }
    };
}
const account = createBankAccount("123456789", "siri", 1000);
account.deposit(500);
account.withdraw(200);
console.log("Current Balance:", account.getBalance());
console.log("Transaction History:", account.getTransactionHistory());
console.log("Account Number:", account.accountNumber); 
console.log("Account Holder Name:", account.accountHolderName); 
