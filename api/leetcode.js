// api/leetcode.js

export default async function handler(req, res) {
  const username = req.query.username || "its-parth";

  const query = `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
          }
        }

        userCalendar {
          activeYears
          submissionCalendar
        }
      }
    }
  `;

  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: `https://leetcode.com/${username}/`,
        Origin: "https://leetcode.com",
      },
      body: JSON.stringify({
        query,
        variables: {
          username,
        },
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch LeetCode");
    }

    const result = await response.json();

    if (!result.data?.matchedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const calendar = JSON.parse(
      result.data.matchedUser.userCalendar.submissionCalendar
    );

    const stats =
      result.data.matchedUser.submitStatsGlobal.acSubmissionNum;

    res.status(200).json({
      calendar,
      stats,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
}