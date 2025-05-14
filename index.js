// confirm('Você aceita receber notificações')

// const nome = prompt('Digite seu nome')

// console.log(nome)

// if (condition) {

// } else {

// }

// do {
    
// } while (condition);

//Questão 1

// Leia o preço de um produto e a cor da sua etiqueta. 
// e acordo com a cor da etiqueta aplique um desconto sobre o produto. 
// Verde - 10% | Amarelo - 20% | Azul - 30 % | Vermelho 40%. 
// Para a questão 1 resolva o problema de inserção de uma cor de etiqueta que não existe na loja. 
// Garanta que o usuário só irá digitar Verde, Amarelo, Azul ou Vermelho. 
// Enquanto o usuário não digitar um valor válido para etiqueta, informe que ele digitou um valor 
// inválido e peça novamente a cor da etiqueta.

// const preço = parseFloat(prompt('Digite o preço do produto'))
// const cor = prompt('Digite a cor da etiqueta: \n Verde, \n Amarelo, \n Azul, \n Vermelho')
const qtdAlunos = Number(prompt('Digite a quantidade de alunos'))
let soma = 0

for (let i = 1;i <= qtdAlunos;i++) {
    const nota = Number(prompt(`Digite a nota do ${i}º aluno`))
    soma += nota
}

let mediaTurma = soma / qtdAlunos

alert(`A média da turma é ${mediaTurma}`)