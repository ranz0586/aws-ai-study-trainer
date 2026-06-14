import { useEffect, useState }
from "react";

const STORAGE_KEY =
  "aws-aif-progress";

const DEFAULT_PROGRESS = {
  currentDay: 1,
  completedDays: [],
  scores: {}
};

export default function useProgress() {

  const [progress,
    setProgress] =
      useState(() => {

        const saved =
          localStorage.getItem(
            STORAGE_KEY
          );

        return saved
          ? JSON.parse(saved)
          : DEFAULT_PROGRESS;

      });

  useEffect(() => {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(progress)
    );

  }, [progress]);

  const completeDay =
    day => {

      setProgress(prev => ({

        ...prev,

        currentDay:
          Math.max(
            prev.currentDay,
            day + 1
          ),

        completedDays:
          [
            ...new Set([
              ...prev.completedDays,
              day
            ])
          ]

      }));

    };

  const recordScore =
    (
      day,
      score
    ) => {

      setProgress(prev => {

        const updated = {

          ...prev,

          scores: {
            ...prev.scores,
            [day]: score
          }

        };

        if (
          score >= 70
        ) {

          updated.currentDay =
            Math.max(
              prev.currentDay,
              day + 1
            );

          updated.completedDays =
            [
              ...new Set([
                ...prev.completedDays,
                day
              ])
            ];

        }

        return updated;

      });

    };

  const resetProgress =
    () => {

      localStorage.removeItem(
        STORAGE_KEY
      );

      setProgress(
        DEFAULT_PROGRESS
      );

    };

  return {

    progress,

    completeDay,

    recordScore,

    resetProgress

  };
}