function exercicio1() {
    let nome = prompt("Digite seu nome completo");
    let sexo = prompt("Digite seu sexo (Masculino/Feminino)");

    document.writeln(`Seu nome é ${nome} e seu sexo é ${sexo}.<br>`);
}

function exercicio2() {
    let num1 = Number(prompt("Digite o primeiro número:"));
    let num2 = Number(prompt("Digite o segundo número:"));  
    let num3 = Number(prompt("Digite o terceiro número:"));
    let num4 = Number(prompt("Digite o quarto número:"));
    let adição = (num1 + num2 + num3 + num4);
    let multiplica = (num1 * num2 * num3 * num4);

    document.writeln(`A soma dos números é: ${adição} <br>`);
    document.writeln(`A multiplicação dos números é: ${multiplica} <br>`);
}

function exercicio2c(){
    let dolar = Number(prompt("Digite o valor do dólar:"));    
    let real = dolar * 5.7; 

    document.writeln(`O valor do dólar em reais é: R$ ${real.toFixed(2)} <br>`);
}

function exercicio3() {
    let numero = Number(prompt("Digite um número:"));
        if(isNaN(numero)){
            alert("Não é um número , seu animal!!!");
            return
        }
        else {document.writeln(`O número antecessor é ${numero-1} e o número posterior é ${numero+1} <br>`);
    }
}

function exercicio4() {
    let salario = Number(prompt("Digite o salário do funcionário:"));

    document.writeln(`O salário do funcionário com aumento de 15% é R$ ${(salario * 1.15).toFixed(2)} <br>`);
}

function exercicio5() {
    let fahrenheit = Number(prompt("Digite a temperatura em Fahrenheit:"));
    let celsius = (fahrenheit - 32) * 5 / 9;
    document.writeln(`A temperatura em Celsius é: ${celsius.toFixed(2)}°C <br>`);
}

function exercicio6(){
    let num1 = Number(prompt("Digite o primeiro número"));
    let num2 = Number(prompt("Digite o segundo número"));
    let num3 = Number(prompt("Digite o terceiro numero"));
    let media = (num1+num2+num3)/3

    document.writeln(`A média aritimética de ${num1}, ${num2} e ${num3} é ${media.toFixed(2)}`);
}

function exercicio7(){
    let distancia = Number(prompt("Digite a distancia percorrida"));
    let consumo = Number(prompt("Digite quantos kilometros o automóvel faz por litro (km/l)"))
    let litros = consumo/distancia

    document.writeln(`O automóvel precisa de ${litros.toFixed(2)} litros de combustível para percorrer ${distancia} kilometros`)
}

function exercicio8(){
    let num = Number(prompt("Digite um número"));
    let quadrado = num**2;
    let raiz = num**0.5;


    document.writeln(`O número é ${num}, o quadrado de ${num} é ${quadrado.toFixed(2)} e a raíz quadrada de ${num} é ${raiz.toFixed(2)}`)
}

function exercicio9(){
    let prestacao = Number(prompt("Digite o valor original da prestação"));
    let diasAtraso = Number(prompt("Digite quantos dias a prestação está atrasada"));
    let taxa = Number(prompt("Digite qual a taxa de juros por dia"));
    let atual = (prestacao*((taxa/100)*diasAtraso))+prestacao;
    
    document.writeln(`A prestação atualizada hoje é R$ ${atual.toFixed(2)}`)
}