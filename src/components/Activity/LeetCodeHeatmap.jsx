import { useEffect, useMemo, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

const USERNAME = "its-parth";

export default function LeetCodeHeatmap() {
  const [calendarData, setCalendarData] = useState([]);
  const [streak, setStreak] = useState(0);
  const [activeDays, setActiveDays] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const startDate = useMemo(() => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 1);
    return date;
  }, []);

  const endDate = new Date();

  useEffect(() => {
    fetchCalendar();
  }, []);

  async function fetchCalendar() {
    try {
      setLoading(true);

      const response = await fetch(
        `https://alfa-leetcode-api.onrender.com/${USERNAME}/calendar`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch LeetCode data");
      }

      const data = await response.json();

      const submissionCalendar = JSON.parse(data.submissionCalendar);

      const formatted = Object.entries(submissionCalendar).map(
        ([timestamp, count]) => ({
          date: new Date(Number(timestamp) * 1000),
          count,
        })
      );

      setCalendarData(formatted);
      setStreak(data.streak);
      setActiveDays(data.totalActiveDays);
    } catch (err) {
      console.error(err);
      setError("Unable to load LeetCode activity");
    } finally {
      setLoading(false);
    }
  }

  function getClass(value) {
    if (!value || value.count === 0) return "color-empty";

    if (value.count <= 2) return "color-scale-1";

    if (value.count <= 5) return "color-scale-2";

    if (value.count <= 10) return "color-scale-3";

    return "color-scale-4";
  }

  if (loading) {
    return (
      <div className="
        rounded-3xl
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-sm
        p-8
        transition-all
        duration-500
        hover:border-white/20
        ">
        <div className="h-6 w-48 rounded bg-slate-700 mb-6"></div>

        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 120 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded bg-slate-800"
            />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-500 p-6 text-red-400">
        {error}
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

        <div className="mb-8 flex items-center justify-between">

            <div>
            <h2 className="text-4xl font-semibold tracking-tight">
                LeetCode Activity
            </h2>

            <p className="text-sm text-slate-400 mt-1">
                Last 365 Days
            </p>
            </div>

            <a
            href={`https://leetcode.com/u/${USERNAME}/`}
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

        <div className="mt-6 overflow-x-auto">
            <div className="min-w-[980px] flex justify-center">
                <CalendarHeatmap
                    startDate={startDate}
                    endDate={endDate}
                    values={calendarData}
                    gutterSize={4}
                    showWeekdayLabels={false}
                    classForValue={getClass}
                    tooltipDataAttrs={(value) => ({
                    "data-tip": value.date
                        ? `${value.date.toDateString()} : ${value.count} submissions`
                        : "No submissions",
                    })}
                />
            </div>
        </div>

        {/* <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">

            <div className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-5
                transition-all
                duration-300
                hover:bg-white/[0.05]
                hover:border-white/20
                ">
            <p className="text-3xl font-bold text-green-400">
                {streak}
            </p>

            <p className="mt-1 text-sm text-slate-400">
                Day Streak
            </p>
            </div>

            <div className="
    rounded-2xl
    border
    border-white/10
    bg-white/[0.03]
    p-5
    transition-all
    duration-300
    hover:bg-white/[0.05]
    hover:border-white/20
    ">
            <p className="text-3xl font-bold text-blue-400">
                {activeDays}
            </p>

            <p className="mt-1 text-sm text-slate-400">
                Active Days
            </p>
            </div>

            <div className="
    rounded-2xl
    border
    border-white/10
    bg-white/[0.03]
    p-5
    transition-all
    duration-300
    hover:bg-white/[0.05]
    hover:border-white/20
    ">
            <p className="text-3xl font-bold text-purple-400">
                {calendarData.length}
            </p>

            <p className="mt-1 text-sm text-slate-400">
                Coding Days
            </p>
            </div>

            <div className="
    rounded-2xl
    border
    border-white/10
    bg-white/[0.03]
    p-5
    transition-all
    duration-300
    hover:bg-white/[0.05]
    hover:border-white/20
    ">
            <p className="text-3xl font-bold text-orange-400">
                365
            </p>

            <p className="mt-1 text-sm text-slate-400">
                Days Tracked
            </p>
            </div>

        </div> */}

        </div>
    </div>
  );
}