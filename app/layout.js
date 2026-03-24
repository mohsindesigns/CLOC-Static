import { Montserrat } from 'next/font/google';
import './globals.css';
import ClientLayout from './ClientLayout';

export const metadata = {
  title: 'Christmas Lighting',
  description: 'Professional lighting services',
  icons: {
    icon: {
      url: '/images/mainlogo.png?v=3',
      type: 'image/png',
      sizes: 'any',
    },
    shortcut: '/images/mainlogo.png?v=3',
    apple: {
      url: '/apple-touch-icon.png?v=3',
      type: 'image/png',
    },
  },
  openGraph: {
    title: 'Christmas Lighting',
    description: 'Professional lighting services',
    url: 'https://lightsovercolumbus.com/', // your live site URL
    images: [
      {
        url: 'https://lightsovercolumbus.com/images/mainlogo.jpg', // direct URL of logo
        width: 1200,
        height: 630,
        alt: 'Christmas Lighting',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christmas Lighting',
    description: 'Professional lighting services',
    images: ['https://lightsovercolumbus.com/images/mainlogo.jpg'],
  },
  // Optional: LinkedIn will use openGraph automatically
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}