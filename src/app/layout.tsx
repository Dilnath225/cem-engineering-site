import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import FloatingContact from "@/components/FloatingContact";
import "./globals.css";

export const metadata: Metadata = {
  title: "CEM Engineering (Pvt) Ltd | Civil, Electrical & Mechanical Solutions",
  description:
    "CEM Engineering (Pvt) Ltd delivers innovative civil, electrical, and mechanical engineering solutions since 2019. Specializing in construction, electrical systems, fire systems, HVAC, plumbing, and consultancy services across Sri Lanka.",
  keywords: [
    "CEM Engineering",
    "Civil Engineering Sri Lanka",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Construction Company",
    "Plumbing Services",
    "HVAC Installation",
    "Fire Systems",
    "Engineering Consultancy",
    "Kegalle",
    "Sri Lanka",
  ],
  authors: [{ name: "CEM Engineering (Pvt) Ltd" }],
  openGraph: {
    title: "CEM Engineering (Pvt) Ltd | Engineering Excellence",
    description:
      "Delivering innovative Civil, Electrical & Mechanical solutions since 2019.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <FloatingContact />
        </ThemeProvider>
      </body>
    </html>
  );
}
