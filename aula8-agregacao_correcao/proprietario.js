db.pessoas_rascunho.aggregate([
    {
        $project: {
            _id: 0,
            nome: 1,
            cpf: 1,
            sexo: 1,
            endereco: {
                logradouro: "$logradouro",
                numero: "$numero",
                bairro: "$bairro",
                cidade: "$cidade",
                estado: "$estado"
            },
            cadastro: {
                $floor: {
                    $multiply: [{ $rand: {} }, 100]
                }
            }
        }
    },
    { $limit: 10 },
    { $out: "proprietarios" }
])