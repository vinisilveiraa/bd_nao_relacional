use('streaming')

// 1
// Liste todas as visualizações de usuários do Brasil
db.views.find({ "usuario.pais": "Brasil" })

// Liste visualizações por pais
db.views.aggregate([
    {
        $group: {
            _id: '$usuario.pais',
            total_assistido: { $sum: '$tempoAssistido' }
        }
    }
])

// Quantas visualizações existem no total?
db.views.aggregate([
    {
        $count: "total_vizualizacoes"
    }
])


// Qual a média de avaliação geral?
db.views.aggregate([
    {
        $group: {
            _id: null,
            media_avaliacao: { $avg: "$avaliacao" }
        }
    }
])


//2
// Quantas visualizações por usuário?
db.views.aggregate([
    {
        $group: {
            _id: '$usuario.nome',
            quantia: { $sum: 1 }
        }
    }
])


// Tempo total assistido por usuário
db.views.aggregate([
    {
        $group: {
            _id: '$usuario.nome',
            total_assistido: { $sum: '$tempoAssistido' }
        }
    }
])


// Quantas visualizações por gênero
db.views.aggregate([
    {
        $group: {
            _id: '$conteudo.genero',
            quantia: { $sum: 1 }
        }
    }
])


// 3
// Média de avaliação por conteúdo
db.views.aggregate([
    {
        $group: {
            _id: '$conteudo.titulo',
            media: { $avg: '$avaliacao' }
        }
    }
])


// Top 3 conteúdos mais assistidos
db.views.aggregate([
    {
        $group: {
            _id: '$conteudo.titulo',
            total: { $sum: 1 }
        }
    },
    {
        $sort: { total: -1 }
    },
    { $limit: 3 }
])


// Tempo total assistido por país
db.views.aggregate([
    {
        $group: {
            _id: '$usuario.pais',
            total: { $sum: '$tempoAssistido' }
        }
    }
])


// 4
// Qual gênero tem maior média de avaliação?
db.views.aggregate([
    {
        $group: {
            _id: "$conteudo.genero",
            avg: {
                $avg: '$avaliacao'
            }
        }
    },
    { $sort: { avg: -1 } },
    { $limit: 1 }
])


// Ranking de usuários que mais assistem (tempo total)
db.views.aggregate([
    {
        $group: {
            _id: "$usuario.nome",
            tempo_total: {
                $sum: '$tempoAssistido'
            }
        }
    },
    { $sort: { tempo_total: -1 } },
])


// Qual mês teve mais visualizações?
db.views.aggregate([
    {
        // data: new Date("2024-02-10")
        // SE NO CAMPO TIVER COM NEW DATE NAO PRECISA DE ADDFIELDS
        $addFields: {
            dataConvertida: { $toDate: '$data' }
        }
    },
    {
        $group: {
            _id: { $month: '$dataConvertida' },
            total_views: {
                $sum: 1
            }
        }
    },
    { $sort: { total_views: -1 } },
    { $limit: 1 }
])

// 5
// Média de tempo assistido por tipo (filme vs série)
db.views.aggregate([
    {
        $group: {
            _id: '$conteudo.tipo',
            media_tempo: { $avg: '$tempoAssistido' }
        }
    }
])


// Qual plano (basic/premium) consome mais conteúdo?
db.views.aggregate([
    {
        $group: {
            _id: '$usuario.plano',
            total_consumido: { $sum: '$tempoAssistido' }
        }
    },
    { $sort: { total_consumido: -1 } },
    { $limit: 1 }
])


// Qual conteúdo tem melhor avaliação média com pelo menos 2 visualizações
db.views.aggregate([
    {
        $group: {
            _id: "$conteudo.titulo",
            media_avaliacao: { $avg: "$avaliacao" },
            total_views: { $sum: 1 }
        }
    },
    {
        $match: {
            total_views: { $gte: 2 }
        }
    },
    { $sort: { media_avaliacao: -1 } },
    { $limit: 1 }
])