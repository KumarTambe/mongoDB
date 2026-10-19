import mongoose from "mongoose";

const Author = mongoose.model("Author", new mongoose.Schema({ name: String, city: String }));
const Post = mongoose.model("Post", new mongoose.Schema({
    title: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
}));

await mongoose.connect("mongodb://127.0.0.1:27017/mongoose_practice");
await Author.deleteMany({});
await Post.deleteMany({});

const [asha, ravi] = await Author.insertMany([
    { name: "Asha", city: "Pune" },
    { name: "Ravi", city: "Delhi" },
]);
await Post.insertMany([
    { title: "Intro to Mongo", author: asha._id },
    { title: "Mongoose Tips", author: asha._id },
    { title: "Express Basics", author: ravi._id },
]);



await mongoose.disconnect();