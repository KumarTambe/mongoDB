
db.dropDatabase()

db.customers.insertMany([
    { _id: "cust1", name: "Asha", city: "Pune" },
    { _id: "cust2", name: "Ravi", city: "Delhi" },
    { _id: "cust3", name: "Meera", city: "Pune" },
    { _id: "cust4", name: "Karan", city: "Mumbai" }
])

db.orders.insertMany([
    {
        _id: "o1", customerId: "cust1", status: "delivered", total: 720,
        items: [{ product: "Pen", category: "stationery", qty: 2, price: 10 }, { product: "Bag", category: "bags", qty: 1, price: 700 }]
    },

    {
        _id: "o2", customerId: "cust2", status: "delivered", total: 150,
        items: [{ product: "Notebook", category: "stationery", qty: 3, price: 50 }]
    },
    {
        _id: "o3", customerId: "cust1", status: "cancelled", total: 50,
        items: [{ product: "Pen", category: "stationery", qty: 5, price: 10 }]
    },
    {
        _id: "o4", customerId: "cust3", status: "delivered", total: 800,
        items: [{ product: "Bag", category: "bags", qty: 1, price: 700 },
        { product: "Notebook", category: "stationery", qty: 2, price: 50 }]
    },
    {
        _id: "o5", customerId: "cust4", status: "pending", total: 100,
        items: [{ product: "Pen", category: "stationery", qty: 10, price: 10 }]
    },
    {
        _id: "o6", customerId: "cust3", status: "delivered", total: 200,
        items: [{ product: "Notebook", category: "stationery", qty: 4, price: 50 }]
    },
    {
        _id: "o7", customerId: "cust2", status: "delivered", total: 1410,
        items: [{ product: "Pen", category: "stationery", qty: 1, price: 10 },
        { product: "Bag", category: "bags", qty: 2, price: 700 }]
    },
    {
        _id: "o8", customerId: "cust1", status: "delivered", total: 50,
        items: [{ product: "Notebook", category: "stationery", qty: 1, price: 50 }]
    }
])


1.({ price: { $gte: 100, $lte: 500 } }, { category: { $in: ["tech", "fiction"] } })
2.({ createdAt: { $gt: "2026-10-05" } })
3.()
4. 