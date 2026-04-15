db.proprietario.aggregate([
    {
        $project: {
            _id: 0,
            nome: 1,
            cpf: 1,
            sexo: 1,
            endereco: {
                endereco: 1,
                numero: 1,
                bairro: 1,
                cidade: 1,
                estado: 1
            },
            cadastro: {
                $floor: {
                    $multiply: [{ $rand: {} }, 100]
                }
            }
        }
    },
    { $limit: 5 },
    { $out: "pessoas" }
])