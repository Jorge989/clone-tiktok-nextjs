import { MongoClient } from "mongodb";

export async function openDB() {
  console.log("aquii" + process.env.MONGO_URI);
  const client = new MongoClient(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("aquii" + process.env.MONGO_URI);
  if (!client.isConnected()) await client.connect();

  return client.db("tiktokclone");
}
