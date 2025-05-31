// Todas as funções foram ajustadas para não usar as variáveis "mensagem" nem "resultado".
// O alert agora mostra diretamente a mensagem e o resultado.

function exercicio1() {
    let numero = Number(prompt("Digite um número:"));
    if (numero > 20) {
        alert(`O número ${numero} é maior que 20. A metade dele é ${(numero / 2).toFixed(2)}.`);
    } else {
        alert(`O número ${numero} não é maior que 20. O valor informado foi ${numero}.`);
    }
}

function exercicio2() {
    let resposta = prompt("Qual a capital do Brasil?");
    alert(resposta.trim().toLowerCase() === "brasília" ? "Correto!" : "Errado!");
}

function exercicio3() {
    let numero = Number(prompt("Digite um número:"));
    alert(numero % 2 === 0 ? `${numero} é Par` : `${numero} é Ímpar`);
}

function exercicio4() {
    let valor = Number(prompt("Digite um valor inteiro:"));
    alert((valor % 4 === 0 && valor % 5 === 0) ? `O valor ${valor} é divisível` : ` O valor ${valor}não é divisível por 4 e 5`);
}

function exercicio5() {
    let notas = [];
    for (let i = 1; i <= 4; i++) {
        notas.push(Number(prompt(`Digite a ${i}ª nota:`)));
    }
    let media = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;
    alert(media >= 5 ? `Aluno APROVADO! Média: ${media.toFixed(2)}` : `Aluno REPROVADO! Média: ${media.toFixed(2)}`);
}

function exercicio6() {
    let num1 = Number(prompt("Digite o primeiro valor:"));
    let num2 = Number(prompt("Digite o segundo valor:"));
    alert(num1 > num2 ? `Número maior(${num1}) - número menor(${num2}) = ${num1 - num2}` : `Número maior(${num2}) - número menor(${num1}) = ${num2 - num1}`);
}

function exercicio7() {
    let valor = Number(prompt("Digite um valor inteiro (positivo ou negativo):"));
    let absoluto = Math.abs(valor);
    alert(`O número absoluto é ${absoluto}`);
}

function exercicio8() {
    let numero = Number(prompt("Digite um número inteiro:"));
    alert(numero >= 1 && numero <= 10 ? numero + " Está na faixa de 1 a 10" : numero + " Fora da faixa de 1 a 10");
}

function exercicio9() {
    let numero = Number(prompt("Digite um número:"));

    if (numero > 0){
        alert(`${numero} é Positivo`);
        } else if (numero < 0){
            alert(`${numero} é Negativo`)
    } else { alert(`${numero} é Nulo`)}
}

function exercicio10() {
    let num1 = Number(prompt("Digite o primeiro número:"));
    let num2 = Number(prompt("Digite o segundo número:"));
    if (num2 === 0){
        alert("Divisor não pode ser zero");
    } else {alert(num1 % num2 === 0 ? `${num2} É divisor de ${num1}` : `${num2} Não é divisor de ${num1}`);
    }
}

function exercicio11() {
    let numero = Math.abs(Number(prompt("Digite um número de 3 dígitos")));
    let centenas = Math.floor(numero / 100) % 10;
    alert(`${numero} tem ${centenas} centenas`);
}

function exercicio12() {
    let nums = [];
    for (let i = 1; i <= 5; i++) {
        nums.push(Number(prompt(`Digite o ${i}º número de 5:`)));
    }
    alert(`O Maior número é : ${Math.max(...nums)}\nO Menor número é: ${Math.min(...nums)}`);
}

function exercicio13() {
    let a = Number(prompt("Digite o valor A:"));
    let b = Number(prompt("Digite o valor B:"));
    let c = Number(prompt("Digite o valor C:"));
    let array = [a, b, c];
    array.sort((x, y) => x - y);
    alert(`Ordem crescente: ${array.join(", ")}`);
}
