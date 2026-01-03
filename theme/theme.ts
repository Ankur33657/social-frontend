import { createTheme } from "@mui/material/styles";
import { buttonTheme } from "./button";
export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,

      primary: {
        main: "#F9DFDF",
      },

      secondary: {
        main: "#F06292",
      },

      background: {
        default: mode === "light" ? "#ffffff" : "#121212",
        paper: mode === "light" ? "#f9f9f9" : "#1e1e1e",
      },

      text: {
        primary: mode === "light" ? "#393939" : "#ffffff",
        secondary: mode === "light" ? "#6b6b6b" : "#b3b3b3",
      },
    },
    components: {
      ...buttonTheme(mode),
    },
  });
