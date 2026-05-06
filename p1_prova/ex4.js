db.postagens.insertOne({
    "_id": 505,
    "autor": "dev_guru",
    "conteudo": "Dicas de MongoDB",
    "tags": ["nosql", "banco_de_dados", "antigo"]
})



// a
db.postagens.updateOne(
    { _id: 505 },
    {
        $pull: { tags: "antigo" },
    }
);

db.postagens.updateOne(
    { _id: 505 },
    {
        $push: { tags: { $each: ["performance", "json"] } }
    }
);









// erro no mongo ?!?!?!??!?!?!
db.postagens.updateOne(
    { _id: 505 },
    {
        $pull: { tags: "antigo" },
        $push: { tags: { $each: ["performance", "json"] } }
    }
);