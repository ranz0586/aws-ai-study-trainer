import { useState } from "react";

export default function Flashcard({ card }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="flashcard" onClick={() => setRevealed(!revealed)}>
      {!revealed ? (
        <div>
          <small className="flashcard-label">Question</small>

          <h3>{card.q}</h3>

          <p className="flashcard-hint">Click to reveal answer</p>
        </div>
      ) : (
        <div>
          <small
            className="
              flashcard-label
              flashcard-answer
            "
          >
            Answer
          </small>

          <h3>{card.a}</h3>

          {card.explanation && (
            <>
              <strong>Explanation</strong>

              <p>{card.explanation}</p>
            </>
          )}

          {card.example && (
            <>
              <strong>Example</strong>

              <p>{card.example}</p>
            </>
          )}

          {card.examTip && (
            <>
              <strong>Exam Tip</strong>

              <p>{card.examTip}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
