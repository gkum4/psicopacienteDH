listarPacientes(mockListaPacientes);

function listarPacientes(mockListaPacientes) {

    console.log("chamando listarPacientes");

    let listaPacientes = document.getElementById("lista_pacientes");
    listaPacientes.innerHTML = "";

    mockListaPacientes.forEach(paciente => {

        console.log(paciente);

        let ultimaEmocao = paciente.ultimaEmocao;
        let nome = paciente.nome;
        let matricula = paciente.matricula;
        let foto = paciente.foto;
        let diaConsulta = paciente.diaConsulta;

        let itemListaString = itemListaConstructor(ultimaEmocao, nome, foto, diaConsulta);
            
        let itemLista = document.createElement('div');
        itemLista.className = 'item_lista_container';
        itemLista.id = matricula;
        itemLista.innerHTML = itemListaString;

        listaPacientes.appendChild(itemLista);
    })
}

function itemListaConstructor(ultimaEmocao, nome, foto, diaConsulta) {


    var itemLista =
        `
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

    console.log(diasDaSemana);

    let semana = "";

    for (d = 0; d <= 5; d++) {

        console.log(diasDaSemana[d]);

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
        
    // agendaSemanal.innerHTML = semana;
    return semana;
}