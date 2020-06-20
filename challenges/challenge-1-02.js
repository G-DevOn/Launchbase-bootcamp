
const company = {
    "name": "Rocketseat",
    "color": "Roxo",
    "focus": "Programação",
    "address": [{"street": "Rua Guilherme Gambala"}, {"number": 260}]
}

console
.log(`A company ${company.name} \
está localizada em ${company.address[0].street}, \${company.address[1].number}`)


const programmer = {
    "name": "Carlos",
    "age": 32,
    "technologies": [
        {"name": "C++", "expertise": "Desktop"},
        {"name": "Python", "expertise": "Data Science"},
        {"name": "JavaScript", "expertise": "Web/Mobile"}
    ]
}

console
.log(`The user${programmer.name} has ${programmer.age} years \
and use the technologie ${programmer.technologies[0].name} with expertise in \
${programmer.technologies[1].expertise}`)
