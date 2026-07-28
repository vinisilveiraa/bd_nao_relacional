// 2

/*
mongoimport --db receita_federal --collection socios --type csv --file socios_com_aspas.csv --headerline --numInsertionWorkers 2
*/

// 4

db.socios.createIndex({ nome_socio: "text" })
db.socios.find({ nome_socio:"JOSE ANTONIO" }).limit(5)

// 5
/*
mongoexport --db receita_federal --collection socios --query '{data_entrada_sociedade: {"gt": 20250101}}' --out marketing_novos_socios.json
*/

// 6 
// mongodump --db receita_federal --out ./backup_prova_final --gzip
