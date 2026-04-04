import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";

export const metadata: Metadata = {
  title: "Contact Manager",
  description: "A simple contact management application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en">
      <body>
        <div className="min-h-screen bg-gray-300 text-black">
          <Navbar />
          <main className="container max-auto px-25 py-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
