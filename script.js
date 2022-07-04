function calculaImc(altura, peso){
  let resultadoImc = peso / (altura * altura)
  let elementoResultado = document.getElementById("resultado")
  elementoResultado.textContent = resultadoImc //

};
let altura = document.getElementById("altura");
let peso = document.getElementById("peso");
let button = document.getElementById("calcular");

button.addEventListener("click", () => calculaImc(altura.value, peso.value));

// if resultadoImc {

// }