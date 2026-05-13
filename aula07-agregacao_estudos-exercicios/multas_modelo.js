db.multas.insertOne({
    lancamento: "",
    data: "",
    hora: "",
    local: "",

    // veiculo_id: ObjectId(''),
    // proprietario_id: Object(''),

    veiculo: {
        placa: "",
    },

    proprietario: {
        nome: "",
    },

    agente: {
        matricula: "",
        nome: ""
    },

    infracao: {
        descricao: "",
        valor: "",
        pontos: ""
    },

    localizacao: {
        cidade: "",
        estado: ""
    }
});