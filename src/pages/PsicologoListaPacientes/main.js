listarPacientes(mockListaPacientes);

function listarPacientes(ListaPacientes, diaMarcadoPeloPsicologo) {

    let listaPacientes = document.getElementById("lista_pacientes");
    // listaPacientes.innerHTML = "";

    ListaPacientes.forEach(paciente => {

        let ultimaEmocao = paciente.ultimaEmocao;
        let nome = paciente.nome;
        let matricula = paciente.matricula;
        let foto = paciente.foto;
        let diaConsulta = diaMarcadoPeloPsicologo || paciente.diaConsulta;

        let itemListaString = itemListaConstructor(matricula, ultimaEmocao, nome, foto, diaConsulta);
            
        let itemLista = document.createElement('div');
        itemLista.className = 'item_lista_container';
        itemLista.innerHTML = itemListaString;

        listaPacientes.appendChild(itemLista);
    })
}

function exibeDadosPaciente(matricula){
    alert("fazer requisição para o paciente " + matricula);
}

function itemListaConstructor(matricula, ultimaEmocao, nome, foto, diaConsulta) {
    var itemLista =
        `<div class="item_lista_overlay" id="${matricula}" onclick="exibeDadosPaciente(this.id)"></div>
        <div class="indicador_emocao ${definirEmocao(ultimaEmocao)}"></div> \
        <img src="${foto}" class="foto_paciente_lista"> \
        <p class="nome_paciente_lista">${nome}</p> \
        <div class="agenda_semanal_paciente">
            ${listarDiasDaSemana(diaConsulta)}
        </div>`

    return itemLista;
};

function definirEmocao(ultimaEmocao) {
    switch (ultimaEmocao) {
        case -1:
            return 'emocao_ruim';
        case 0:
            return 'emocao_neutra';
        case 1:
            return 'emocao_boa';
        default:
            return null;
    };
};

function listarDiasDaSemana(diaConsulta) {
    
    const diasDaSemana = [
        ["segunda-feira", "Seg"],
        ["terça-feira", "Ter"],
        ["quarta-feira", "Qua"],
        ["quinta-feira", "Qui"],
        ["sexta-feira", "Sex"],
        ["sábado", "Sáb"]
    ]

    let semana = "";

    for (d = 0; d <= 5; d++) {
        let diaSemana = 
            `<div class="dia_semana_consulta">
                <div class="dia_semana 
                    ${
                        diasDaSemana[d][0] === diaConsulta ?
                        "indicador_dia_consulta" :
                        "indicador_dia_comum"
                    }"></div>
                ${diasDaSemana[d][1]}
            </div>`

        semana += diaSemana;
    }
        
    return semana;
}

function cadastrarNovoPaciente() {
    
    var matriculaAdicionada = document.getElementById("matricula_cadastro").value;
    var diaConsulta = document.getElementById("dia_consulta_cadastro").value;
    var feedbackCadastro = document.getElementById("feedback_cadastro");

    var paciente = mockListaPacientesParaAdicionar.filter(p => p.matricula === parseInt(matriculaAdicionada));

    paciente.length > 0 ?
    feedbackCadastro.innerHTML = "Paciente Cadastrado com Sucesso!" :
    feedbackCadastro.innerHTML = "Paciente Não Encontrado";

    listarPacientes(paciente, diaConsulta);
}

function abrirModalCadastro() {
    var modalCadastro = document.getElementById("modal_adicionar_paciente");
    var overlayModal = document.getElementById("modal_cadastro_overlay");

    modalCadastro.style.display = "block";
    overlayModal.style.display = "block";
}

function fecharModalCadastro() {
    var modalCadastro = document.getElementById("modal_adicionar_paciente");
    var overlayModal = document.getElementById("modal_cadastro_overlay");

    modalCadastro.style.display = "none";
    overlayModal.style.display = "none";

    limparModalCadastro();
}

function limparModalCadastro() {

    var matriculaAdicionada = document.getElementById("matricula_cadastro").value = "";
    var diaConsulta = document.getElementById("dia_consulta_cadastro").value = "segunda-feira";
    var feedbackCadastro = document.getElementById("feedback_cadastro").innerHTML = "";

}