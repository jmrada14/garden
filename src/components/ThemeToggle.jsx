import { useState, useEffect } from "preact/hooks";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
  useEffect(() => {
    window.localStorage.theme = theme;
    theme === "light"
      ? (document.querySelector("html").className = "")
      : (document.querySelector("html").className = "dark bg-slate-800");
  }, [theme]);
  return (
    <>
      <div>
        <div>
          <button
            aria-label="dark-mode-btn"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <span>🌞</span> : <span>🌑</span>}
          </button>
        </div>
      </div>
    </>
  );
}
