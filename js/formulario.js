var addPaciente = document.querySelector('#adicionar-paciente');

addPaciente.addEventListener('click', 
    function (event){
        event.preventDefault();

        // seleciona o formulário
        var form = document.querySelector('#form-adiciona');

        // acessamos os valores <input> do formulário

        var paciente = dadosPacientesFormulario(form);
        console.log(paciente);

        // cria o elemento <tr>
        var pacienteTr = document.createElement("tr");

        // cria as tags <td>
        var nomeTd = document.createElement("td");
        var pesoTd = document.createElement("td");
        var alturaTd = document.createElement("td");
        var gorduraTd = document.createElement("td");
        var imcTd = document.createElement("td");

        
        nomeTd.innerText = paciente.nome;
        pesoTd.innerText = paciente.peso;
        alturaTd.innerText = paciente.altura;
        gorduraTd.innerText = paciente.gordura;
        imcTd.textContent = paciente.IMC;

        pacienteTr.appendChild(nomeTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);
        pacienteTr.appendChild(imcTd);

        var tabela = document.querySelector("#tabela-pacientes")

        tabela.appendChild(pacienteTr).classList.add('paciente');

        
        
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
}
