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