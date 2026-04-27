import { stories } from "@/app/stories";
import { connectToDB } from "@/lib/db";
import { NextRequest } from "next/server";

interface Params {
  id: string;
}

// type VotedStories = Record<string, string[]>;

// const votedStories: VotedStories = {
//   111: ["1", "3", "5"],
//   222: ["2", "4", "6"],
//   333: ["8", "10", "12"],
//   444: ["7", "13", "11"],
//   555: ["9", "15", "14"],
// };

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  const { db } = await connectToDB();

  const urlParams = await params;
  const userId = urlParams.id;
  // const userVotedStoryIds = votedStories[userId];

  const userVotes = await db
    .collection("user-voted-stories")
    .findOne({ userId });

  if (!userVotes) {
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const votedStoryIds = userVotes.votedStoryIds;

  const userVotedStories = await db
    .collection("my-stories")
    .find({ id: { $in: votedStoryIds } })
    .toArray();

  return new Response(JSON.stringify(userVotedStories), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

interface VoteBody {
  storyId: string;
}

export async function POST(
  request: NextRequest,
  { params }: { params: Params }
) {
  const { db } = await connectToDB();

  const urlParams = await params;
  const userId = urlParams.id;

  const body: VoteBody = await request.json();
  const storyId = body.storyId;

  const updatedVotedStoryIds = await db
    .collection("user-voted-stories")
    .findOneAndUpdate(
      { userId },
      { $addToSet: { votedStoryIds: storyId } },
      { upsert: true, returnDocument: "after" }
    );

  const userVotedStories = await db
    .collection("my-stories")
    .find({ id: { $in: updatedVotedStoryIds!.votedStoryIds } })
    .toArray();

  return new Response(JSON.stringify(userVotedStories), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

interface VotedStoryCollection {
  userId: string;
  votedStoryIds: string[];
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Params }
) {
  const { db } = await connectToDB();

  const urlParams = await params;
  const userId = urlParams.id;

  const body: VoteBody = await request.json();
  const storyId = body.storyId;

  const updatedVotedStoryIds = await db
    .collection<VotedStoryCollection>("user-voted-stories")
    .findOneAndUpdate(
      { userId },
      { $pull: { votedStoryIds: storyId } },
      { upsert: true, returnDocument: "after" }
    );

  const userVotedStories = await db
    .collection("my-stories")
    .find({ id: { $in: updatedVotedStoryIds!.votedStoryIds } })
    .toArray();

  return new Response(JSON.stringify(userVotedStories), {
    status: 202,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
