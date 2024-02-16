const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017";
const dbName = "ToDoList";
const fullURI = uri + "/" + dbName;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(fullURI);
  const taskSchema = new mongoose.Schema({});
}
