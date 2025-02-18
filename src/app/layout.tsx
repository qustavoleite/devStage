import './globals.css'
import { Montserrat, Oxanium } from 'next/font/google'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevStage",
};

const oxanium = Oxanium({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font-oxanium'
})

const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR' className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className='bg-gray-900 text-gray-100 antialiased'>{children}</body>
    </html>
  )
}
