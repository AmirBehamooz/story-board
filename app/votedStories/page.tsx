import StoriesList from "../stories/StoriesList";
import { headers } from "next/headers";

export default async function VotedStoriesPage() {
  const headersList = await headers();
  const host = headersList.get("host");

  const protocol = host?.includes("localhost") ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;

  const response = await fetch(
    `${baseUrl}/api/users/666/votedStories`,
    { cache: "no-store" }
  );

  const votedStories = await response.json();

  return (
    <main className="px-4 sm:px-8 py-6 flex flex-col gap-12">
      <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl text-white">Voted Stories</h1>
      <StoriesList stories={votedStories} initialVotedStories={votedStories} />
    </main>
  );
}
