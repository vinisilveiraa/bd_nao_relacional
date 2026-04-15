db.multas.insertOne({
    lancamento: "",
    data: "",
    hora: "",
    local: "",

    // nao muda com frequencia = embed melhor
    agente: {},
    veiculo: {},
    infracao: {},

    cidade: {},
}); 