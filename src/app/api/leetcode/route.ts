import { NextRequest, NextResponse } from "next/server";

const QUERY = `
  query userProfile($username: String!) {
    matchedUser(username: $username) {
      username
      profile { ranking }
      submitStatsGlobal {
        acSubmissionNum { difficulty count }
      }
    }
    allQuestionsCount { difficulty count }
  }
`;

export async function GET(request: NextRequest) {
  const username = request.nextUrl.searchParams.get("username");
  if (!username) {
    return NextResponse.json({ error: "Missing username" }, { status: 400 });
  }

  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: QUERY, variables: { username } }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Upstream error" }, { status: 502 });
    }

    const { data } = await res.json();
    const user = data?.matchedUser;
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const solvedByDifficulty: Record<string, number> = {};
    for (const entry of user.submitStatsGlobal.acSubmissionNum) {
      solvedByDifficulty[entry.difficulty] = entry.count;
    }

    const totalByDifficulty: Record<string, number> = {};
    for (const entry of data.allQuestionsCount) {
      totalByDifficulty[entry.difficulty] = entry.count;
    }

    return NextResponse.json({
      totalSolved: solvedByDifficulty.All ?? 0,
      totalQuestions: totalByDifficulty.All ?? 0,
      easySolved: solvedByDifficulty.Easy ?? 0,
      totalEasy: totalByDifficulty.Easy ?? 0,
      mediumSolved: solvedByDifficulty.Medium ?? 0,
      totalMedium: totalByDifficulty.Medium ?? 0,
      hardSolved: solvedByDifficulty.Hard ?? 0,
      totalHard: totalByDifficulty.Hard ?? 0,
      ranking: user.profile?.ranking ?? 0,
    });
  } catch {
    return NextResponse.json({ error: "Fetch failed" }, { status: 500 });
  }
}
