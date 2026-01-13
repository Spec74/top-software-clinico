import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer"; // 👈 1. FALTA ESTA IMPORTACIÓN

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mejores Software para Clínicas Dentales | Comparativa 2026",
  description: "Análisis experto de Dentalink, Clinic Cloud, Doctoralia y más. Encuentra el software ideal para gestionar tu consultorio odontológico y aumentar tus ventas.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 👇 2. CAMBIO IMPORTANTE: Cambiamos "en" por "es" para Google
    <html lang="es"> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer /> {/* 👈 3. FALTA ESTO: Aquí se inserta el pie de página */}
        <Analytics />
      </body>
    </html>
  );
}