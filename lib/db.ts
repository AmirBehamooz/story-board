import { Db, MongoClient, ServerApiVersion } from "mongodb";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDB() {
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }

    const uri = process.env.MONGODB_URI as string;

    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
    });

    await client.connect();

    cachedClient = client;
    cachedDb = client.db("next-js-story-voter-app");

    return { client, db: cachedDb };
}