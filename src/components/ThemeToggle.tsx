"use client";

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export default function ThemeToggle({
  darkMode,
  setDarkMode,
}: ThemeToggleProps) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"} 
    </button>
  );
}
