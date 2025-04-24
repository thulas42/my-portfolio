import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Thulani Zondo - Full Stack Developer',
  description: 'Expert software developer and technical leader with 5+ years of experience',
  keywords: ['Full Stack Developer', 'React', 'Angular', 'Node.js', 'Technical Lead'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
} 