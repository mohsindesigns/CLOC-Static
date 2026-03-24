import { Montserrat } from 'next/font/google';
import './globals.css';
import ClientLayout from './ClientLayout';

export const metadata = {
  title: 'Christmas Lighting',
  description: 'Professional lighting services',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%23000' width='100' height='100'/><circle cx='50' cy='30' r='8' fill='%23FFD700'/><circle cx='30' cy='60' r='6' fill='%23FFD700'/><circle cx='70' cy='60' r='6' fill='%23FFD700'/><circle cx='50' cy='80' r='5' fill='%23FFD700'/></svg>" />
      </head>
      <body className={`${montserrat.variable} font-sans`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}