// Q.1 

db.books.insertOne({
    title: "ABCD",
    author: "JKL",
    price: 500,
    tags: ["horror", "adult", "naughty"],
    publisher: {
        name: "M",
        city: "Mum"
    }
})

// Q.2 

db.users.insertOne({
    firstName: "K",
    lastName: "T",
    age: 69
})

db.users.insertOne({
    firstName: "K",
    lastName: "T",
    age: 69,
    phone: 12345
})

// Q.3 

db.employees.insertOne({
    _id: 1,
    name: "Ravi",
    dept: "IT"
})

db.employees.insertOne({
    _id: 2,
    name: "Neha",
    dept: "HR"
})

// in SQL we would need to make another skills table and store it there but in mongo we can just create a nested skills field and store it there

// Mega challenge:

db.dishes.insertOne({
    name: "idli",
    price: 100,
    category: "breakfast",
    available: true,
    reviews: [{
        studentId: 2,
        rating: 4,
        comment: "none"
    }, {
        studentId: 5,
        rating: 3,
        comment: "Good"
    }]
})

db.dishes.insertOne({
    name: "vadapav",
    price: 10,
    category: "snack",
    available: true,
    reviews: [{ studentId: 1, rating: 4, comment: "Yummy" }]
})

db.dishes.insertOne({
    name: "dosa",
    price: 100,
    category: "breakfast",
    available: false,
    reviews: []
})

// yes reviews should be inside dish as it makes it easier to identify which dish the reviews and all belong to, plus it helps save space and retreval logic