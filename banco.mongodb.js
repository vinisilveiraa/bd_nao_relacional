db.users.insertMany([
    {
      _id: 1,
      username: "joao",
      age: 24,
      email: "joao@gmail.com",
      active: true,
      premium: false,
      hobbies: ["reading", "soccer"],
      tasks: [{ title: "Study MongoDB", status: "pending" }]
    },
    {
      _id: 2,
      username: "maria",
      age: 30,
      email: "maria@gmail.com",
      active: false,
      premium: true,
      hobbies: ["cooking", "yoga"],
      tasks: [{ title: "Complete project", status: "done" }]
    },
    {
      _id: 3,
      username: "carlos",
      age: 35,
      email: "carlos@gmail.com",
      active: true,
      premium: false,
      hobbies: ["gaming", "music"],
      tasks: [{ title: "Write report", status: "pending" }]
    }
  ]);