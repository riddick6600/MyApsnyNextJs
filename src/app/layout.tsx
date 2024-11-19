import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Моя Абхазия",
  description: "Твое путешествие в Абхазию начинается здесь",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>

      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
