"use client";
import {
  Box,
  useTheme,
  useMediaQuery,
  alpha,
  Typography,
  Button,
  Link,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";
const Welcome = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();
  return (
    <>
      {isMobile && (
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
              bottom: "1.5rem",
              left: "1.5rem",
              right: "1.5rem",
              backgroundColor: alpha(theme.palette.common.white, 0.3),
              padding: "1rem",
              borderRadius: "1.25rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme.palette.common.white,
                padding: "1rem",
                borderRadius: "1.5rem",
              }}
            >
              <Image src="/logo.jpg" alt="Logo" width={50} height={50} />
            </Box>
            <Typography sx={{ fontSize: "2.5rem", fontWeight: 600 }}>
              Amour
            </Typography>
            <Typography align="center">
              Curated connections for the modern woman.
            </Typography>
            <Button
              variant="contained"
              onClick={() => router.push("/auth/signup")}
              sx={{ width: "100%" }}
            >
              Get Started
            </Button>

            <Typography fontWeight={500}>
              Already a member?{" "}
              <Link
                href="/auth/login"
                underline="hover"
                sx={{
                  fontWeight: 600,
                  color: "blue",
                  textDecoration: "underline",
                }}
              >
                Login
              </Link>
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Welcome;
