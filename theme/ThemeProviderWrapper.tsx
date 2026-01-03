"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { Box } from "@mui/material";
import { useMemo, useState } from "react";
import { getTheme } from "./theme";
import ThemeToggle from "@/components/toggle-theme";
export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {children}
    </ThemeProvider>
  );
}
