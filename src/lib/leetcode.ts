export type LeetcodeStats = {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  ranking: number;
};

export async function fetchLeetcodeStats(username: string): Promise<LeetcodeStats | null> {
  try {
    const res = await fetch(`/api/leetcode?username=${encodeURIComponent(username)}`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
