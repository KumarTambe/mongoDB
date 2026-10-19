use library

//Q.1
db.books.insertMany([{ title: "A", price: 10, inStock: true, addOn: Date.now() }, { title: "B", price: 20, inStock: false, addOn: Date.now() }, { title: "C", price: 30, inStock: true, addOn: Date.now() }])

//Q.2
db.books.insertMany([{ _id: 1, name: "A" }, { _id: 2, name: "B" }, { _id: 2, name: "C" }, { _id: 3, name: "D" }], { ordered: false })

//Q.3 
it gives an error, safer version is user.phone?.length, it checks if phone exists then proceeds else it returns undefined

// mega challenge
use college_app;

db.students.insertMany([
    {
        name: "Aarav Sharma",
        age: 20,
        branch: "Computer Science",
        skills: ["JavaScript", "MongoDB", "Python"],
        address: { city: "Mumbai" },
        enrolledOn: new Date("2025-08-15"),
        courseIds: ["CS101", "CS102"]
    },
    {
        name: "Diya Patel",
        age: 21,
        branch: "Information Technology",
        skills: ["Java", "SQL", "HTML"],
        address: { city: "Pune" },
        enrolledOn: new Date("2025-08-16"),
        courseIds: ["CS101", "CS103"]
    },
    {
        name: "Ishaan Verma",
        age: 19,
        branch: "Computer Science",
        skills: ["C++", "Data Structures"],
        address: { city: "Delhi" },
        enrolledOn: new Date("2026-01-10"),
        courseIds: ["CS102", "CS104"]
    },
    {
        name: "Ananya Rao",
        age: 22,
        branch: "Electronics",
        skills: ["Embedded C", "MATLAB"],
        address: { city: "Bangalore" },
        enrolledOn: new Date("2024-07-22"),
        courseIds: ["CS101"]
    },
    {
        name: "Kabir Singh",
        age: 20,
        branch: "Data Science",
        skills: ["Python", "R", "Machine Learning"],
        address: { city: "Hyderabad" },
        enrolledOn: new Date("2025-09-01"),
        courseIds: ["CS103", "CS104"]
    }
]);

db.courses.insertMany([
    { _id: "CS101", title: "Introduction to Computer Science", credits: 4 },
    { _id: "CS101", title: "Duplicate Course Trigger", credits: 2 }, // Duplicate _id
    { _id: "CS102", title: "Data Structures & Algorithms", credits: 4 },
    { _id: "CS103", title: "Database Management Systems", credits: 3 },
    { _id: "CS104", title: "Operating system", credits: 2 }
], { ordered: false });


//Read and find 

db.students.find({ branch: "Computer Science" }, { name: 1, branch: 1, _id: 0 })
db.students.find({ skills: "Python" }, { name: 1, age: 1, skills: 1 }).sort({ age: 1 })
db.students.findOne({ "address.city": "Delhi" })
db.studnets.findOne({ "address.city": "Kochi" }) // gives null
db.students.countDocuments({ branch: "Computer Science" })


