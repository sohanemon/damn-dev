"use client";
import { CssBaseline } from "@mui/material";
import DrawerAppBar from "./Navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <DrawerAppBar />
        <CssBaseline />
        {children}
      </body>
    </html>
  );
}
