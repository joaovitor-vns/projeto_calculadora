
//Função principal

function Calculadora(num1, num2, operador) {
  let resultado

  num1 = Number(num1)
  num2 = Number(num2)

  switch (operador) {
    case "+":
      resultado = num1 + num2
      break;
    case "-":
      resultado = num1 - num2
      break;
    case "*":
      resultado = num1 * num2
      break;
    case "/":
      resultado = num1 / num2
      break;
    case "e":
      resultado = num1 ** num2
      break;
  }
  if (resultado == undefined || resultado > 1000000) {
    resultado = "ERRO"
  }
  return resultado
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}