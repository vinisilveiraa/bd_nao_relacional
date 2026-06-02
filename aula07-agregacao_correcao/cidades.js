db.estados_cidades_rascunho.aggregate([

    // explode os campos de estados, desconstroi oq ta dentro dele
    { $unwind: "$estados" },

    // explode novamente, agora as cidades
    { $unwind: "$estados.cidades" },

    // usa dos dados para projetar uma nova coleção
    {
        $project: {
            _id: 0, // remove o $_id original
            nome_cidade: '$estados.cidades',
            estado: '$estados.sigla',
            nome_estado: '$estados.nome'
        },
    },

    // usa out para registrar ela
    { $out: "cidades_estados" }

])