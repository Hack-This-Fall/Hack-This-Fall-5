import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Roboto_Flex, Roboto_Condensed, Outfit, Anton } from 'next/font/google';
import { Providers } from './providers';
import { SpeedInsights } from '@vercel/speed-insights/next';

const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto-flex',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const anton = Anton({
  subsets: ['latin'],
  variable: '--font-anton',
  weight: ['400'],
});

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-roboto-condensed',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Hack This Fall In-Person Hackathon 2025',
  description:
    "Join us at our in-person hackathon and be part of this epic experience. Whether you're already part of our community or new to the scene, we welcome you with open arms! 🗓️ 21 - 23 March 2025.",
  openGraph: {
    title: 'Hack This Fall In-Person Hackathon 2025',
    description:
      "Join us at our in-person hackathon and be part of this epic experience. Whether you're already part of our community or new to the scene, we welcome you with open arms! 🗓️ 21 - 23 March 2025.",
    siteName: 'Hack This Fall In-Person Hackathon 2025',
    images: [
      {
        url: 'https://hackathon.hackthisfall.tech/banner-new.png',
        width: 2000,
        height: 1000,
        alt: 'Hack This Fall In-Person Hackathon 2025',
      },
    ],
  },
  twitter: {
    title: 'Hack This Fall In-Person Hackathon 2025',
    description:
      "Join us at our in-person hackathon and be part of this epic experience. Whether you're already part of our community or new to the scene, we welcome you with open arms! 🗓️ 21 - 23 March 2025.",
    images: [
      {
        url: 'https://hackathon.hackthisfall.tech/banner-new.png',
        width: 2000,
        height: 1000,
        alt: 'Hack This Fall In-Person Hackathon 2025',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${robotoFlex.variable} ${robotoCondensed.variable} ${outfit.variable} ${anton.variable}`}
      >
        <Providers>
          {children}
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
