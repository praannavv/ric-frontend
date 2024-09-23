import React from "react";
import { IconButton } from "@material-tailwind/react";
import { CiLight, CiDark } from "react-icons/ci";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = React.useState(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    return savedMode || false; // Default to false if no value is saved
  });

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <IconButton
      onClick={toggleDarkMode}
      className="rounded-sm border-none p-2 bg-transparent shadow-none focus:outline-none focus:ring-0 hover:bg-transparent active:bg-transparent" // Removed focus and hover styles
      aria-label={darkMode ? "Activate Light Mode" : "Activate Dark Mode"}
    >
      {darkMode ? (
        <CiLight size={25} color="white" />
      ) : (
        <CiDark size={25} color="black" />
      )}
    </IconButton>
  );
}
