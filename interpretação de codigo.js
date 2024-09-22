//interpretação de codigo
//Exercicio 1:
let array
console.log('a. ', array) // Vai imrprimir no console como indefinido, pois a variável não foi definida.

array = null
console.log('b. ', array) // Vai imprimir no console o valor da variável sendo NULL.

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // Vai imprimir 11, pois esse é o numero total de Numbers dentro da array.

let i = 0
console.log('d. ', array[i]) // Vai imprimir 3, pois a variável 0 corresponde ao primeiro Number da array.

array[i+1] = 19
console.log('e. ', array) // Vai imprimir a array e subsititui o valor 4 por 19.

const valor = array[i+6]
console.log('f. ', valor) // Vai imprimir o Number 9

//Exercicio 2
let frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)/* toUpperCase vai transformar toda a frase em maiuscula, replaceAll vai substituir todas as letras "A" por "I".
frase.lenght vai dizer o tamanho da string.*/
//irá imprimir no console SUBI NUM ÔNIBUS EM MIRROCOS 27 (pois a string tem o tamanho de 27)
