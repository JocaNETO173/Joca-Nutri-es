// Foi alterado o título e subtítulo.
var	pacientes = document.querySelector(".titulo__secundario");
var titulo = document.querySelector(".titulo");
pacientes.innerText = 'Meus Pacientes';
titulo.innerText = 'Joca Nutrições';

// Cria a variável paciente e peso pela classe.
var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.innerText;

// Cria a variável altura pela classe.
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.innerText;

// Define a função de IMC a uma variável e acessa o objeto pela classe
var IMC = peso / (altura * altura);

// Valores booleanos

var pesoValido = true;
var alturaValida = true;

// Emite um alerta se o peso for menor ou maior do que o requisitado.
if(peso <= 0 || peso >= 1000){
    var pesoValido = false;
    alert("Peso Inválido!");
}

// Emite um alerta se a altura for menor ou maior do que o requisitado.

if (altura <= 0.00 || altura >= 3.00){
    var alturaValida = false;
    alert("Altura Inválida!");
}

// O cálculo só acontece se os valores forem true.

if (pesoValido && alturaValida){
    var tdIMC = paciente.querySelector(".info-imc");
    tdIMC.innerText = IMC;
}

console.log(paciente);
console.log(tdPeso);
console.log(peso);
console.log(tdAltura);
console.log(altura);
