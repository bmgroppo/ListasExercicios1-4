function exercicio1() {
    let raio = Number(prompt("Digite o valor do raio do círculo em cm"));
    const pi = 3.14159265;
    let area = pi * (raio**2);
    alert(`A área do círculo é ${area.toFixed(0)} cm²`);
}

function exercicio2(){
    let valorHora = Number(prompt("Digite o valor da hora aula (R$):"));
    let horasMes = Number(prompt("Digite o número de horas trabalhadas no mês:"));
    let percINSS = Number(prompt("Digite o percentual de desconto do INSS (%):"));

    let salarioBruto = valorHora * horasMes;
    let descontoINSS = salarioBruto * (percINSS / 100);
    let salarioLiquido = salarioBruto - descontoINSS;

    alert(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`);
}

function exercicio3(){
    let valor1 = Number(prompt("Digite o primeiro valor real:"));
    let valor2 = Number(prompt("Digite o segundo valor real:"));

    let valor1ComAcrescimo = valor1 * 1.3;
    let valor2ComDesconto = valor2 * 0.75;

    alert(` ${valor1} com acréscimo de 30% = ${valor1ComAcrescimo.toFixed(2)}\n ${valor2} com desconto de 25% = ${valor2ComDesconto.toFixed(2)}`);
}

function exercicio4(){
    let num1 = Number(prompt("Digite o primeiro número:"));
    let num2 = Number(prompt("Digite o segundo número:"));
    let num3 = Number(prompt("Digite o terceiro número:"));
    let num4 = Number(prompt("Digite o quarto número:"));
    let peso = [1,2,3,4];

    let mediaPonderada = ((num1 * peso[0]) + (num2 * peso[1]) + (num3 * peso[2]) + (num4 * peso[3])) / (peso[0] + peso[1] + peso[2] + peso[3]);

    alert(`A média aritmética ponderada de ${num1}, ${num2}, ${num3} e ${num4} é ${mediaPonderada.toFixed(2)}`);
}

function exercicio5(){
    let raio = Number(prompt("Digite o valor do raio da lata em cm:"));
    let altura = Number(prompt("Digite o valor da altura da lata em cm:"));
    const pi = 3.14159265;
    let volume = pi * (raio ** 2) * altura;
    let volumeLitros = volume / 1000;
    alert(`O volume da lata de óleo é ${volume.toFixed(2)} cm³ (${volumeLitros.toFixed(2)} litros)`);
}

function exercicio6(){
    let a = prompt("Digite o valor de a:");
    let b = prompt("Digite o valor de b:");
    
    let temp = a;
    a = b;
    b = temp;

    alert(`Após a troca:\na = ${a}\nb = ${b}`);
}

function exercicio7(){
    let cateto1 = Number(prompt("Digite o valor do primeiro cateto:"));
    let cateto2 = Number(prompt("Digite o valor do segundo cateto:"));
    let hipotenusa = ( (cateto1 ** 2) + (cateto2 ** 2) ) ** 0.5;
    alert(`O valor da hipotenusa é ${hipotenusa.toFixed(2)}`);
}

function exercicio8(){
    let base = Number(prompt("Digite o valor da base do retângulo (em cm):"));
    let altura = Number(prompt("Digite o valor da altura do retângulo (em cm):"));

    let perimetro = 2 * (base + altura);
    let area = base * altura;
    let diagonal = Math.sqrt(base ** 2 + altura ** 2);

    alert(
        `Perímetro: ${perimetro.toFixed(2)} cm\n` +
        `Área: ${area.toFixed(2)} cm²\n` +
        `Diagonal: ${diagonal.toFixed(2)} cm`
    );
}

function exercicio9(){
    let razao = Number(prompt("Digite a razão da PA:"));
    let primeiroTermo = Number(prompt("Digite o valor do 1º termo da PA:"));
    let decimoTermo = primeiroTermo + (10 - 1) * razao;
    alert(`O 10º termo da PA é ${decimoTermo}`);
}

function exercicio10(){
    let razao = Number(prompt("Digite a razão da PG:"));
    let primeiroTermo = Number(prompt("Digite o valor do 1º termo da PG:"));
    let quintoTermo = primeiroTermo * (razao ** (5 - 1));
    alert(`O 5º termo da PG é ${quintoTermo}`);
}