export default function LessonCard({
  lesson
}) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: 16,
        marginBottom: 12
      }}
    >
      <h3>{lesson.title}</h3>

      <p>
        <strong>Definition:</strong>{" "}
        {lesson.definition}
      </p>

      <ul>
        {lesson.examples.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>

      <p>
        <strong>AWS Tip:</strong>{" "}
        {lesson.awsTip}
      </p>
    </div>
  );
}