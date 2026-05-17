import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Delta Home Tuitions | Premier Home Tutors",
    template: "%s | Delta Home Tuitions",
  },
  description: "Expert home tutors in Noida and East Delhi. We provide personalized, high-quality home tutoring services for Classes 1-12 and competitive exams.",
  openGraph: {
    title: "Delta Home Tuitions | Premier Home Tutors",
    description: "Expert home tutors in Noida and East Delhi. Personalized, high-quality home tutoring services.",
    url: "https://www.deltahometuitions.com",
    siteName: "Delta Home Tuitions",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delta Home Tuitions | Premier Home Tutors",
    description: "Expert home tutors in Noida and East Delhi. Personalized, high-quality home tutoring services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
