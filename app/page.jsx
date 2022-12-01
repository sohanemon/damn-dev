"use client";
import { createTheme, ThemeProvider } from "@mui/material";

const Page = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FBD062",
      },
    },
  });
  return <ThemeProvider theme={theme}></ThemeProvider>;
};

export default Page;
