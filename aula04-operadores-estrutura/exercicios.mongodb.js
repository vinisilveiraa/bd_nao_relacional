// a) aumentar o preço de todos os pratos em 10%
db.menu.updateMany(
    {},
    { $mul: { price: 1.1 } }
)

// b) adicionar "Guacamole" aos ingredientes do Taco
db.menu.updateOne(
    { dish: "Taco" },
    { $push: { ingredients: "Guacamole" } }
)

// c) atualizar o preço do Sushi para 35
db.menu.updateOne(
    { dish: "Sushi" },
    { $set: { price: 35 } }
)

// d) substituir "Beef" por "Chicken" nos ingredientes do Taco
db.menu.updateOne(
    { dish: "Taco", ingredients: "Beef" },
    { $set: { "ingredients.$": "Chicken" } }
)