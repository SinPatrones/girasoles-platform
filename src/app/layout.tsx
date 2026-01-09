import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
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
  title: "Los Girasoles - Salón de Eventos para todo tipo de reuniones inolvidables | Arequipa",
  description: "Salón de eventos en Arequipa con tres ambientes, capacidad hasta 170 personas y paquetes personalizables. Ideal para matrimonios, promociones, quinceaños y eventos sociales. Ubicados en Socabaya, Arequipa.",
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
