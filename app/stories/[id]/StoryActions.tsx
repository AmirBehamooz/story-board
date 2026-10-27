"use client";

import Link from "next/link";
import { useState } from "react";

export default function StoryActions({
  storyId,
  initialIsVoted,
}: {
  storyId: string;
  initialIsVoted: boolean;
}) {
  const [isVoted, setIsVoted] = useState(initialIsVoted);

  async function voteStory() {
    const response = await fetch("/api/users/666/votedStories", {
      method: "POST",
      body: JSON.stringify({ storyId }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) setIsVoted(true);
  }

  async function unVoteStory() {
    const response = await fetch("/api/users/666/votedStories", {
      method: "DELETE",
      body: JSON.stringify({ storyId }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) setIsVoted(false);
  }

  return (
    <div className="flex gap-4 flex-wrap">
      <Link
        href="/stories"
        className="p-2 px-6 border border-quaternary rounded-sm shadow-xl/20 shadow-quaternary"
      >
        ← Back to Stories
      </Link>
      {isVoted ? (
        <button
          className="p-2 px-6 border border-quaternary rounded-sm bg-quaternary text-primary"
          onClick={unVoteStory}
        >
          Unvote Story
        </button>
      ) : (
        <button
          className="p-2 px-6 border border-quaternary rounded-sm shadow-xl/20 shadow-quaternary"
          onClick={voteStory}
        >
          Vote Story
        </button>
      )}
    </div>
  );
}
