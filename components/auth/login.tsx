"use client";
import {
  Box,
  alpha,
  useTheme,
  Avatar,
  TextField,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import TermsAndConditions from "../termsandCondition";
const LoginPage = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:
          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuACKLWdTRhoIjlg1nmz-d4lqk3WeOJBJLZy9jZU1UdKjwR4ZqvMFFJ0JYo2gMn35Qt0fMZMMsRyubCS9zTlECh4hPeeCDubsN4o1ifVyPWhVU7cknnNbFjnSVo3oIH-9uQRyAvjsBQoQaMEQO1Ey0l05LdgQCy02YQiRs8pMJDC8c7c3pEjSAelSeznUyFdlUXQC-ti1PbQsUXtR-Z9-Grl551I3yK8CvNSBUEhkUfmZ9BYjTQTfPqIA2IBzYHZEc2RJ8NWAS1j-ZYh")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: "5.5rem",
          left: "1.5rem",
          right: "1.5rem",
          backgroundColor: alpha(theme.palette.common.white, 0.3),
          padding: "1rem",
          borderRadius: "1.25rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <Avatar alt="love ones" src="/love.webp" />
        <Typography fontSize={"0.75rem"} fontWeight={600}>
          Immerse yourself in the realm of romance.
        </Typography>
        <Typography fontSize={"0.75rem"} fontWeight={500} color="error.main">
          There’s no turning back once you go in.
        </Typography>
        <TextField
          fullWidth
          label="Phone Number*"
          id="phone"
          sx={{
            "& .MuiInputLabel-root": {
              color: theme.palette.common.black,
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: theme.palette.common.black,
            },
            "& .MuiOutlinedInput-root": {
              color: theme.palette.common.black,
              "& fieldset": {
                borderColor: theme.palette.common.black,
                borderRadius: "0.5rem",
              },
              "&:hover fieldset": {
                borderColor: theme.palette.common.black,
              },
              "&.Mui-focused fieldset": {
                borderColor: theme.palette.common.black,
              },
            },
          }}
        />
        <Button variant="contained" sx={{ width: "100%" }}>
          Continue
        </Button>
        <TermsAndConditions />
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Divider sx={{ flex: 1, borderColor: theme.palette.common.black }} />
          <Typography sx={{ mx: 2 }}>Or</Typography>
          <Divider sx={{ flex: 1, borderColor: theme.palette.common.black }} />
        </Box>
        <Button variant="contained" sx={{ width: "100%" }}>
          Login With Email
        </Button>
      </Box>
    </Box>
  );
};
export default LoginPage;
