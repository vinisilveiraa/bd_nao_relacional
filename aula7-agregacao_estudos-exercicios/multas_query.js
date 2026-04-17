db.multas.insertMany([
    {
        lancamento: "Condutor sem vergonha",
        data: "2018-12-30",
        hora: "00:22",
        local: "Praça do Centro",

        agente: { matricula: "789", nome: "Toin" },

        veiculo: {
            placa: "EVA4960",
            cadastro: "do Prof",
            cor: "Branco",
            modelo: "Polo",
            marca: "Volkswagen"
        },

        proprietario: {
            nome: "Prof. Tiago",
            cpf: "12345678910",
            sexo: "Masculino",
            cidade: "Cajuru",
            estado: "SP"
        },

        infracao: {
            descricao: "Avançar o sinal vermelho",
            valor: 293.47,
            pontos: 7
        },

        localizacao: { cidade: "Guaxupé", estado: "MG" }
    },

    {
        lancamento: "Sem cinto",
        data: "2018-12-31",
        hora: "08:15",
        local: "Avenida do rio",

        agente: { matricula: "123", nome: "Jão" },

        veiculo: {
            placa: "BLD7764",
            cadastro: "do Prof",
            cor: "Branco",
            modelo: "Fusca",
            marca: "Volkswagen"
        },

        proprietario: {
            nome: "Prof. Tiago",
            cpf: "12345678910",
            sexo: "Masculino",
            cidade: "Cajuru",
            estado: "SP"
        },

        infracao: {
            descricao: "Falta do cinto de segurança",
            valor: 195.32,
            pontos: 5
        },

        localizacao: { cidade: "Cajuru", estado: "SP" }
    },

    {
        lancamento: "Alta velocidade",
        data: "2019-02-28",
        hora: "13:25",
        local: "Avenida",

        agente: { matricula: "456", nome: "Zé" },

        veiculo: {
            placa: "CFU0412",
            cadastro: "do Prof",
            cor: "Azul",
            modelo: "Gol",
            marca: "Volkswagen"
        },

        proprietario: {
            nome: "Prof. Tiago",
            cpf: "12345678910",
            sexo: "Masculino",
            cidade: "Cajuru",
            estado: "SP"
        },

        infracao: {
            descricao: "Velocidade até 20% acima",
            valor: 85.15,
            pontos: 5
        },

        localizacao: { cidade: "Mococa", estado: "SP" }
    },

    {
        lancamento: "Sem cinto",
        data: "2019-05-30",
        hora: "14:33",
        local: "Praça do Centro",

        agente: { matricula: "123", nome: "Jão" },

        veiculo: {
            placa: "YDX5892",
            cadastro: "Licenciado",
            cor: "Vermelho",
            modelo: "Chevette",
            marca: "Chevrolet"
        },

        proprietario: {
            nome: "Joazim",
            cpf: "12345678910",
            sexo: "Masculino",
            cidade: "Mococa",
            estado: "SP"
        },

        infracao: {
            descricao: "Falta do cinto de segurança",
            valor: 195.32,
            pontos: 5
        },

        localizacao: { cidade: "Guaxupé", estado: "MG" }
    },

    {
        lancamento: "Sinal vermelho",
        data: "2017-03-14",
        hora: "15:30",
        local: "Praça José Gomes",

        agente: { matricula: "123", nome: "Jão" },

        veiculo: {
            placa: "KYN0169",
            cadastro: "Licenciado",
            cor: "Branco",
            modelo: "Palio",
            marca: "Fiat"
        },

        proprietario: {
            nome: "Mariazinha",
            cpf: "78923578214",
            sexo: "Feminino",
            cidade: "Guaxupé",
            estado: "MG"
        },

        infracao: {
            descricao: "Avançar o sinal vermelho",
            valor: 293.47,
            pontos: 7
        },

        localizacao: { cidade: "Guaxupé", estado: "MG" }
    },

    {
        lancamento: "Alta velocidade",
        data: "2017-12-23",
        hora: "17:18",
        local: "Rua",

        agente: { matricula: "789", nome: "Toin" },

        veiculo: {
            placa: "OKY0101",
            cadastro: "Licenciado",
            cor: "Preto",
            modelo: "Ká",
            marca: "Ford"
        },

        proprietario: {
            nome: "Zezinho",
            cpf: "96532578921",
            sexo: "Masculino",
            cidade: "Curitiba",
            estado: "PR"
        },

        infracao: {
            descricao: "Velocidade até 20% acima",
            valor: 85.15,
            pontos: 5
        },

        localizacao: { cidade: "Curitiba", estado: "PR" }
    },

    {
        lancamento: "Sem cinto",
        data: "2016-08-19",
        hora: "09:26",
        local: "Estacionamento",

        agente: { matricula: "789", nome: "Toin" },

        veiculo: {
            placa: "YAG0101",
            cadastro: "Licenciado",
            cor: "Verde",
            modelo: "Polo",
            marca: "Volkswagen"
        },

        proprietario: {
            nome: "Zezinho",
            cpf: "96532578921",
            sexo: "Masculino",
            cidade: "Curitiba",
            estado: "PR"
        },

        infracao: {
            descricao: "Falta do cinto de segurança",
            valor: 195.32,
            pontos: 5
        },

        localizacao: { cidade: "Curitiba", estado: "PR" }
    },

    {
        lancamento: "Alta velocidade",
        data: "2018-11-15",
        hora: "10:34",
        local: "Praça da Matriz",

        agente: { matricula: "123", nome: "Jão" },

        veiculo: {
            placa: "ZZZ0666",
            cadastro: "Troco pelo Gol",
            cor: "Preto",
            modelo: "Opala",
            marca: "Chevrolet"
        },

        proprietario: {
            nome: "Juquinha",
            cpf: "12354896214",
            sexo: "Masculino",
            cidade: "Cajuru",
            estado: "SP"
        },

        infracao: {
            descricao: "Velocidade até 20% acima",
            valor: 85.15,
            pontos: 5
        },

        localizacao: { cidade: "Guaxupé", estado: "MG" }
    },

    {
        lancamento: "Sinal vermelho",
        data: "2019-01-28",
        hora: "15:23",
        local: "Praça de pedágio",

        agente: { matricula: "789", nome: "Toin" },

        veiculo: {
            placa: "EVA4960",
            cadastro: "do Prof",
            cor: "Branco",
            modelo: "Polo",
            marca: "Volkswagen"
        },

        proprietario: {
            nome: "Prof. Tiago",
            cpf: "12345678910",
            sexo: "Masculino",
            cidade: "Cajuru",
            estado: "SP"
        },

        infracao: {
            descricao: "Avançar o sinal vermelho",
            valor: 293.47,
            pontos: 7
        },

        localizacao: { cidade: "Guaxupé", estado: "MG" }
    },

    {
        lancamento: "Sem cinto",
        data: "2018-05-30",
        hora: "13:25",
        local: "Avenida",

        agente: { matricula: "456", nome: "Zé" },

        veiculo: {
            placa: "BLD7764",
            cadastro: "do Prof",
            cor: "Branco",
            modelo: "Fusca",
            marca: "Volkswagen"
        },

        proprietario: {
            nome: "Prof. Tiago",
            cpf: "12345678910",
            sexo: "Masculino",
            cidade: "Cajuru",
            estado: "SP"
        },

        infracao: {
            descricao: "Falta do cinto de segurança",
            valor: 195.32,
            pontos: 5
        },

        localizacao: { cidade: "Mococa", estado: "SP" }
    }
]);