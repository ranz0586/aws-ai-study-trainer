import { useEffect } from "react";

export default function ExamTimer({
  seconds,
  setSeconds
}) {
  useEffect(() => {
    const timer =
      setInterval(() => {
        setSeconds(
          (prev) => prev - 1
        );
      }, 1000);

    return () =>
      clearInterval(timer);
  }, []);

  const mins =
    Math.floor(seconds / 60);

  const secs =
    seconds % 60;

  return (
    <div
      style={{
        background: "#fee2e2",
        padding: 12,
        borderRadius: 8,
        marginBottom: 20
      }}
    >
      Time Remaining:

      {" "}

      {mins}:
      {secs
        .toString()
        .padStart(2, "0")}
    </div>
  );
}