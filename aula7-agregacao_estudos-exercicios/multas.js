db.multas.insertOne({
    lancamento: "",
    data: "",
    hora: "",
    local: "",

    agente: {
        matricula: "",
        nome: ""
    },

    veiculo: {
        placa: "",
        cadastro: "",
        cor: "",
        modelo: "",
        marca: ""
    },

    proprietario: {
        nome: "",
        cpf: "",
        sexo: "",
        cidade: "",
        estado: ""
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