// use Detran

// 1
db.createUser({
    user: "cidadao",
    pwd: "1234",
    roles: [
        "read"
    ]
});

// 2
db.createUser({
    user: "agente",
    pwd: "1234",
    roles: [
        "readWrite"
    ]
});

// 3
db.createUser({
    user: "adminGoverno",
    pwd: "admin321",
    roles: [
        "userAdmin"
    ]
});

// 4
db.getUsers();
db.getUser("cidadao");

// 5
db.changeUserPassword(
    "cidadao",
    "novaSenha456"
);

// Use PetShop

// 6 
db.createRole({
    role: "visualizadorProdutos",
    privileges: [
        {
            resource: {
                db: "PetShop",
                collection: "produtos"
            },

            actions: [
                "find",
            ]
        }
    ],
    roles: []
});

// 7
db.createUser({
    user: "balconista",
    pwd: "123",
    roles: [
        { role: "visualizadorProdutos", db: "PetShop" }
    ]
});

// 8
db.grantPrivilegesToRole(
    "visualizadorProdutos",
    [
        {
            resource: {
                db: "PetShop",
                collection: "produtos"
            },
            actions: [
                "count"
            ]
        }
    ]
);

//  9
db.revokeRolesFromUser(
  "balconista",
  [
    {
      role: "visualizadorProdutos",
      db: "PetShop"
    }
  ]
);
db.dropRole("visualizadorProdutos");

// 10 
db.createUser({
    user: "rootUser",
    pwd: "super123",
    roles: [
        { role: "root", db: "admin" }
    ]
});
