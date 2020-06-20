// Desafio 01

const name = "Carlos";
const weight = 84;
const height = 1.88;
const gender = "M";

const imc = weight / (height * height)

if (imc > 30) {
    console.log(`${name}, you are above the weight`)
} else {
    console.log(`${name}, you are not above the weight `)
}



const name = "Silvana";
const gender = "F";
const age = 48;
const contribution = 23;

if (gender == "M") {
    if ((age + contribution) >= 85) {
        console.log(`${name}, You're retired`)
    } else {
        console.log(`${name}, You're not retired`)
    }
} else {
    if ((age + contribution) >= 95) {
        console.log(`${name}, You're retired`)
    } else {
        console.log(`${name}, You're not retired`)
    }
}

