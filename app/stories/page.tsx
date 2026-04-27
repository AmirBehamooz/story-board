import StoriesList from "./StoriesList";

export default async function StoriesPage() {
  const response = await fetch("http://localhost:3000/api/stories");
  const stories = await response.json();

  const votedResponse = await fetch(
    "http://localhost:3000/api/users/666/votedStories",
    { cache: "no-cache" }
  );

  const votedStories = await votedResponse.json();

  return (
    <main className="px-8 py-6 flex flex-col gap-12">
      <h1 className="font-bold text-6xl text-white">Stories</h1>
      <StoriesList stories={stories} initialVotedStories={votedStories} />
    </main>
  );
}
