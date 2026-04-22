
// 1) 
// Qual modelo de carro tem mais multas?
db.multas.aggregate([
    {
        $group: {
            _id: "$veiculo.modelo",
            total_multas: { $sum: 1 }
        }
    },
    {
        $sort: { total_multas: -1 }
    },
    { $limit: 1 }
])


// 2) 
// Quantas multas por cidade?
db.multas.aggregate([
    {
        $group: {
            _id: "$localizacao.cidade",
            total_multas: { $sum: 1 }
        }
    },
    {
        $sort: { total_multas: -1 }
    },
    { $limit: 1 }
])


// 3) 
// Qual é a infração mais aplicada?
db.multas.aggregate([
    {
        $group: {
            _id: "$infracao.descricao",
            total_infracao: { $sum: 1 }
        }
    },
    {
        $sort: { total_infracao: -1 }
    },
    { $limit: 1 }
])


// 4) 
// Qual mês do ano tem mais multas?
db.multas.aggregate([
    {
        // cria um novo campo
        $addFields: {
            // $toDate converte $data para uma data manipulavel
            dataConvertida: { $toDate: "$data" }
        }
    },
    {
        $group: {
            // $month extrai o mes
            _id: { $month: "$dataConvertida" },
            total_multas: { $sum: 1 }
        }
    },
    {
        $sort: { total_multas: -1 }
    },
    { $limit: 1 }
])


// 5) 
// Qual é a cor de veículo mais multada?
db.multas.aggregate([
    {
        $group: {
            _id: "$veiculo.cor",
            total_multas: { $sum: 1 }
        }
    },
    {
        $sort: { total_multas: -1 }
    },
    { $limit: 1 }
])


// 6) 
// Qual agente aplica mais multas?
db.multas.aggregate([
    {
        $group: {
            _id: "$agente.nome",
            total_multas: { $sum: 1 }
        }
    },
    {
        $sort: { total_multas: -1 }
    },
    { $limit: 1 }
])


// 7) 
// Qual sexo é mais multado?
db.multas.aggregate([
    {
        $group: {
            _id: "$proprietario.sexo",
            total_multas: { $sum: 1 }
        }
    },
    {
        $sort: { total_multas: -1 }
    },
    { $limit: 1 }
])


// 8) 
// Qual marca de carro os homens preferem?
db.multas.aggregate([
    {
        $match: {
            "proprietario.sexo": "Masculino"
        }
    },
    {
        $group: {
            _id: "$veiculo.marca",
            total: { $sum: 1 }
        }
    },
    {
        $sort: { total: -1 }
    },
    { $limit: 1 }
])


// 9) 
// Qual cor de carro as mulheres mais preferem?
db.multas.aggregate([
    {
        $match: {
            "proprietario.sexo": "Feminino"
        }
    },
    {
        $group: {
            _id: "$veiculo.cor",
            total: { $sum: 1 }
        }
    },
    {
        $sort: { total: -1 }
    },
    { $limit: 1 }
])


// 10) 
// Faça um ranking dos veículos mais multados, decrescente.
db.multas.aggregate([
    {
        $group: {
            _id: {
                // agrupar por mais de um campo
                placa: "$veiculo.placa",
                marca: "$veiculo.marca"
            },
            total_multas: { $sum: 1 }
        }
    },
    {
        $sort: { total_multas: -1 }
    },
    {
        $project: {
            _id: 0,
            // quando dar group vc perde os outros campos a nao ser que tenha definido nele
            placa: "$_id.placa",
            marca: "$_id.marca",
            total_multas: 1
        }
    }
])