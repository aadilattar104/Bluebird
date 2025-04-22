import type React from "react"
import "@/app/globals.css"
//import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <title>Bluebird Edu - Pilot Exam Preparation</title>
        <meta name="description" content="Comprehensive mock tests and practice questions for aviation professionals" />
      </head>
      <body>
       {children}
      </body>
    </html>
  );
}
