db.filmes.insertOne(
    { "_id": 10, "titulo": "O Retorno do NoSQL", "genero": "Sci-Fi" },
)
db.avaliacoes.insertOne(
    { "_id": 999, "filme_id": 10, "nota": 5, "comentario": "Excelente!" }
)

// a 
db.filmes.aggregate([
    {
        $lookup: {
            from: "avaliacoes",
            localField: "_id",
            foreignField: "filme_id",
            as: "feedback"
        }
    }
])







// testes
db.filmes.insertMany([
    { "_id": 11, "titulo": "O Retorno do Mongodb", "genero": "Comedia" },
    { "_id": 12, "titulo": "AIAIIWIIE", "genero": "Romance" }
])
db.avaliacoes.insertMany([

    { "_id": 998, "filme_id": 11, "nota": 4, "comentario": "Bosta!" },
    { "_id": 997, "filme_id": 12, "nota": 67, "comentario": "Aura demais!" }
])