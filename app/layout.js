import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { Kanit } from "next/font/google";

const asd = Kanit({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Baran's Portfolio",
  description:
    "Baran Can Sünnetçioğlu - Front-end React Developer in Ankara, Turkey Discover the work of Baran Can Sünnetçioğlu, a skilled Front-end React Developer based in Ankara, Turkey. With over a year of experience, Baran has contributed to a range of open-source projects. Explore his portfolio, collaborate on projects, and share your ideas to foster growth and learning in the developer community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={asd.className} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
