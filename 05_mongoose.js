import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
    title: { type: String, required: [true, "Title is required"], trim: true },
    price: { type: Number, required: true, min: [0, "Price cannot be negative"] },
    category: { type: String, enum: ["fiction", "tech", "other"], default: "other" },
    inStock: { type: Boolean, default: true },
    addedOn: { type: Date, default: Date.now },
});

const Book = mongoose.model("Book", bookSchema)

await mongoose.connect("mongodb://127.0.0.1:27017/mongoose_practice");
await Book.deleteMany({});

await Book.insertMany([
    { title: "Clean Code", price: 450, category: "tech", inStock: true },
    { title: "Atomic Habits", price: 300, category: "other", inStock: true },
    { title: "The Alchemist", price: 250, category: "fiction", inStock: false },
    { title: "Eloquent JavaScript", price: 500, category: "tech", inStock: true },
    { title: "Dune", price: 350, category: "fiction", inStock: true },
]);

const tech = await Book.find({ category: "tech" });
const one = await Book.findOne({ title: "Dune" });
const byId = await Book.findById(one._id);
const inStockCount = await Book.countDocuments({ inStock: true });
const cheap3 = await Book.find().sort({ price: 1 }).limit(3).select("title price -_id");
// console.log(cheap3);

// try {
//     await Book.insertOne({ title: " ", price: -10 });
// } catch (err) {
//     console.log(err.name);
//     console.log(err.message);
// }

try {
    await Book.findOneAndUpdate({ title: "Atomic Habits" }, { $inc: { price: -10 } }, { runValidators: true });
} catch (err) {
    console.log(err);
}


const deletedCount = await Book.deleteMany({ inStock: false });
console.log(deletedCount)

// console.log(await Book.find());

await mongoose.disconnect();