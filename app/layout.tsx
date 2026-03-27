import "./globals.css";
import type { Metadata } from "next";
import { LanguageProvider } from "./components/LanguageProvider";

export const metadata: Metadata = {
  title: "Cement Corporate Website",
  description: "Premium enterprise cement company website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
