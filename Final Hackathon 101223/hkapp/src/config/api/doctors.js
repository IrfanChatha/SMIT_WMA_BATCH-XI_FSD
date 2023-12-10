import { connectToDatabase } from '../mongoDB/mongodb';

export default async function handler(req, res) {
  try {
    const { db } = await connectToDatabase();
    const collection = db.collection('Doctors');
    const result = await collection.find({}).toArray();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
}
