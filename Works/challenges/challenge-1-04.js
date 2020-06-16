const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
}

function createTrasaction(transaction) {
    if (transaction.type == "credit") {
        user.transactions.push(transaction)
        user.balance += transaction.value
    }
    else {
        user.transactions.push(transaction)
        user.balance -= transaction.value
    }
}

createTrasaction({"type": "credit", "value": 50.5})

console.table(user)
