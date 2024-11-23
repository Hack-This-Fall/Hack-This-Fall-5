import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prizes | Hack This Fall Hackathon 2024',
  description:
    "Join us from anywhere in the world and be part of this epic experience. Whether you're already in our global community or new to the scene, we welcome you with open arms! 🗓️ 8 - 10 NOV 2024.",
  openGraph: {
    title: 'Hack This Fall Hackathon 2024',
    description:
      "Join us from anywhere in the world and be part of this epic experience. Whether you're already in our global community or new to the scene, we welcome you with open arms! 🗓️ 8 - 10 NOV 2024.",
    siteName: 'Hack This Fall Virtual Hackathon 2024',
    images: [
      {
        url: 'https://hackathon.hackthisfall.tech/og.png',
        width: 2000,
        height: 1000,
        alt: 'Hack This Fall Virtual Hackathon 2024',
      },
    ],
  },
  twitter: {
    title: 'Prizes | Hack This Fall Virtual Hackathon 2024',
    description:
      "Join us from anywhere in the world and be part of this epic experience. Whether you're already in our global community or new to the scene, we welcome you with open arms! 🗓️ 8 - 10 NOV 2024.",
    images: [
      {
        url: 'https://hackathon.hackthisfall.tech/og.png',
        width: 2000,
        height: 1000,
        alt: 'Hack This Fall Virtual Hackathon 2024',
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
