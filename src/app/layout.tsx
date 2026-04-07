import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import './globals.css';
import { Header } from '../components/header/Header';

const geistSans = Nunito({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Nunito({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Codarse - Cursos de Programação Gratuitos',
  description:
    'Os melhores cursos de programação gratuitos com a melhor experiência de aprendizado e foco',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-Br"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
