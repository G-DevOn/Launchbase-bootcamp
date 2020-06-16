// const users = [
//     { name: "Carlos", tecnologias: ["HTML", "CSS"] },
//     { name: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
//     { name: "Tuane", tecnologias: ["HTML", "Node.js"] }
// ];

// for (let indice = 0; indice < users.length; indice++) {
//     console.log(`${users[indice].name} trabalha com`
//     + `${users[indice].tecnologias[0]}, `
//     + `${users[indice].tecnologias[1]}`)
// }

// function trabalhaComCSS(user) {
//     for (tecnologia of user.tecnologias) {
//         if (tecnologia == "CSS") return true
//     }
//     return false
// }

// for(let i = 0; i < users.length; i++) {
//     const userTrabalhaComCSS = trabalhaComCSS(users[i]);

//     if (userTrabalhaComCSS) {
//         console.log(`O usuário ${users[i].name} trabalha com CSS`);
//     }
// }


const users = [
    {
        name: "Salvio",
        incomes: [115.3, 48.7, 98.3, 14.5],
        expenses: [85.3, 13.5, 19.9]
    },
    {
        name: "Marcio",
        incomes: [24.6, 214.3, 45.3],
        expenses: [185.3, 12.1, 120.0]
    },
    {
        name: "Lucia",
        incomes: [9.8, 120.3, 340.2, 45.3],
        expenses: [450.2, 29.9]
    }
];

function sum(numbers) {
    let result = 0
    for (number of numbers) {
        result += number
    }
    return result
}

function balance(income, expenses) {
    let result = income - expenses
    return result
}

for (let user of users) {
    let sald = balance(sum(user.incomes), sum(user.expenses))
    if (sald < 0) {console.log(`${user.name} have`
        + ` NEGATIVE balance of ${sald.toFixed(2)}`)
    } else {
        console.log(`${user.name} have`
            + ` POSITIVE balance of ${sald.toFixed(2)}`)
    }
}
