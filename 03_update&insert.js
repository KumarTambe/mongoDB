db.students.updateOne({ name: "Diya Patel" }, { $set: { age: 22, "address.city": "Mumbai" } })
db.students.updateMany({ branch: "Computer Science" }, { $inc: { age: 1 } })
db.students.updateOne({ name: "Diya Patel" }, { $unset: { age: "" } })        // removes the field
db.students.updateOne({ name: "Diya Patel" }, { $rename: { branch: "department" } })

db.students.updateOne({ name: "Aarav Sharma" }, { $push: { skills: "Docker" } })
db.students.updateOne({ name: "Aarav Sharma" }, { $addToSet: { skills: "Python" } })  // already there, so no change
db.students.updateOne({ name: "Aarav Sharma" }, { $pull: { skills: "Python" } })

db.students.updateOne({ name: "New Kid" }, { $set: { age: 18 } }, { upsert: true })   // inserts if missing
db.students.replaceOne({ name: "Ananya Rao" }, { name: "Ananya Rao", age: 23 })       // other fields gone

db.students.find({ age: { $lt: 18 } })           // 1) look first
db.students.deleteMany({ age: { $lt: 18 } })     // 2) then delete
db.students.deleteOne({ name: "New Kid" })


/*
// Reading referenced data means querying in steps. Write the queries:

// Find all comments on post "p1". Then write the query that finds the user who wrote the first comment.

db.comments.find({})

// Find all posts written by Asha. You know only her name, so first find her _id, then query posts.
// Two parts:
// a) Find all actors in the movie “Night Run”: first get the movie, then use $in on actors.
// b) Find all movies that actor "a2" appears in, using a single query (an array match).

*/