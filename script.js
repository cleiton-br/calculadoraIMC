function calculaImc(altura, peso){
  let resultadoImc = peso / (altura * altura)
  return resultadoImc;
}


function verificaIMC(resultadoimc){
  let elementoResultadoImc = document.getElementById("resultadoIMC")

  if (resultadoimc < 19) {
      elementoResultadoImc.textContent = "IMC: " + Math.round(resultadoimc) + " - Está abaixo do peso";
  } else if (resultadoimc >= 19 && resultadoimc < 25) {
      elementoResultadoImc.textContent = "IMC " + Math.round(resultadoimc) + " - Peso está normal";
  } else if (resultadoimc >= 25 && resultadoimc < 29) {
      elementoResultadoImc.textContent = "IMC " + Math.round(resultadoimc) + " - Está sobrepeso";
  }
    else if (resultadoimc >= 29 && resultadoimc < 35) {
      elementoResultadoImc.textContent = "IMC " + Math.round(resultadoimc) + " - Está com obesidade grau 1";
  }
    else if (resultadoimc >= 35 && resultadoimc < 40) {
      elementoResultadoImc.textContent = "IMC " + Math.round(resultadoimc)+ " - Está com obesidade grau 2";
  }
    else if (resultadoimc >= 40) {
      elementoResultadoImc.textContent = "IMC " + Math.round(resultadoimc) + " - Está com obesidade grau 3";
  }
}

let altura = document.getElementById("altura");
let peso = document.getElementById("peso");
let buttonCalcular = document.getElementById("calcular");
let buttonResetar = document.getElementById("Reset");
let elementoResultadoImc = document.getElementById("resultadoIMC");

buttonCalcular.addEventListener("click", () => {

  let imcCalculado = calculaImc(altura.value, peso.value);
  verificaIMC(imcCalculado)

});
buttonResetar.addEventListener("click", () => elementoResultadoImc.textContent = "" );