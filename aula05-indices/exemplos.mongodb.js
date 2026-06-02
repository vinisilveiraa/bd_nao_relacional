// comandos usados a5

// use banconovo;

// registra 100.000 usuarios
for (let i = 0; i < 100000; i++) {
    db.usuarios.insertOne({
        nome: `Usuario${i}`,
        email: `usuario${i}@email.com`,
        idade: Math.floor(Math.random() * 80) + 18

    });
}

// ====================================================== //

db.usuarios.find({}).explain("executionStats")

// tenta pegar sem index
db.usuarios.find({ email: "usuario10000@email.com" }).explain("executionStats")

// criando index
db.usuarios.createIndex({ email: 1 }) // 1 = crescente
db.usuarios.getIndexes();

// roda dnv, com index agora
db.usuarios.find({ email: "usuario10000@email.com" }).explain("executionStats")

// indice composto
// nome em ordem crescente e idade em ordem decrescente
db.usuarios.createIndex({ nome: 1, idade: -1 })
db.usuarios.find({ nome: "Usuario1000" }).sort({ idade: -1 })


// indice de texto
db.usuarios.find({ nome: "Usuario1000" }).explain("executionStats")

db.usuarios.createIndex({ nome: "text" })
db.usuarios.find({ $text: { $search: "Usuario1000" } }).explain("executionStats");

// removendo index
db.usuarios.getIndexes();
db.usuarios.dropIndex("email_1")

// ====================================================== //

// pega o tamanho dos indexes (em bytes)
db.usuarios.stats().indexSizes;
// pega o tamanho de um index especifico (em bytes)
db.usuarios.stats().indexSizes['email_1'];
// divide por 1024 -> KB
db.usuarios.stats().indexSizes['email_1'] / 1024;
// divide por 1024 x2 -> MB
(db.usuarios.stats().indexSizes['email_1'] / 1024) / 1024;

// tamanho total dos indexes (em byte)
db.usuarios.totalIndexSize()

// ====================================================== //

