import DrawerAppBar from "./Navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <DrawerAppBar />
        {children}
      </body>
    </html>
  );
}
