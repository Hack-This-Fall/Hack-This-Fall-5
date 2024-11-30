import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hack This Fall Hackathon | Virtual',
  description:
    'Join us from anywhere in the world and be part of this epic experience. Whether you\'re already in our global community or new to the scene, we welcome you with open arms! 🗓️ 8 - 10 NOV 2024.',
  openGraph: {
    title: 'Hack This Fall Hackathon | Virtual',
    description:
      'Join us from anywhere in the world and be part of this epic experience. Whether you\'re already in our global community or new to the scene, we welcome you with open arms! 🗓️ 8 - 10 NOV 2024.',
    siteName: 'Hack This Fall Hackathon | Virtual',
    images: [
      {
        url: 'https://hackathon.hackthisfall.tech/og.png',
        width: 2000,
        height: 1000,
        alt: 'Hack This Fall Hackathon | Virtual',
      },
    ],
  },
  twitter: {
    title: 'Hack This Fall Hackathon | Virtual',
    description:
      'Join us from anywhere in the world and be part of this epic experience. Whether you\'re already in our global community or new to the scene, we welcome you with open arms! 🗓️ 8 - 10 NOV 2024.',
    images: [
      {
        url: 'https://hackathon.hackthisfall.tech/og.png',
        width: 2000,
        height: 1000,
        alt: 'Hack This Fall Hackathon | Virtual',
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
