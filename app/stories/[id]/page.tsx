import NotFoundPage from "@/app/not-found";
import Image from "next/image";
import { headers } from "next/headers";
import StoryActions from "./StoryActions";

export default async function StoryDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const headersList = await headers();
  const host = headersList.get("host");

  const protocol = host?.includes("localhost") ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;

  const response = await fetch(`${baseUrl}/api/stories/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return <NotFoundPage />;
  }

  const story = await response.json();

  const votedResponse = await fetch(`${baseUrl}/api/users/666/votedStories`, {
    cache: "no-store",
  });
  const votedStories = votedResponse.ok ? await votedResponse.json() : [];
  const isVoted = votedStories.some(
    (s: { id: string }) => s.id === id
  );

  return (
    <section className="px-8 py-6 flex flex-col gap-12">
      <h1 className="font-bold text-6xl text-white">{story.name}</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <figure className="relative w-full aspect-[16/9]">
          <Image
            src={"/" + story.imageUrl}
            alt={story.name}
            fill
            className="object-contain"
          />
        </figure>
        <p className="text-xl md:self-center">{story.description}</p>
      </div>

      <StoryActions storyId={id} initialIsVoted={isVoted} />
    </section>
  );
}