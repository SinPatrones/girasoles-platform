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
  title: "Los Girasoles - Salón de Eventos para Quinceañeras | Arequipa",
  description: "Salón de eventos Los Girasoles, innovando para sorprenderte. Paquetes personalizables para quinceañeras desde S/. 6,999. Capacidad hasta 170 personas. Ubicados en Socabaya, Arequipa.",
  keywords: ["salón de eventos", "quinceañera", "Arequipa", "eventos", "fiestas", "Los Girasoles", "Socabaya"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
