var addPaciente = document.querySelector('#adicionar-paciente');

addPaciente.addEventListener('click', 
    function (event){
        event.preventDefault();

        // seleciona o formulário
        var form = document.querySelector('#form-adiciona');

        // acessamos os valores <input> do formulário

        var paciente = dadosPacientesFormulario(form);
        // chama a função para criar a row da Tabela
        var pacienteTr = criaTr(paciente);

        var erros = validarPaciente(paciente);

        if(erros.length > 0){
            var mensagem_erro = document.querySelector('#mensagem-erro')
            mensagem_erro.innerText = erros;
            console.log('Peso Inválido');
            return;
        }

        //
        var tabela = document.querySelector("#tabela-pacientes")

        tabela.appendChild(pacienteTr).classList.add('paciente');
        form.reset();



        
        
    }
);

function dadosPacientesFormulario(form){

    //objeto = {
        //propriedade/caracteristica: valor,
        //propriedade: valor,
        //propriedade: valor
 //   }

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        IMC: calculaIMC(form.peso.value, form.altura.value)
        
    }

    return paciente;
};

function criaTr(paciente){
     // cria o elemento <tr>
     var pacienteTr = document.createElement("tr");
     pacienteTr.classList.add("paciente");

        // adiciona como elmentos filhos os td

        pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
        pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
        pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
        pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
        pacienteTr.appendChild(criaTd(paciente.IMC, "info-imc"));

        return pacienteTr;
};

function criaTd(dado, classes){

    var td = document.createElement("td");
    td.innerText = dado;
    td.classList.add(classes);
    return td;
};

function validarPaciente(paciente){

    var erros = [];
    
    if(!validarPeso(paciente.peso)) erros.push(' Peso Inválido! ');
    if(!validarAltura(paciente.altura)) erros.push(' Altura Inválida! ');
    if(validarPeso(paciente.peso) || validarAltura(paciente.altura)) erros.push('');
    return erros;
}