// ==========================================
// ESTRATÉGIA 1: DOCUMENTOS INCORPORADOS (EMBEDDING)
// Exemplo de como os dados são guardados diretamente num único documento
// ==========================================

const orderEmbeddingExample = {
  "_id": "64ac9f9c75e7a9c7a6765715", // Em MongoDB real, use: ObjectId("64ac9f9c75e7a9c7a6765715")
  "item": "Laptop",
  "price": 1200,
  "user": {
    "name": "Alice"
  }
};


// ==========================================
// ESTRATÉGIA 2: REFERÊNCIAS (REFERENCES)
// Exemplo de coleções separadas utilizando IDs de referência (Chave Estrangeira)
// ==========================================

// Documento na Coleção 'users'
const userDocument = {
  "_id": "64ac9f0375e7a9c7a6765710",
  "name": "Alice"
};

// Documento na Coleção 'orders' com referência ao user_id
const orderReferenceDocument = {
  "_id": "64ac9f9c75e7a9c7a6765715",
  "item": "Laptop",
  "price": 1200,
  "user_id": "64ac9f0375e7a9c7a6765710" // Referência ao utilizador Alice
};


// ==========================================
// CONSULTAS E PIPELINES DE AGREGAÇÃO (MONGODB)
// ==========================================

// 1. Consultas simples (findOne) utilizando referências
db.orders.findOne({ _id: ObjectId("64ac9f9c75e7a9c7a6765715") });
db.users.findOne({ _id: ObjectId("64ac9f0375e7a9c7a6765710") });


// 2. Junção de coleções usando o estágio $lookup
db.orders.aggregate([
  {
    $lookup: {
      from: "users",          // Coleção de destino que queremos juntar
      localField: "user_id",   // Campo local na coleção de origem (orders)
      foreignField: "_id",     // Campo correspondente na coleção de destino (users)
      as: "user info"          // Nome do novo array onde os dados serão colocados
    }
  }
]);


// 3. Agrupamento de dados usando o estágio $group (Exemplo de contagem e soma)
db.orders.aggregate([
  {
    $group: {
      _id: "$product_id",                       // Agrupa os dados pelo ID do produto
      total_orders: { $sum: 1 },                // Conta o número total de pedidos
      total_quantity: { $sum: "$quantity" }     // Soma a quantidade total comprada por produto
    }
  }
]);