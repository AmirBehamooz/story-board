import StoriesList from "./StoriesList";
import { headers } from "next/headers";

export default async function StoriesPage() {
  const headersList = await headers();
  const host = headersList.get("host");

  const protocol = host?.includes("localhost") ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;

  const response = await fetch(`${baseUrl}/api/stories`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return <div>Failed to load stories</div>;
  }

  const stories = await response.json();

  const votedResponse = await fetch(`${baseUrl}/api/users/666/votedStories`, {
    cache: "no-store",
  });

  if (!votedResponse.ok) {
    return <div>Failed to load voted stories</div>;
  }

  const votedStories = await votedResponse.json();

  return (
    <main className="px-8 py-6 flex flex-col gap-12">
      <h1 className="font-bold text-6xl text-white">Stories</h1>
      <StoriesList stories={stories} initialVotedStories={votedStories} />
    </main>
  );
}