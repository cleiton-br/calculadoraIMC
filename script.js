function calculaImc(altura, peso){
  let resultadoImc = peso / (altura * altura)
  let elementoResultadoImc = document.getElementById("resultadoIMC")

  if (resultadoImc < 19) {
      elementoResultadoImc.textContent = "Está abaixo do peso " + resultadoImc;
  } else if (resultadoImc >= 19 && resultadoImc < 25) {
      elementoResultadoImc.textContent = "Peso está normal " + resultadoImc;
  } else if (resultadoImc >= 25 && resultadoImc < 29) {
      elementoResultadoImc.textContent = "Está sobrepeso " + resultadoImc;
}
    else if (resultadoImc >= 29 && resultadoImc < 35) {
      elementoResultadoImc.textContent = "Está com obesidade grau 1 " + resultadoImc;
}
    else if (resultadoImc >= 35 && resultadoImc < 40) {
      elementoResultadoImc.textContent = "Está com obesidade grau 2 " + resultadoImc;
}
    else if (resultadoImc >= 40) {
      elementoResultadoImc.textContent = "Está com obesidade grau 3 " + resultadoImc;
}
}

let altura = document.getElementById("altura");
let peso = document.getElementById("peso");
let buttonCalcular = document.getElementById("calcular");
let buttonResetar = document.getElementById("Reset");
let elementoResultadoImc = document.getElementById("resultadoIMC");

buttonCalcular.addEventListener("click", () => calculaImc(altura.value, peso.value));
buttonResetar.addEventListener("click", () => elementoResultadoImc.textContent = "");