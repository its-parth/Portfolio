import { useEffect, useState } from "react";
import {GitHubCalendar} from "react-github-calendar";

const USERNAME = "its-parth";

export default function GitHubHeatmap() {
  const [repos, setRepos] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [loading, setLoading] = useState(true);
//   const [calendarSize, setCalendarSize] = useState({
//   blockSize: 17,
//   blockMargin: 4,
// });

// useEffect(() => {
//   function updateCalendar() {
//     if (window.innerWidth < 640) {
//       setCalendarSize({
//         blockSize: 9,
//         blockMargin: 2,
//       });
//     } else if (window.innerWidth < 768) {
//       setCalendarSize({
//         blockSize: 11,
//         blockMargin: 3,
//       });
//     } else if (window.innerWidth < 1024) {
//       setCalendarSize({
//         blockSize: 16,
//         blockMargin: 6,
//       });
//     } else {
//       setCalendarSize({
//         blockSize: 16,
//         blockMargin: 6,
//       });
//     }
//   }

//   updateCalendar();
//   window.addEventListener("resize", updateCalendar);

//   return () => window.removeEventListener("resize", updateCalendar);
// }, []);

  useEffect(() => {
    fetchGithubData();
  }, []);

  async function fetchGithubData() {
    try {
      const res = await fetch(`https://api.github.com/users/${USERNAME}`);
      const data = await res.json();

      setRepos(data.public_repos);
      setFollowers(data.followers);
      setFollowing(data.following);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div
        className="
        rounded-3xl
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-sm
        p-8
        animate-pulse
      "
      >
        <div className="h-7 w-56 rounded bg-white/10 mb-8" />

        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 120 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded bg-white/5"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 overflow-x-auto pb-2">
        <div
        className="
        rounded-3xl
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-sm
        p-8
        transition-all
        duration-500
        hover:border-white/20
        "
        >
        {/* Header */}

        <div className="flex items-center justify-between mb-8">

            <div>
            <h2 className="text-4xl font-semibold tracking-tight">
                GitHub Activity
            </h2>

            <p className="mt-1 text-sm text-neutral-400">
                Last 365 Days
            </p>
            </div>

            <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            px-5
            py-3
            transition-all
            duration-300
            hover:bg-white
            hover:text-black
            "
            >
            View Profile
            </a>

        </div>

        {/* Calendar */}

        <div className="overflow-x-auto">
            <GitHubCalendar
            username={USERNAME}
            blockSize={16}
            blockMargin={6}
            fontSize={16}
            colorScheme="dark"
            theme={{
                dark: [
                    "rgba(255,255,255,.07)", // same as LeetCode empty cell
                    "#0e4429",
                    "#006d32",
                    "#26a641",
                    "#39d353",
                ],
            }}
            />
        </div>

        {/* Stats */}

        {/* <div className="mt-10 grid grid-cols-3 gap-5">

            <div
            className="
            rounded-2xl
            border
            border-white/10
            bg-white/[0.03]
            p-5
            transition-all
            duration-300
            hover:bg-white/[0.05]
            hover:border-white/20
            "
            >
            <p className="text-3xl font-bold text-green-400">
                {repos}
            </p>

            <p className="mt-1 text-sm text-neutral-400">
                Repositories
            </p>
            </div>

            <div
            className="
            rounded-2xl
            border
            border-white/10
            bg-white/[0.03]
            p-5
            transition-all
            duration-300
            hover:bg-white/[0.05]
            hover:border-white/20
            "
            >
            <p className="text-3xl font-bold text-blue-400">
                {followers}
            </p>

            <p className="mt-1 text-sm text-neutral-400">
                Followers
            </p>
            </div>

            <div
            className="
            rounded-2xl
            border
            border-white/10
            bg-white/[0.03]
            p-5
            transition-all
            duration-300
            hover:bg-white/[0.05]
            hover:border-white/20
            "
            >
            <p className="text-3xl font-bold text-purple-400">
                {following}
            </p>

            <p className="mt-1 text-sm text-neutral-400">
                Following
            </p>
            </div>

        </div> */}
        </div>
    </div>
  );
}