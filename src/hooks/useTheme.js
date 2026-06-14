import { useEffect, useState } from "react";

const STORAGE_KEY =
  "aws-aif-theme";

export default function useTheme() {

  const [theme, setTheme] =
    useState(() => {
      return (
        localStorage.getItem(
          STORAGE_KEY
        ) || "light"
      );
    });

  useEffect(() => {

    document.documentElement.setAttribute(
      "data-theme",
      theme
    );

    localStorage.setItem(
      STORAGE_KEY,
      theme
    );

  }, [theme]);

  const toggleTheme =
    () => {
      setTheme(prev =>
        prev === "light"
          ? "dark"
          : "light"
      );
    };

  return {
    theme,
    toggleTheme
  };
}