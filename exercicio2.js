function idade (){
    let quantidade = Number(prompt("Digite quantas pessoas deseja cadastrar"));
    let idade = [];
    let crianca = 0;
    let adolescente = 0;
    let adulto = 0;
    let idoso = 0;

    for(let i=1; i <=quantidade; i++){
        idade = Number(prompt(`Digite a idade da ${i}ª pessoa de ${quantidade} escolhidas`));
            if (idade <=12){
                crianca++;
            }
                else if (idade > 12 && idade < 18){
                    adolescente++
            }
                else if (idade > 18 && idade < 60){
                    adulto++
            }
            else{
                idoso++
            }

    }document.writeln(`Crianças: ${crianca}<br>
        Adolescentes: ${adolescente} <br>
        Adultos: ${adulto} <br>
        Idosos: ${idoso} <br><br>
        <strong>Total de ${quantidade} pessoas!</strong>`)
}
    
function estoque (){
    let saldo = 100;
    let entrada = 0;
    let saida = 0;
    let opcao;
            do {
                opcao = Number(prompt(
                    "MENU:\n" +
                    "1 - ENTRADA de Produto\n" +
                    "2 - SAÍDA de produto\n" +
                    "3 - Verifica estoque\n" +
                    "4 - Sair"
                ));
                switch (opcao) {
                    case 1:
                        entrada = parseInt(prompt("Digite a quantidade de ENTRADA do produto"));
                        if (isNaN(entrada)) {
                            alert(`digite Apenas Números inteiros`);
                        } else {
                            saldo = saldo + entrada;
                        }
                        break;
                    case 2:
                        saida = parseInt(prompt("Digite a quantidade de SAÍDA do produto"));
                        if (isNaN(saida)) {
                            alert(`digite Apenas Números inteiros`);
                        } else {
                            saldo = saldo - saida;
                        }
                        break;
                    case 3:
                        if (saldo.length === 0) {
                            alert("Nenhum produto no estoque!");
                            break;
                        }
                        else {
                            alert(`Total de estoque: ${saldo}`);
                        }
                        break;
                    case 4:
                        alert("Tchau!");
                        break;
                    default:
                        alert("Opção inválida!");
                }
            } while (opcao !== 4);
        }
  
function senha(){
    let senhaCorreta = ("senai123");
    let senhaDigitada;
        
    for (let tentativa = 3; tentativa >0; tentativa--){
        senhaDigitada = prompt("Digite a senha:");
        if (senhaDigitada === senhaCorreta){
            alert("Bem-Vindo");
            return
        }
        else{
            alert(`Senha errada. Tentativas ${tentativa-1}`)
        }
    }
    alert("Acesso bloqueado")
}

function primos(){
    let inicio = Number(prompt("Digite onde inicia"));
    let final = Number(prompt("Digite onde termina"));
    let resultado = "";

    for(let num = inicio; num <= final; num++){
        let contador = 0;
        for(let i = 0; i <= num; i++){
            if (num % i === 0){
                contador++
            }
        }
        if (contador === 2){
            resultado += num + ", ";
        }
    }
    alert(`Primos encontrados ${resultado}`)
}

function atendimento(){
    let fila = [];
    let menu;
    do {
        menu = Number(prompt(
            "MENU:\n" +
            "1 - Adicionar pessoa à fila\n" +
            "2 - Atender próxima pessoa\n" +
            "3 - Mostrar fila atual\n" +
            "4 - Sair"
        ));
        switch (menu) {
            case 1:
                let nome = prompt("Digite o nome da pessoa:");
                fila.push(nome);
                alert(`${nome} foi adicionada à fila.`);
                break;
            case 2:
                if (fila.length === 0) {
                    alert("Fila vazia! Ninguém para atender.");
                } else {
                    let atendido = fila.shift();
                    alert(`${atendido} foi atendido(a).`);
                }
                break;
            case 3:
                if (fila.length === 0) {
                    alert("Fila vazia!");
                } else {
                    alert("Fila atual:\n" + fila.join(", "));
                }
                break;
            case 4:
                alert("Saindo do atendimento.");
                break;
            default:
                alert("Opção inválida!");
        }
    } while (menu !== 4);
}

function satisfacao(){
    let ruim = 0;
    let regular = 0;
    let otimo = 0;
    
    for (let i = 1; i <= 10; i++) {
        let nota = Number(prompt(`Cliente ${i}: Digite uma nota de 0 a 10:`));
        if (nota >= 0 && nota <= 4) {
            ruim++;
        } else if (nota >= 5 && nota <= 7) {
            regular++;
        } else if (nota >= 8 && nota <= 10) {
            otimo++;
        } else {
            alert("Nota inválida! Digite um valor entre 0 e 10.");
            i--; // repete a iteração
        }
    }
    alert(`Ruim: ${ruim} notas\nRegular: ${regular} notas\nÓtimo: ${otimo} notas`);
}

function media(){
    for (let i = 1; i <= 5; i++) {
        let nome = prompt(`Digite o nome do ${i}º aluno do total de 5:`);
        let soma = 0;
        for (let j = 1; j <= 3; j++) {
            let nota = Number(prompt(`Digite a ${j}ª nota de ${nome}:`));
            soma += nota;
        }
        let media = soma / 3;
        if (media >= 7) {
            alert(`${nome} foi APROVADO! Média: ${media.toFixed(2)}`);
        } else {
            alert(`${nome} foi REPROVADO! Média: ${media.toFixed(2)}`);
        }
    }
}

function vendas(){
    let vendas = [];
    let total = 0;
    let acima300 = 0;

    for (let i = 1; i <= 7; i++) {
        let valor = Number(prompt(`Digite o valor de vendas do ${i}º dia:`));
        vendas.push(valor);
        total += valor;
        if (valor > 300) {
            acima300++;
        }
    }

    let media = total / vendas.length;

    alert(
        `Total vendido: R$ ${total.toFixed(2)}\n` +
        `Média de vendas: R$ ${media.toFixed(2)}\n` +
        `Dias com vendas acima de R$ 300: ${acima300} dias`
    );
}

function verificaLista(){
    let lista = [5, 12, 23, 7, 18, 30, 42, 9, 14, 27];
    let numero = Number(prompt("Digite um número para verificar na lista:"));
    let encontrado = false;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === numero) {
            encontrado = true;
            break;
        }
    }

    if (encontrado) {
        alert(`O número ${numero} está na lista!`);
    } else {
        alert(`O número ${numero} NÃO está na lista.`);
    }
}

function caixa() {
    let valor = Number(prompt("Digite o valor do saque (mínimo R$ 10):"));
    if (isNaN(valor) || valor < 10 || valor % 10 !== 0) {
        alert("Valor inválido! Digite um valor inteiro, múltiplo de 10 e maior ou igual a 10.");
        return;
    }

    let notas100 = parseInt(valor / 100);
    valor = valor % 100;
    let notas50 = parseInt(valor / 50);
    valor = valor % 50;
    let notas20 = parseInt(valor / 20);
    valor = valor % 20;
    let notas10 = parseInt(valor / 10);

    alert(
        `Notas entregues:\n` +
        `R$ 100: ${notas100}\n` +
        `R$ 50: ${notas50}\n` +
        `R$ 20: ${notas20}\n` +
        `R$ 10: ${notas10}`
    );
}