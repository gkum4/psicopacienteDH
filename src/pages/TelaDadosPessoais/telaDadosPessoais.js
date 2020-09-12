//Código para Alterar Imagem
window.addEventListener('load', function () {
    document.getElementById('alterar-foto').addEventListener('change', function () {
        if (this.files && this.files[0]) {
            var img = document.getElementById('img-user');
            img.src = URL.createObjectURL(this.files[0]);
        }
    });
});

//Código para esconder/mostrar campo CRP
const radiosButtons = document.body.querySelectorAll("input[type='radio']");
for(var i=0; i<radiosButtons.length;i++) {
    radiosButtons[i].onclick = function () {
        clique(this.value);
    }
}

function clique(radio) {
    if(radio == 'psicologo') {
        document.getElementById('campo-crp').className = 'field-tipo';
    } else if(radio == 'paciente') {
        document.getElementById('campo-crp').className = 'hidden';
    } 
}
