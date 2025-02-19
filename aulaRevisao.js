// Exercício 1
const dobro = (a) => a * 2;
console.log(dobro(7)); // 14
console.log(dobro(15)); // 30

// Exercício 2
const dividir = (a, b) => a / b;
console.log(dividir(10, 2)); // 5
console.log(dividir(9, 3));  // 3

// Exercício 3
const mensagemBoasVindas = (a) => ("Seja bem-vindo, " + a + "!");
console.log(mensagemBoasVindas("Carlos")); // "Seja bem-vindo, Carlos!"
console.log(mensagemBoasVindas("Ana"));    // "Seja bem-vindo, Ana!"

// Exercício 4
function executarOperacao (a,b,operacao){
    return operacao(a,b)
}
console.log(executarOperacao(6, 3, (a, b) => a - b)); // 3
console.log(executarOperacao(4, 5, (a, b) => a * b)); // 20

// Exercício 5
const numeros = [100, 200, 300, 400];
const precosComDesconto = numeros.map(num => num * 0.9);
console.log(precosComDesconto); // [90, 180, 270, 360]