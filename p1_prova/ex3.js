db.contas.insertMany([
    { "_id": 101, "cliente": "João", "saldo": 1000, "status": "Ativa" },
    { "_id": 102, "cliente": "Maria", "saldo": 2500, "status": "Ativa" },
    { "_id": 103, "cliente": "Carlos", "saldo": 500, "status": "Inativa" }
])


// a, b
db.contas.updateMany(
    { status: "Ativa" },
    {
        $mul: { saldo: 1.05 },
        $set: { ultima_atualizacao: 2026 }
    }
)