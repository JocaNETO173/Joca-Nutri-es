var addPaciente = document.querySelector('#adicionar-paciente');

addPaciente.addEventListener('click', 
    function (event){
        event.preventDefault();

        // seleciona o formulário
        var form = document.querySelector('#form-adiciona');

        // acessamos os valores do formulário
        var nome = form.nome.value;
        var peso = form.peso.value;
        var altura = form.altura.value;
        var gordura = form.gordura.value;


        // cria o elemento <tr>
        var pacienteTr = document.createElement("tr");

        // cria as tags <td>
        var nomeTd = document.createElement("td");
        var pesoTd = document.createElement("td");
        var alturaTd = document.createElement("td");
        var gorduraTd = document.createElement("td");
        var imcTd = document.createElement("td");

        
        nomeTd.innerText = nome;
        pesoTd.innerText = peso;
        alturaTd.innerText = altura;
        gorduraTd.innerText = gordura;

        pacienteTr.appendChild(nomeTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);

        var tabela = document.querySelector("#tabela-pacientes")

        tabela.appendChild(pacienteTr);
        
    }
);