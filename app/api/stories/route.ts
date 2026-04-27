import { connectToDB } from "@/lib/db";

export async function GET() {
  const { db } = await connectToDB();
  const stories = await db.collection("my-stories").find({}).toArray();

  return new Response(JSON.stringify(stories), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
