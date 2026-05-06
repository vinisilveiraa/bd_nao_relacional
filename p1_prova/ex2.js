// insert
db.remessas.insertMany([
    { "_id": 1, "destino": "SP", "peso_kg": 45, "status": "Pendente", "urgente": true },
    { "_id": 2, "destino": "RJ", "peso_kg": 60, "status": "Em Rota", "urgente": false },
    { "_id": 3, "destino": "SP", "peso_kg": 55, "status": "Pendente", "urgente": false },
])

db.remessas.find({
    peso_kg: { $gte: 50 },
    $or: [
        { destino: "SP" },
        { status: "Pendente" },
    ]
})






//testes 
db.remessas.insertMany([
    { "_id": 4, "destino": "SP", "peso_kg": 60, "status": "Em Rota", "urgente": false },
    { "_id": 5, "destino": "RJ", "peso_kg": 75, "status": "Pendente", "urgente": false }
])