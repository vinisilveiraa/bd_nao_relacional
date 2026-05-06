// a
db.pacientes.createIndex({ cidade: 1, ano_nascimento: -1 })


// b

// usaria "db.pacientes.getIndexes()" que entregaria meus indexes existentes
db.pacientes.getIndexes()