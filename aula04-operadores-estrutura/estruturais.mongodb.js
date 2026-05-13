db.users.insertMany([
    {
        _id: 1,
        username: "joao",
        age: 24,
        active: true,
        premium: false,
        hobbies: ["reading", "soccer"],
        tasks: [{ title: "Study MongoDB", status: "pending" }]
    },

    {
        _id: 2,
        username: "maria",
        age: 30,
        active: false,
        premium: true,
        hobbies: ["cooking", "yoga"],
        tasks: [{ title: "Complete project", status: "done" }]
    },

    {
        _id: 3,
        username: "carlos",
        age: 35,
        active: true,
        premium: false,
        hobbies: ["gaming", "music"],
        tasks: [{ title: "Write report", status: "pending" }]
    }
]);


// 1
db.heroes.insertMany([
    {
        _id: 1,
        name: "Spider-Man",
        city: "New York",
        power: ["Agility", "Web-Shooting"],
        defeatedVillains: 50
    },

    {
        _id: 2,
        name: "Batman",
        city: "Gotham",
        power: ["Martial Arts", "Detective Skills"],
        defeatedVillains: 200
    },

    {
        _id: 3,
        name: "Wonder Woman",
        city: "Themyscira",
        power: ["Super Strength", "Lasso"],
        defeatedVillains: 120
    }
]);

// 2
db.menu.insertMany([
    {
        _id: 1,
        dish: "Pizza",
        ingredients: ["Dough", "Tomato Sauce", "Cheese"],
        price: 30
    },

    {
        _id: 2,
        dish: "Sushi",
        ingredients: ["Rice", "Fish", "Seaweed"],
        price: 40
    },

    {
        _id: 3,
        dish: "Taco",
        ingredients: ["Tortilla", "Beef", "Cheese"],
        price: 15
    }
]);