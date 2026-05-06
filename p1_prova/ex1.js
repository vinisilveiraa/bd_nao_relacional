db.clientes.insertOne({
    id: 1,
    Nome: "Tech Solutions Corp",
    Setor: "B2B",
    enderecos: [
        { 
            endereco1: {
                rua: "A",
                numero: 100,
                estado: "São Paulo"
            },
            endereco2: {
                rua: "B",
                numero: 200,
                estado: "Rio de Janeiro"
            },
        }
    ] 
})