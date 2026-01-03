import { Components, Theme } from "@mui/material/styles";

export const buttonTheme = (mode: "light" | "dark"): Components<Theme> => ({
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
        borderRadius: "0.75rem",
        fontWeight: 500,
        padding: "8px 16px",
      },
      contained: {
        background: "linear-gradient(to right, #f34990, #ff7eb3)",
        boxShadow: "0 8px 24px rgba(243,73,144,0.35)",
        color: "#ffffff",
        "&:hover": {
          boxShadow: "0 12px 32px rgba(243,73,144,0.5)",
        },
      },
      outlined: {
        borderColor: "#F06292",
        color: "#F06292",
        "&:hover": {
          borderColor: "#ec407a",
          backgroundColor: "rgba(240,98,146,0.08)",
        },
      },
    },
  },
});
