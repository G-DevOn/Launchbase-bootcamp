
const empresa = {
    "nome": "Rocketseat",
    "cor": "Roxo",
    "foco": "Programação",
    "endereco": [{"rua": "Rua Guilherme Gambala"}, {"numero": 260}]
}

console
.log(`A empresa ${empresa.nome} \
está localizada em ${empresa.endereco[0].rua}, \${empresa.endereco[1].numero}`)


const programador = {
    "nome": "Carlos",
    "idade": 32,
    "tecnologias": [
        {"nome": "C++", "especialidade": "Desktop"},
        {"nome": "Python", "especialidade": "Data Science"},
        {"nome": "JavaScript", "especialidade": "Web/Mobile"}
    ]
}

console
.log(`O usuário ${programador.nome} tem ${programador.idade} anos \
e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade \
${programador.tecnologias[1].especialidade}`)
