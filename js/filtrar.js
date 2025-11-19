const campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener('input', function(){
    console.log(this.value);

    const pacientes = document.querySelectorAll('.paciente');
    
    if(this.value.length > 0){
        for(i = 0; i < pacientes.length; i++){
            let paciente = pacientes[i];
            let tdNome = paciente.querySelector(".info-nome");
            let nome = tdNome.innerText
            let expressao = new RegExp(this.value, "i")

            if(!expressao.test(nome)){
                paciente.classList.add('vanish');
            } else {
                paciente.classList.remove('vanish');
            }
        }
    } else {
        for(i = 0; i < pacientes.length; i++){
            let paciente = pacientes[i];

            paciente.classList.remove('vanish');
        }
    }
    
});
