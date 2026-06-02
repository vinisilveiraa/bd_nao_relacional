/***********************************************************************
 * GESTÃO DE USUÁRIOS E PERMISSÕES - MONGODB
 * Resumo Completo
 *
 * Conceitos:
 * - Autenticação: verifica quem é o usuário.
 * - Autorização: define o que o usuário pode fazer.
 * - MongoDB utiliza RBAC (Role-Based Access Control).
 ***********************************************************************/


/***********************************************************************
 * HIERARQUIA DE PERMISSÕES
 ***********************************************************************/

/*

USER
 ↓
ROLE
 ↓
PRIVILEGES
 ↓
ACTIONS

Exemplo:

joao
 ↓
leitorClientes
 ↓
find
 ↓
coleção clientes

Role = conjunto de permissões.

Um usuário pode possuir várias roles.

Exemplo:

joao
 ├─ read
 ├─ dbAdmin
 └─ userAdmin

As permissões são SOMADAS.
*/


/***********************************************************************
 * 1. CRIANDO UM USUÁRIO ADMINISTRADOR
 ***********************************************************************/

db.createUser({
  user: "adminUser",
  pwd: "Fatec@2025",
  roles: [
    { role: "userAdminAnyDatabase", db: "admin" },
    "readWriteAnyDatabase"
  ]
});

/*
OBS:
As duas formas abaixo são equivalentes:

"readWriteAnyDatabase"
{
  role: "readWriteAnyDatabase",
  db: "admin"
}

As roles globais do MongoDB normalmente ficam
armazenadas no banco admin.
*/


// Habilitar autenticação no mongod.conf
/*
security:
  authorization: enabled
*/


/***********************************************************************
 * CONEXÃO COM AUTENTICAÇÃO
 ***********************************************************************/

/* Criar admin: */
// use admin

db.createUser({
  user: "admin",
  pwd: "123456",
  roles: [
    {
      role: "root",
      db: "admin"
    }
  ]
});


/* Conectar: */
// mongosh -u admin -p 123456 --authenticationDatabase admin

/* Autenticar dentro do mongosh: */
// use admin

db.auth(
  "admin",
  "123456"
);


/***********************************************************************
 * 2. PRINCIPAIS ROLES (PERMISSÕES)
 ***********************************************************************/

/* 
read                      -> Apenas leitura 
readWrite                 -> Leitura e escrita 
dbAdmin                   -> Administração do banco 
userAdmin                 -> Gerencia usuários 
dbOwner                   -> Controle total do banco 
readAnyDatabase           -> Leitura em qualquer banco 
readWriteAnyDatabase      -> Escrita em qualquer banco 
userAdminAnyDatabase      -> Gerencia usuários em qualquer banco 

clusterAdmin              -> Administração do cluster
clusterManager            -> Configuração de cluster
clusterMonitor            -> Monitoramento
backup                    -> Realizar backups
restore                   -> Restaurar backups
root                      -> Superusuário
*/


/***********************************************************************
 * 3. CONSULTAR USUÁRIOS E ROLES
 ***********************************************************************/

// Listar usuários
db.getUsers();


// Consultar usuário específico
db.getUser("joao");


// Listar todas as roles disponíveis
db.getRoles({
  showBuiltinRoles: true
});


/***********************************************************************
 * 4. BOAS PRÁTICAS
 ***********************************************************************/

/*
✔ Utilizar o princípio do menor privilégio.

✔ Criar usuários específicos para cada função.

✔ Nunca utilizar root em aplicações.

✔ Habilitar autenticação.

✔ Utilizar TLS/SSL em produção.

✔ Utilizar roles personalizadas quando necessário.

✔ Evitar conceder permissões globais sem necessidade.
*/


/***********************************************************************
 * ROLE NATIVA x ROLE PERSONALIZADA
 ***********************************************************************/

/*
Roles nativas:

read
readWrite
dbAdmin
dbOwner
root
userAdminAnyDatabase
readWriteAnyDatabase


Roles personalizadas:

Criadas através de:

db.createRole(...)
*/


/***********************************************************************
 * O QUE É O BANCO ADMIN?
 ***********************************************************************/

/*
O banco admin é especial.

As roles globais do MongoDB ficam nele.

Exemplos:

{
  role: "root",
  db: "admin"
}

{
  role: "readWriteAnyDatabase",
  db: "admin"
}

{
  role: "userAdminAnyDatabase",
  db: "admin"
}
*/


/***********************************************************************
 * 5. CRIAR ROLE PERSONALIZADA
 ***********************************************************************/

db.createRole({
  role: "leitorClientes",

  privileges: [
    {
      resource: {
        db: "vendas",
        collection: "clientes"
      },

      actions: [
        "find"
      ]
    }
  ],

  roles: []
});


/*
role
-> Nome da role

privileges
-> Conjunto de permissões

resource
-> Onde a permissão vale

actions
-> O que pode ser feito

roles
-> Roles herdadas
*/


// Permite apenas consulta na coleção clientes


/***********************************************************************
 * ROLE HERDANDO OUTRA ROLE
 ***********************************************************************/

db.createRole({
  role: "gerenteClientes",

  privileges: [
    {
      resource: {
        db: "empresa",
        collection: "clientes"
      },

      actions: [
        "insert",
        "update"
      ]
    }
  ],

  roles: [
    {
      role: "leitorClientes",
      db: "empresa"
    }
  ]
});


/*
gerenteClientes herda:

find

e adiciona:

insert
update
*/


/***********************************************************************
 * 6. GERENCIAR ROLES PERSONALIZADAS
 ***********************************************************************/

// Mostrar todas as roles
db.getRoles({
  showBuiltinRoles: true
});


// Mostrar apenas roles criadas pelo usuário
db.getRoles({
  showBuiltinRoles: false
});


// Exibir detalhes de uma role
db.getRole(
  "leitorClientes",
  {
    showPrivileges: true
  }
);


// Remover uma role
db.dropRole("leitorClientes");


/***********************************************************************
 * 7. ATRIBUIR E REMOVER ROLES DE USUÁRIOS
 ***********************************************************************/

/*
IMPORTANTE:

Se a role foi criada no banco vendas:

use vendas

db.createRole(...)

Ao atribuí-la:

{
  role: "leitorClientes",
  db: "vendas"
}

O MongoDB precisa saber onde procurar a role.
*/


// Conceder role
db.grantRolesToUser(
  "joao",
  [
    {
      role: "leitorClientes",
      db: "vendas"
    }
  ]
);


// Revogar role
db.revokeRolesFromUser(
  "joao",
  [
    {
      role: "leitorClientes",
      db: "vendas"
    }
  ]
);


/***********************************************************************
 * 8. ADICIONAR E REMOVER PRIVILÉGIOS DE UMA ROLE
 ***********************************************************************/

// Adicionar privilégio
db.grantPrivilegesToRole(
  "leitorClientes",
  [
    {
      resource: {
        db: "meuBanco",
        collection: "clientes"
      },

      actions: [
        "count"
      ]
    }
  ]
);


// Remover privilégio
db.revokePrivilegesFromRole(
  "leitorClientes",
  [
    {
      resource: {
        db: "meuBanco",
        collection: "clientes"
      },

      actions: [
        "find"
      ]
    }
  ]
);


/***********************************************************************
 * 9. CRIAÇÃO DE USUÁRIOS
 ***********************************************************************/

// Usuário apenas leitura
db.createUser({
  user: "leitor",
  pwd: "123",

  roles: [
    {
      role: "read",
      db: "empresa"
    }
  ]
});


// Usuário CRUD
db.createUser({
  user: "operador",
  pwd: "123",

  roles: [
    {
      role: "readWrite",
      db: "empresa"
    }
  ]
});


// Administrador do banco
db.createUser({
  user: "gerente",
  pwd: "123",

  roles: [
    {
      role: "dbOwner",
      db: "empresa"
    }
  ]
});


// Super usuário
db.createUser({
  user: "rootUser",
  pwd: "123",

  roles: [
    {
      role: "root",
      db: "admin"
    }
  ]
});


/***********************************************************************
 * 10. CONSULTAR USUÁRIOS
 ***********************************************************************/

// Consultar usuário específico
db.getUser("joao");

// Consultar todos os usuários
db.getUsers();


/***********************************************************************
 * 11. ALTERAR USUÁRIOS
 ***********************************************************************/

// Alterar senha e roles
db.updateUser("joao", {
  pwd: "novaSenha456",

  roles: [
    {
      role: "read",
      db: "meuBanco"
    }
  ]
});


// Alterar apenas senha
db.changeUserPassword(
  "joao",
  "outraSenha789"
);


/***********************************************************************
 * 12. REMOVER USUÁRIOS
 ***********************************************************************/

// Remover usuário específico
db.dropUser("joao");

// Remover todos os usuários
db.dropAllUsers();


/***********************************************************************
 * RESOURCE
 ***********************************************************************/

/*
resource define onde a permissão vale.
*/

// Apenas uma coleção
// resource: {
//   db: "empresa",
//   collection: "clientes"
// }

// Todas as coleções do banco
// resource: {
//   db: "empresa",
//   collection: ""
// }

// Cluster inteiro
resource: {
  cluster: true
}


/***********************************************************************
 * ROLE COM CRUD COMPLETO
 ***********************************************************************/

db.createRole({
  role: "crudClientes",

  privileges: [
    {
      resource: {
        db: "empresa",
        collection: "clientes"
      },

      actions: [
        "find",
        "insert",
        "update",
        "remove"
      ]
    }
  ],

  roles: []
});


/***********************************************************************
 * ACTIONS MAIS IMPORTANTES
 ***********************************************************************/

/*
LEITURA
*/

"find"       // consultar documentos
"count"      // contar documentos
"collStats"  // estatísticas da coleção
"dbStats"    // estatísticas do banco


/*
ESCRITA
*/

"insert"     // inserir documentos
"update"     // atualizar documentos
"remove"     // excluir documentos


/*
COLEÇÕES
*/

"createCollection"
"dropCollection"
"renameCollectionSameDB"


/*
ÍNDICES
*/

"createIndex"
"dropIndex"


/*
ADMINISTRAÇÃO
*/

"validate"
"compact"
"collMod"


/*
CLUSTER
*/

"serverStatus"
"listDatabases"
"replSetGetStatus"


/***********************************************************************
 * COMANDOS GERAIS
 ***********************************************************************/

/*
db.createUser()
db.getUser()
db.getUsers()

db.updateUser()
db.changeUserPassword()

db.dropUser()
db.dropAllUsers()

db.createRole()
db.getRole()
db.getRoles()

db.dropRole()

db.grantRolesToUser()
db.revokeRolesFromUser()

db.grantPrivilegesToRole()
db.revokePrivilegesFromRole()

db.auth()
*/


/***********************************************************************
 * RESUMO FINAL
 ***********************************************************************/

/*

AUTENTICAÇÃO
↓
Verifica identidade do usuário


AUTORIZAÇÃO
↓
Define permissões através de roles


ROLE
↓
Conjunto de permissões


USER
↓
Recebe uma ou mais roles


PRIVILEGES
↓
Definem recursos e ações


ACTIONS
↓
Definem o que pode ser feito


ROLES MAIS IMPORTANTES

read
readWrite
dbAdmin
userAdmin
dbOwner
root

*/