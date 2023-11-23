import "../styles/globals.css";

//components
import Header from "../components/Header";
import TrackingComponents from "../components/TrackingComponents";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <TrackingComponents />
        {children}
      </body>
    </html>
  );
}
