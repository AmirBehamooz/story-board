import StoriesList from "./StoriesList";
import { headers } from "next/headers";

export default async function StoriesPage() {
  const headersList = await headers();
  const host = headersList.get("host");

  const baseUrl = `http://${host}`;

  const response = await fetch(`${baseUrl}/api/stories`, {
    cache: "no-store",
  });

  const stories = await response.json();

  const votedResponse = await fetch(
    `${baseUrl}/api/users/666/votedStories`,
    { cache: "no-store" }
  );

  const votedStories = await votedResponse.json();

  return (
    <main className="px-8 py-6 flex flex-col gap-12">
      <h1 className="font-bold text-6xl text-white">Stories</h1>
      <StoriesList stories={stories} initialVotedStories={votedStories} />
    </main>
  );
}