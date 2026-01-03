"use client";
import { IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const ThemeToggle = ({
  mode,
  setMode,
}: {
  mode: string;
  setMode: (mode: "light" | "dark") => void;
}) => {
  return (
    <IconButton onClick={() => setMode(mode === "light" ? "dark" : "light")}>
      {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
};
export default ThemeToggle;
