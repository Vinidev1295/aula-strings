//escrita de código
//Exercicio 1:
const nome = prompt("Qual seu nome?")
const email = prompt("Qual seu email?") 
const cadastrado = "O email: " + email + " foi cadastrado com sucesso. Seja bem vindo(o) " + nome +"."
console.log(cadastrado)
//--------------//
//Exercicio 2:
const comidas = ["lasanha", "hamburguer", "pizza", "xis", "batata frita"]   
console.log("Array completo de comidas preferidas:", comidas)
console.log("Essas são as minhas comidas favoritas: ")

console.log("1. " + comidas[0])
console.log("2. " + comidas[1])
console.log("3. " + comidas[2])
console.log("4. " + comidas[3])
console.log("5. " + comidas[4])
//------------------//
const usuario =  prompt("Qual sua comida favorita?")
comidas[1] = usuario 
console.log("Nova lista de comidas preferidas:");
console.log("1. " + comidas[0]);
console.log("2. " + comidas[1]);
console.log("3. " + comidas[2]);
console.log("4. " + comidas[3]);
console.log("5. " + comidas[4]);
//--------------//
//Exercicio 3:
let listaDeTarefas = []
let tarefa1 = prompt("Digite a primeira tarefa que você precisa realizar hoje:")
let tarefa2 = prompt("Digite a segunda tarefa que você precisa realizar hoje:")
let tarefa3 = prompt("Digite a terceira tarefa que você precisa realizar hoje:")
listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
console.log("Lista de tarefas do dia:")
console.log("1. " + listaDeTarefas[0])
console.log("2. " + listaDeTarefas[1])
console.log("3. " + listaDeTarefas[2])
let tarefaRealizada = prompt("Digite o número da tarefa que você já realizou hoje, 0, 1 ou 2:")
listaDeTarefas.splice(tarefaRealizada, 1)
console.log("Lista de Tarefas Atualizada:", listaDeTarefas)
