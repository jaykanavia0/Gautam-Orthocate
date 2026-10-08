import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const monoCode = JetBrains_Mono({
  variable: "--font-mono-code",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gautamorthocare.com"),
  title: "Gautam Ortho Care | Dr. Shubham P. Shah | Arthroscopy, Joint Replacement & Sports Medicine Center Surat",
  description: "Gautam Ortho Care – Restoring Motion, Rebuilding Lives. Knee, Shoulder & Hip Care by Dr. Shubham P. Shah (MS, DNB Ortho, RNH Robotic Fellow) in Surat. Phone: +91 70168 38231.",
  keywords: [
    "Gautam Ortho Care",
    "Dr Shubham Shah",
    "knee replacement Surat",
    "shoulder arthroscopy Surat",
    "hip replacement Surat",
    "sports medicine center Surat",
    "orthopedic surgeon Pal Adajan",
    "Wood Square Surat orthocare"
  ],
  authors: [{ name: "Dr. Shubham P. Shah" }],
  openGraph: {
    title: "Gautam Ortho Care | Arthroscopy, Joint Replacement & Sports Medicine Center",
    description: "Restoring Motion, Rebuilding Lives. Specialized Knee, Shoulder & Hip Care by Dr. Shubham P. Shah in Pal, Adajan, Surat.",
    url: "https://www.gautamorthocare.com",
    siteName: "Gautam Ortho Care",
    images: [
      {
        url: "/assets/my_profile.png",
        width: 1200,
        height: 630,
        alt: "Dr. Shubham P. Shah - Gautam Ortho Care",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${monoCode.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-white text-neutral-950 font-sans selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
