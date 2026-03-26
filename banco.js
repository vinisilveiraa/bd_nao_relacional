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