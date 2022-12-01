"use client";
import { createTheme, ThemeProvider } from "@mui/material";
import Hero from "./hero";
import Partners from "./partners";

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
      <Hero />
      <Partners />
    </ThemeProvider>
  );
};

export default Page;
