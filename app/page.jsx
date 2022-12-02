"use client";
import { createTheme, ThemeProvider } from "@mui/material";
import { Stack } from "@mui/system";
import Hero from "./hero";
import Partners from "./partners";
import Services from "./services";
import Works from "./works";

const Page = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#111430",
        sub: "#FBD062",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={5} sx={{ alignItems: "center" }}>
        <Hero />
        <Partners />
        <Services />
        <Works />
      </Stack>
    </ThemeProvider>
  );
};

export default Page;
