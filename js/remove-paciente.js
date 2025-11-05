const tabelaCorpo = document.querySelector('tbody');

tabelaCorpo.addEventListener('dblclick', function(event){
    event.target.parentNode.classList.add('fadeOut');
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
    //event.target.parentNode.remove();
    
});

/*pacientes.forEach(function(paciente){
    paciente.addEventListener('dblclick', function(){
        this.remove();
    });
}); */