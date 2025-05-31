function exercicio1(){
    let conta = Number(prompt("Digite o valor da conta:"));
    alert(`O valor da conta R$ ${conta.toFixed(2)} com 10% do garçom é: R$ ${(conta * 1.1).toFixed(2)}`);
}

function exercicio2(){
    let hora = Number(prompt("Informe a hora:"));
    let minuto = Number(prompt("Infome o minuto:"));
    let tempoPadrao = 0;
    let totalMinutos = (hora*60 + minuto)-tempoPadrao;
    alert(`Já se passaram ${totalMinutos} minutos desde 00:00h`);
}

function exercicio3(){
    let peso = Number(prompt("Informe seu peso em kg"));
    let altura = Number(prompt("Informe sua altura em metros"));
    alert(`Seu peso é ${peso*100} gramas \ne sua altura é ${altura*100} centímetros `)
}

function exercicio4(){
    let peso = Number(prompt(" Informe seu peso em kg"));
    let altura = Number(prompt("Informe sua altura em metros"));
    let imc = peso/(altura**2);
    alert(`Seu IMC é ${imc.toFixed(2)}`);
}

function exercicio5(){
    let num1 = Number(prompt("Inform o primeiro número"));
    let num2 = Number(prompt("Inform o segundo número"));
    let soma = num1 + num2;
    let sub1 = num1 - num2;
    let sub2 = num2 - num1;
    let mult = num1 * num2;
    let div = num1 / num2;
    let rest = num1 % num2;

    alert(` A soma de ${num1} + ${num2} = ${soma}\n
 a Subtração de ${num1} - ${num2} = ${sub1}\n
 a Subtração de ${num2} - ${num1} = ${sub2}\n
 a Multiplicação de ${num1} x ${num2} = ${mult}\n
 a Divisão de ${num1} / ${num2} = ${div}\n
 o Resto da Divisão de ${num1} / ${num2} = ${rest}\n`)
}

function exercicio6(){}

function exercicio7(){}

function exercicio8(){}

function exercicio9(){}

function exercicio10(){}