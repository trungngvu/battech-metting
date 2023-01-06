import { Db, MongoClient } from 'mongodb';

const { MONGODB_URI, MONGODB_DB } = process.env;

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export const connectToDatabase = async () => {
  if (!MONGODB_URI) {
    throw new Error('Define the MONGODB_URI environmental variable');
  }

  if (!MONGODB_DB) {
    throw new Error('Define the MONGODB_DB environmental variable');
  }

  if (cachedClient && cachedDb) {
    return {
      client: cachedClient,
      db: cachedDb,
    };
  }

  const client = new MongoClient(MONGODB_URI, {});

  await client.connect();

  const db = client.db(MONGODB_DB);

  cachedClient = client;
  cachedDb = db;

  return {
    client: cachedClient,
    db: cachedDb,
  };
};
