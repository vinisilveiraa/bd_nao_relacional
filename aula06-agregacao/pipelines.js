// ==========================================
// MONGODB AGGREGATION FRAMEWORK - COMPLEMENTO
// Definições, Pipeline, Estágios e Exercícios
// ==========================================

/* CONCEITO CENTRAL:
  A agregação processa documentos sequencialmente em estágios modularizados. 
  Cada estágio realiza uma operação específica e passa o resultado adiante.
*/

// ==========================================
// 1. MAPEAMENTO DE ESTÁGIOS DA PIPELINE
// ==========================================

const estagiosExplicados = {
    $match: "Filtra os documentos de acordo com os critérios (semelhante ao WHERE no SQL).",
    $group: "Agrupa os documentos por uma chave e calcula agregados (soma, média, contagem).",
    $project: "Seleciona, inclui, exclui ou transforma campos específicos, criando novos dados.",
    $sort: "Ordena os documentos com base em um ou mais campos.",
    $limit: "Restringe o número de documentos que passam para as próximas etapas.",
    $skip: "Ignora uma quantidade especificada de documentos.",
    $unwind: "Desestrutura um array, gerando um documento para cada elemento contido nele.",
    $facet: "Executa múltiplas pipelines de agregação em paralelo combinando os resultados.",
    $bucket: "Agrupa documentos dividindo-os em intervalos predefinidos.",
    $bucketAuto: "Agrupa os documentos automaticamente em um número fixo de buckets.",
    $addFields: "Adiciona novos campos à estrutura do documento.",
    $set: "Similar ao $addFields, mas também modifica campos já existentes.",
    $count: "Gera um campo contendo o total de documentos que vieram do estágio anterior."
};


// ==========================================
// 2. OPERADORES DISPONÍVEIS NA PIPELINE
// ==========================================

const operadoresDeAgregacao = ["$sum", "$avg", "$min", "$max", "$first", "$last"];

const operadoresCondicionais = {
    $cond: "Estrutura condicional (equivalente ao If-Else).",
    $ifNull: "Retorna um valor alternativo se o campo avaliado for nulo ou indefinido.",
    $switch: "Implementa uma série de condições ramificadas (como um Switch Case)."
};

const operadoresDeArray = {
    $push: "Adiciona elementos a um array.",
    $addToSet: "Adiciona elementos únicos a um array (evita duplicidade).",
    $filter: "Filtra elementos de um array com base em uma lógica condicional.",
    $map: "Aplica uma expressão de transformação a cada elemento individual de um array.",
    $reduce: "Reduz um array inteiro a um único valor computado."
};


// ==========================================
// 3. RESOLUÇÃO COMPLETA DOS EXERCÍCIOS DOS SLIDES
// Códigos MongoDB baseados nas instruções das páginas 37 e 38
// ==========================================

/*
DADOS
*/

db.vendas.insertMany([
  {
    cliente_id: 1,
    produto_id: "Notebook",
    valor_venda: 3000
  },
  {
    cliente_id: 1,
    produto_id: "Mouse",
    valor_venda: 100
  },
  {
    cliente_id: 2,
    produto_id: "Notebook",
    valor_venda: 3500
  },
  {
    cliente_id: 2,
    produto_id: "Teclado",
    valor_venda: 200
  },
  {
    cliente_id: 3,
    produto_id: "Notebook",
    valor_venda: 4000
  },
  {
    cliente_id: 1,
    produto_id: "Notebook",
    valor_venda: 3200
  }
]);

/**
 * EXERCÍCIO 1: Contagem de Vendas por Cliente
 * Objetivo: Calcular quantas vendas cada cliente realizou.
 * Dica do slide: Use $group com cliente_id.
 */
db.vendas.aggregate([
    {
        $group: {
            _id: "$cliente_id",
            total_vendas: { $sum: 1 }
        }
    }
]);

/**
 * EXERCÍCIO 2: Média de Vendas por Produto
 * Objetivo: Determinar a média de vendas para cada tipo de produto.
 * Dica do slide: Agrupe por produto e utilize $avg.
 */
db.vendas.aggregate([
    {
        $group: {
            _id: "$produto_id",
            media_vendas: { $avg: "$valor_venda" }
        }
    }
]);

/**
 * EXERCÍCIO 3: Listar Clientes que Compraram Mais de 5 Produtos
 * Objetivo: Identificar clientes que realizaram grandes pedidos.
 * Dica do slide: Use $match após o $group.
 */
db.pedidos.aggregate([
    {
        $group: {
            _id: "$cliente_id",
            total_produtos_comprados: { $sum: "$quantidade" }
        }
    },
    {
        $match: {
            total_produtos_comprados: { $gt: 5 }
        }
    }
]);

/**
 * EXERCÍCIO 4: Top 3 Produtos Mais Vendidos
 * Objetivo: Encontrar os produtos com maior número de vendas.
 * Dica do slide: Agrupe por produto, some a quantidade, use $sort e filtre com $limit.
 */
db.pedidos.aggregate([
    {
        $group: {
            _id: "$produto_id",
            quantidade_total: { $sum: "$quantidade" }
        }
    },
    {
        $sort: {
            quantidade_total: -1 // Ordenação decrescente para trazer os maiores primeiro
        }
    },
    {
        $limit: 3 // Restringe o resultado apenas ao Top 3
    }
]);

/**
 * EXERCÍCIO 5: Total de Vendas por Região
 * Objetivo: Calcular o total de vendas baseado na região do cliente.
 * Dica do slide: Utilize $lookup para unir pedidos e clientes, depois agrupe por regiao.
 */
db.pedidos.aggregate([
    {
        // Realiza o join entre as coleções pedidos e clientes
        $lookup: {
            from: "clientes",
            localField: "cliente_id",
            foreignField: "_id",
            as: "dados_cliente"
        }
    },
    {
        // Desestrutura o array gerado pelo $lookup para facilitar o agrupamento
        $unwind: "$dados_cliente"
    },
    {
        // Agrupa pela região extraída do documento de clientes e soma as quantidades/valores
        $group: {
            _id: "$dados_cliente.regiao",
            total_vendas_regiao: { $sum: "$valor_total" }
        }
    }
]);