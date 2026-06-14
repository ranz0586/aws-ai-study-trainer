import {
  useEffect,
  useState,
  useCallback,
  useMemo
} from "react";

const STORAGE_KEY =
  "aws-aif-exam-history";

export default function useExamHistory() {

  const [history, setHistory] =
    useState(() => {

      const saved =
        localStorage.getItem(
          STORAGE_KEY
        );

      return saved
        ? JSON.parse(saved)
        : [];

    });

  useEffect(() => {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(history)
    );

  }, [history]);

  const addAttempt =
    useCallback(
      (result) => {

        const attempt = {

          id:
            crypto.randomUUID(),

          date:
            new Date().toLocaleString(),

          ...result

        };

        setHistory(prev => [

          attempt,

          ...prev

        ]);

      },
      []
    );

  const clearHistory =
    useCallback(() => {

      localStorage.removeItem(
        STORAGE_KEY
      );

      setHistory([]);

    }, []);

  const bestScore =
    useMemo(() => {

      if (
        history.length === 0
      ) {
        return 0;
      }

      return Math.max(
        ...history.map(
          attempt =>
            attempt.score
        )
      );

    }, [history]);

  const latestScore =
    useMemo(() => {

      if (
        history.length === 0
      ) {
        return 0;
      }

      return history[0]
        ?.score || 0;

    }, [history]);

  const totalAttempts =
    useMemo(
      () =>
        history.length,
      [history]
    );

  return {

    history,

    addAttempt,

    clearHistory,

    bestScore,

    latestScore,

    totalAttempts

  };

}