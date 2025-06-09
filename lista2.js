function exercicio1(){
    let conta = Number(prompt("Digite o valor da conta:"));
    alert(`O valor da conta R$ ${conta.toFixed(2)} com 10% do garçom é: R$ ${(conta * 1.1).toFixed(2)}`);
}

function exercicio2(){
    let hora = Number(prompt("Informe a hora:"));
    let minuto = Number(prompt("Infome o minuto:"));
    let totalMinutos = (hora*60 + minuto);
    alert(`Já se passaram ${totalMinutos} minutos desde 00:00h`);
}

function exercicio3(){
    let peso = Number(prompt("Informe seu peso em kg"));
    let altura = Number(prompt("Informe sua altura em metros"));
    alert(`Seu peso é ${peso*1000} gramas \ne sua altura é ${altura*100} centímetros `)
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

function exercicio6(){
    let nome = String(prompt("Digite o nome do Vendedor"));
    let salario = Number(prompt("Qual salário fixo do Vendedor"));
    let vendas = Number(prompt("Qual total de Vendas dele (R$)"));
    let comissao = vendas*0.15
    let = salarioFinal = salario + comissao

    alert(`O vendedor ${nome} com salário de R$ ${salario.toFixed(2)} e comissão de R$ ${comissao.toFixed(2)} deverá receber um total de R$ ${(salarioFinal.toFixed(2))}`)

}

function exercicio7(){
    let preco = Number(prompt("Digite o valor do Produto"));
    let parcelas = Number(prompt("Digite a quantidade de parcelas"));
    let valorParcela = 0;

    if (parcelas<=10){
        valorParcela = preco / parcelas;
        alert(`O valor de cada parcela é R$ ${valorParcela.toFixed(2)}`);
    }else{
        alert("Quantidade de parcelas diferente de 10")
    }
}

function exercicio8(){
    let precoCusto = Number(prompt("Digite o preço de custo do produto:"));
    let percentual = Number(prompt("Digite o percentual de acréscimo (%):"));
    let precoVenda = precoCusto + (precoCusto * percentual / 100);
    alert(`O valor de venda do produto é R$ ${precoVenda.toFixed(2)}`);
}

function exercicio9(){
    let anos = Number(prompt("Informe sua idade em anos:"));
    let meses = Number(prompt("Informe os meses além dos anos:"));
    let dias = Number(prompt("Informe os dias além dos meses:"));
    let totalDias = (anos * 365) + (meses * 30) + dias;
    alert(`Sua idade expressa apenas em dias é: ${totalDias} dias.`);
}

function exercicio10(){
    let Eleitores = Number(prompt("Digite o número total de eleitores do município:"));
    let Brancos = Number(prompt("Digite o número de votos brancos:"));
    let Nulos = Number(prompt("Digite o número de votos nulos:"));
    let Validos = Number(prompt("Digite o número de votos válidos:"));

    let percBrancos = (Brancos / Eleitores) * 100;
    let percNulos = (Nulos / Eleitores) * 100;
    let percValidos = (Validos / Eleitores) * 100;

    alert(
        `Percentual de votos brancos: ${percBrancos.toFixed(2)}%\n` +
        `Percentual de votos nulos: ${percNulos.toFixed(2)}%\n` +
        `Percentual de votos válidos: ${percValidos.toFixed(2)}%`
    );
}