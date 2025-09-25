// Foi alterado o título e subtítulo.
var	tSecundario = document.querySelector(".titulo__secundario");
var titulo = document.querySelector(".titulo");
tSecundario.innerText = 'Meus Pacientes';
titulo.innerText = 'Joca Nutrições';

// Cria a variável paciente e peso pela classe.
var pacientes = document.querySelectorAll(".paciente");

for(i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.innerText;
    
    // Cria a variável altura pela classe.
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.innerText;
    
    // Define a função de cálculo do IMC a varíavel IMC, dentor dos parenteses colocamo os parametros, para utilizar as varias utilizadas dentro da função
    var IMC = calculaIMC(peso, altura);
    
    // Valores booleanos
    
    var pesoValido = true;
    var alturaValida = true;
    
    // O cálculo só acontece se os valores forem true.
    
    if (pesoValido && alturaValida){
        var tdIMC = paciente.querySelector(".info-imc");
        tdIMC.innerText = IMC;
    }

    // Emite um alerta se o peso for menor ou maior do que o requisitado.
    if(peso <= 0 || peso >= 1000){
        var pesoValido = false;
        //alert("Peso Inválido!");
        tdIMC.innerText = 'Peso Inválido!';
        paciente.classList.add('paciente__invalido');
    }
    
    // Emite um alerta se a altura for menor ou maior do que o requisitado.
    
    if (altura <= 0.00 || altura >= 3.00){
        var alturaValida = false;
        //alert("Altura Inválida!");
        tdIMC.innerText = 'Altura Inválida!';
        paciente.classList.add('paciente__invalido');

    }
    
}

function calculaIMC (){
    var imc = peso / (altura * altura);

    return imc.toFixed(2);
}