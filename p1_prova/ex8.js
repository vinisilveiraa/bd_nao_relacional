db.funcionarios.insertMany([
    { "_id": 1, "nome": "Alice", "notas_bimestrais": [8, 9, 10, 7] },
    { "_id": 2, "nome": "Bob", "notas_bimestrais": [5, 6, 6, 7] }
])

// a 
db.funcionarios.aggregate([
    {
        $unwind: "$notas_bimestrais"
    },
    {
        $group: {
            _id: ["$_id", "$nome"],
            media_anual: {
                $avg: "$notas_bimestrais"
            }
        }
    },
    {
        $addFields: {
            aprovado_para_bonus: {
                $cond: { if: { $gt: ["$media_anual", 8] }, then: true, else: false }
            }
        }
    }
])



// testes
db.funcionarios.insertMany([
    { "_id": 3, "nome": "Pais das Maravilhas", "notas_bimestrais": [10, 10, 10, 10] },
    { "_id": 4, "nome": "Esponja", "notas_bimestrais": [1, 2, 3, 4] }
])