import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(uri);

export const connectToDatabase = async () => {
  await client.connect();
  return client.db('checkoutSystem');
};
