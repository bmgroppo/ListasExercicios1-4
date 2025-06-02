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