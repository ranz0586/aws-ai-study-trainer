import Card from "./Card";

export default function DayCard({
  day,
  title,
  phase,
  unlocked,
  onOpen
}) {
  return (
    <Card>
      <h3>
        Day {day}
      </h3>

      <h2>{title}</h2>

      <p>
        Phase:
        {" "}
        {phase}
      </p>

      {unlocked ? (
        <button
          className="primary-btn"
          onClick={onOpen}
        >
          Open
        </button>
      ) : (
        <button
          disabled
          className="secondary-btn"
        >
          Locked
        </button>
      )}
    </Card>
  );
}