import { Forum, Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";

// Importing the specific fonts with desired weights
const forum = Forum({ weight: "400", subsets: ["latin"] });
const cormorantGaramond = Cormorant_Garamond({
  weight: "500",
  subsets: ["latin"],
});
const poppins = Poppins({ weight: "300", subsets: ["latin"] });

export const metadata = {
  title: "75Hard with Friends",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorantGaramond.className} ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
