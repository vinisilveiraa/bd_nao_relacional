// comandos usados a5

// use banconovo;

// registra 100000 usuarios
for (let i = 0; i < 100000; i++) {

    db.usuarios.insertOne({
        nome: `Usuario${i}`,
        email: `usuario${i}@email.com`,
        idade: Math.floor(Math.random() * 80) + 18

    });

}

db.usuarios.find({}).explain("executionStats")
db.usuarios.find({ email: "usuario10000@email.com" }).explain("executionStats")
db.usuarios.createIndex({ email: 1 })
db.usuarios.getIndexes()

// pega o tamanho dos indexes (em bytes)
db.usuarios.stats().indexSizes;
// pega o tamanho de um index especifico (em bytes)
db.usuarios.stats().indexSizes['email_1'];
// divide por 1024 -> KB
db.usuarios.stats().indexSizes['email_1'] / 1024;
// divide por 1024 x2 -> MB
(db.usuarios.stats().indexSizes['email_1'] / 1024) / 1024;



db.usuarios.find({ nome: "Usuario100 " }).explain("executionStats")

db.usuarios.createIndex({ nome: "text" })
db.usuarios.find({ nome: "Usuario100 " }).explain("executionStats")


