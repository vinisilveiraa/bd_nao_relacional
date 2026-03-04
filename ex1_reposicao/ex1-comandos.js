// =========================================================
//           Parte 1 – Criação de Banco e Coleções
// =========================================================

// 1
use("biblioteca.fatec");
// 2
db.createCollection("Livros");
// 3
db.autores.InsertOne({ nome: "Machado de Assis" });
// 4
db.alunos.insertOne({ nome: "Joao", curso: "DSM", anoIngresso: "2026", ativo: true })

// ====================================================
//           Parte 2 – Inserção de Documentos
// ====================================================

// 5
db.livros.insertOne({ titulo: "Dom Casmurro", anoPublicacao: 1899, genero: "Romance", Paginas: 256, Disponivel: true });
// 6
db.livros.insertMany([
    { titulo: "Memorias Postumas", anoPublicacao: 1881, genero: "Romance", Paginas: 123, Disponivel: true },
    { titulo: "Quincas Borba", anoPublicacao: 1891, genero: "Romance", Paginas: 445, Disponivel: false },
    { titulo: "O Alienista", anoPublicacao: 1882, genero: "Conto", Paginas: 234, Disponivel: true }
]);
// 7
db.autores.insertOne({ nome: "Jorge Amado", nacionalidade: "Brasileiro", livrosPublicados: [] });


// ===========================================
//           Parte 3 – Subdocumentos
// ===========================================

// 8
db.livros.insertOne({
    titulo: "A Hora da Estrela",
    anoPublicacao: 1977,
    Disponivel: true,
    autor: {
        nome: "Clarice Lispector",
        nacionalidade: "Brasileira"
    }
});

// 9
db.livros.insertOne({
    titulo: "Livro com Varios Autores",
    anoPublicacao: 1977,
    Disponivel: true,
    autores: [
        {
            nome: "Clarice Lispector",
            nacionalidade: "Brasileira"
        },
        {
            nome: "Outro autor maneiro",
            nacionalidade: "Brasileira"
        }
    ]
});

// 10
db.alunos.insertOne({
    nome: "Maria",
    curso: "SI",
    contatos: {
        email: "mariazinhaKPUDA@gmail.com",
        telefone: "11987654321"
    }
})

// ================================================================
//           Parte 4 – Arrays e Estruturas Mais Complexas
// ================================================================

// 11
db.livros.insertOne({
    titulo: "Poemas",
    categorias: ["Romance", "Ficcao Literaria"],
    palavrasChave: ["Romance", "Inspirador", "Rapido", "Ficcao"]
})

// 12
db.emprestimos.insertOne({
    aluno: { nome: "Pedrinho", curso: "DSM" }, livro: { titulo: "Dom Casmurro" },
    dataEmprestimo: new Date("2024-06-01"), dataDevolucao: new Date("2026-06-15"), status: "emprestado"
})

// 13
db.emprestimos.insertMany([
    {
        aluno: { nome: "Maria", curso: "SI" }, livro: { titulo: "Memorias Postumas" },
        dataEmprestimo: new Date("2024-06-05"), dataDevolucao: new Date("2026-06-20"), status: "emprestado"
    },
    {
        aluno: { nome: "Joao", curso: "DSM" }, livro: { titulo: "O Alienista" },
        dataEmprestimo: new Date("2024-06-10"), dataDevolucao: new Date("2026-06-25"), status: "emprestado"
    },
    {
        aluno: { nome: "Pedrinho", curso: "DSM" }, livro: { titulo: "Quincas Borba" },
        dataEmprestimo: new Date("2024-06-15"), dataDevolucao: new Date("2026-06-30"), status: "emprestado"
    }
])

// ==========================================
//           PARTE 5 - Atualizações
// ==========================================

// 14
db.livros.updateOne({ titulo: "Memorias Postumas" }, { $set: { Disponivel: false } })
// 15
db.livros.updateOne({ titulo: "Poemas" }, { $push: { categorias: "Poesia" } })
// 16
db.livros.updateOne({ titulo: "O Alienista" }, { $inc: { vezesEmprestado: 1 } })
// 17
db.livros.updateMany({ genero: "Romance" }, { $set: { destaque: true } })
// 18
db.livros.updateOne({ titulo: "Poemas" }, { $pull: { palavrasChave: "Rapido" } })


// ======================================
//           Parte 6 – Remoções
// ======================================

// 19
db.emprestimos.deleteOne({ "aluno.nome": "Joao" })
// db.emprestimos.deleteOne({ status: "emprestado" })

// 20
db.livros.deleteMany({ $or: [{ paginas: { $lt: 100 } }, { genero: "Conto" }] })