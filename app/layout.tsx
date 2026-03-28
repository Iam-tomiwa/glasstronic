import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { LenisProvider } from "@/components/providers/lenis-provider"
import { Metadata } from "next"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: {
    default:
      "Glasstronic | Precision Glass Processing & Architectural Solutions",
    template: "%s | Glasstronic",
  },
  description:
    "Glasstronic Technologies Limited delivers high-performance glass systems, combining cutting-edge technology with precision craftsmanship for modern architecture and construction.",
  keywords: [
    "glass processing",
    "architectural glass",
    "precision engineering",
    "glass manufacturing",
    "high-performance glass",
    "modern architecture",
    "custom glass solutions",
    "Glasstronic Technologies",
    "glass construction systems",
    "specialist glass products",
  ],
  authors: [{ name: "Glasstronic Technologies Limited" }],
  creator: "Glasstronic",
  publisher: "Glasstronic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Glasstronic | Precision Glass Processing",
    description:
      "Cutting-edge glass solutions for modern architecture and precision engineering.",
    siteName: "Glasstronic",
    images: [
      {
        url: "/images/cover.png",
        width: 1200,
        height: 630,
        alt: "Glasstronic Portfolio and Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glasstronic | Precision Glass Processing",
    description:
      "Cutting-edge glass solutions for modern architecture and precision engineering.",
    images: ["/images/cover.png"],
  },
  icons: {
    icon: "/images/logo-icon.svg",
    shortcut: "/images/logo-icon.svg",
    apple: "/images/logo-icon.svg",
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={spaceGrotesk.variable}>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}
