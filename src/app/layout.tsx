import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
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
  title: "Krishita Haresh Ravat - Full-Stack Developer",
  description: "Passionate full-stack developer exploring MERN stack. Leading innovation at AICTE IDEALab SAKEC with expertise in React, Node.js, MongoDB, and modern web technologies.",
  keywords: ["portfolio", "full-stack developer", "React", "Node.js", "MongoDB", "MERN", "web development"],
  authors: [{ name: "Krishita Haresh Ravat" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Krishita Haresh Ravat - Full-Stack Developer",
    description: "Passionate full-stack developer exploring MERN stack. Leading innovation at AICTE IDEALab SAKEC.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishita Haresh Ravat - Full-Stack Developer",
    description: "Passionate full-stack developer exploring MERN stack. Leading innovation at AICTE IDEALab SAKEC.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
