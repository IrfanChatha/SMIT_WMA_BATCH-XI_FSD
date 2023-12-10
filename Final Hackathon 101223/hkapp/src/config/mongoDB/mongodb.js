// MongoDB connection script (mongo.js)
const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://irfanchatha:imchatha@cluster0.iybuyko.mongodb.net/'; // Replace with your connection string
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectAndFetchData() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    const database = client.db('DoctorApttSystem'); // Replace with your database name

    // Fetch collections
    const collections = await database.listCollections().toArray();
    for (const collection of collections) {
      console.log(`Collection: ${collection.name}`);
      const data = await database.collection(collection.name).find({}).toArray();
      console.log('Data:', data);
    }
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}

connectAndFetchData();
