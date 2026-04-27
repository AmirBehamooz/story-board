import VotedStoriesList from "./VotedStoriesList";

export default async function VotedStoriesPage() {
  const response = await fetch(
    "http://localhost:3000/api/users/666/votedStories"
  );
  const votedStories = await response.json();

  return (
    <main className="px-8 py-6 flex flex-col gap-12">
      <h1 className="font-bold text-6xl text-white">Voted Stories</h1>
      <VotedStoriesList initialUserVotedStories={votedStories} />
    </main>
  );
}
