function exercicio1() {
  for (let i = 1; i <= 100; i++) {
    document.writeln(`${i} - `);
  }
}

function exercicio2() {
  for (let i = 100; i >= 1; i--) {
    document.writeln(`${i} - `);
  }
}

function exercicio3() {
  for (let i = 15; i <= 200; i++) {
    document.writeln(`Quadrado de ${i} = ${i ** 2}<br>`);
  }
}

function exercicio4() {
  let soma = 0;
  for (let i = 1; i <= 100; i++) {
    soma += i;
  }
  document.writeln(`A soma de 1 até 100 é ${soma}`);
}

function exercicio5() {
  let num = Number(prompt(" Forneça um número para verificar sua tabuada"));
  if (isNaN(num)) {
    alert("Forneça um Número válido");
  } else {
    for (i = 1; i <= 10; i++) {
      let res = num * i;
      document.writeln(`${num} x ${i} = ${res} <br>`);
    }
  }
}

function exercicio6() {
  let num = Number(prompt(" Forneça um número de 1 até 50"));
  if (isNaN(num)) {
    alert("Forneça um Número válido");
    return;
  } else if (num < 1 || num > 50) {
    alert("Número diferente do intervalo de 1 a 50");
    return;
  } else {
    let res = num
    while(res *3 < 250){
        document.writeln(`${res} x 3 = ${res *3}<br>`)
        res *=3
    }
  }
}

function exercicio7 (){
    let num = 1
    while (num < 200){
        if (num % 4 ==0){
            document.writeln(`${num}<br>`)
        }
    num++
    }
}

function exercicio8(){
    document.writeln(`Números ímpares de 0 a 20 <br>`)
    for (let i=0; i<=20; i++){
    if (i % 2 !==0){
        document.writeln(`${i} <br>`)
    }    
    }
}

function exercicio9(){
    document.writeln(`<strong>Soma dos pares de 0 a 500</strong> <br>`)
    let soma = 0
    for (let i = 0; i <=500; i+=2){
        soma += i   
    }
    document.writeln(`A soma dos pares de 0 a 500 é ${soma}`)
}

function exercicio10(){
    for (let i=0; i<=15; i++){
        document.writeln(`3 elevado à ${i} = ${3**i}<br>`)
    }
}

function exercicio11(){
    let base = Number(prompt("Digite a base para elevar à potência"))
    let expoente = Number(prompt("Digite o expoente que deseja elevar"))

    let resultado = base ** expoente

    alert(`${base} elevado à ${expoente} = ${resultado}`)
}

function exercicio12() {
    let numeros = [];
    let entrada;

    while (true) {
        entrada = Number(prompt("Digite um número real (ou -1 para sair):"))
        if (entrada === -1){
            break
        }
        numeros.push(entrada);
    }
        let soma = 0;
        let maior = numeros[0];
        let menor = numeros[0];

        for (let i = 0; i < numeros.length; i++) {
            soma += numeros[i];
            if (numeros[i] > maior) maior = numeros[i];
            if (numeros[i] < menor) menor = numeros[i];
        }
        let media = soma / numeros.length;
        alert(`Maior número: ${maior}\nMenor número: ${menor}\nMédia: ${media.toFixed(2)}`);
}

function exercicio13(){
    for (let numero = 3; numero <= 6; numero++) {
        document.writeln(`<strong>Tabuada do ${numero}:</strong><br>`);
        
        for (let i = 1; i <= 10; i++) {
            document.writeln(`${numero} x ${i} = ${numero * i}<br>`);
        }
        
        document.writeln(`<br>`);
    }
}

function exercicio14(){
    let fatorial = 0
    for (let i = 0; i>=5; i++){
        fatorial *= i
    }
    alert(`fatorial de 5 = ${fatorial}`)
}

function exercicio15(){
    let anterior = 1
    let atual = 1

    document.writeln(`<strong>Série de Fibonacci (15 termos)</strong><br>`);
    document.writeln(`${anterior}, ${atual}, `);

    for (let i = 3; i <= 15; i++) { // Começa do 3º termo e vai até o 15º
        let proximo = anterior + atual;
        document.writeln(`${proximo}, `);
        anterior = atual;
        atual = proximo;
    }
}

