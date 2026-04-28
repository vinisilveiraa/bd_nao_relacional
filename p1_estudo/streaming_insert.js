use('streaming');

db.views.insertMany([
{
  usuario: {
    id: 1,
    nome: "Vini",
    plano: "premium",
    pais: "Brasil"
  },
  conteudo: {
    id: 101,
    titulo: "Breaking Bad",
    genero: "Drama",
    tipo: "serie"
  },
  tempoAssistido: 50,
  avaliacao: 5,
  data: new Date("2024-01-10")
},
{
  usuario: {
    id: 2,
    nome: "Ana",
    plano: "basic",
    pais: "Brasil"
  },
  conteudo: {
    id: 102,
    titulo: "Interestelar",
    genero: "Ficção",
    tipo: "filme"
  },
  tempoAssistido: 120,
  avaliacao: 5,
  data: new Date("2024-01-11")
},
{
  usuario: {
    id: 1,
    nome: "Vini",
    plano: "premium",
    pais: "Brasil"
  },
  conteudo: {
    id: 103,
    titulo: "Dark",
    genero: "Mistério",
    tipo: "serie"
  },
  tempoAssistido: 45,
  avaliacao: 4,
  data: new Date("2024-02-02")
},
{
  usuario: {
    id: 3,
    nome: "Carlos",
    plano: "premium",
    pais: "EUA"
  },
  conteudo: {
    id: 101,
    titulo: "Breaking Bad",
    genero: "Drama",
    tipo: "serie"
  },
  tempoAssistido: 60,
  avaliacao: 5,
  data: new Date("2024-02-10")
},
{
  usuario: {
    id: 4,
    nome: "Julia",
    plano: "basic",
    pais: "Brasil"
  },
  conteudo: {
    id: 104,
    titulo: "Vingadores",
    genero: "Ação",
    tipo: "filme"
  },
  tempoAssistido: 110,
  avaliacao: 4,
  data: new Date("2024-03-01")
},
{
  usuario: {
    id: 2,
    nome: "Ana",
    plano: "basic",
    pais: "Brasil"
  },
  conteudo: {
    id: 101,
    titulo: "Breaking Bad",
    genero: "Drama",
    tipo: "serie"
  },
  tempoAssistido: 55,
  avaliacao: 5,
  data: new Date("2024-03-05")
}
])