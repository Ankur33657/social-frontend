import { Box, Checkbox, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
const TermsAndConditions = () => {
  const theme = useTheme();
  const [checked, setChecked] = useState(true);
  const router = useRouter();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Checkbox
          defaultChecked
          onClick={() => setChecked((prev) => !prev)}
          sx={{
            color: theme.palette.common.black,
            "&.Mui-checked": {
              color: "error.main",
            },
          }}
        />
        <Typography variant="body2">
          I agree to the{" "}
          <a
            onClick={() => router.push("/terms&policy")}
            style={{
              textDecoration: "underline",
              color: theme.palette.text.primary,
            }}
          >
            Terms and Conditions
          </a>
        </Typography>
      </Box>
    </>
  );
};
export default TermsAndConditions;
