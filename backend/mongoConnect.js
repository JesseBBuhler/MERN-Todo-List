const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";
const dbName = "ToDoList";

const client = new MongoClient(uri);

const myConnection = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB server");

    const db = client.db(dbName);

    const collection = db.collection(dbName);

    const insertResult = await collection.insertOne({
      task: "laundry",
      completed: false,
    });
    console.log("Inserted document with _id:", insertResult.insertedId);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    //close the connection when finished
    await client.close();
  }
};

myConnection();
