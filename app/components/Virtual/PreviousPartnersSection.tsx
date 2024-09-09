'use client';

import { Flex, Heading, Image, Link, SimpleGrid } from '@chakra-ui/react';
import DropShadowBox from './DropShadowBox';

const PartnerDetails = [
  {
    link: 'https://appwrite.io',
    image: '/images/partners/appwrite.svg',
    bgColor: '#F9F5F2',
  },
  {
    link: 'https://github.com',
    image: '/images/partners/github.png',
    bgColor: '#F9F5F2',
  },
  {
    link: 'https://devlibrary.withgoogle.com',
    image: '/images/partners/googleDev.png',
    bgColor: '#F9F5F2',
  },
  {
    link: 'https://www.linode.com',
    image: '/images/partners/linode.png',
    bgColor: '#F9F5F2',
  },
  {
    link: 'https://www.logitech.com',
    image: '/images/partners/logitech.png',
    bgColor: '#F9F5F2',
  },
  {
    link: 'https://azure.microsoft.com',
    image: '/images/partners/azure.png',
    bgColor: '#F9F5F2',
  },
  {
    link: 'https://mlh.io',
    image: '/images/partners/mlh.png',
    bgColor: '#F9F5F2',
  },
  {
    link: 'https://www.mongodb.com',
    image: '/images/partners/mongodb.png',
    bgColor: '#F9F5F2',
  },
  {
    link: 'https://www.neurelo.com',
    image: '/images/partners/neurelo.png',
    bgColor: '#F9F5F2',
  },
  {
    link: 'https://orkes.io',
    image: '/images/partners/orkes.png',
    bgColor: '#F9F5F2',
  },
  {
    link: 'https://peerlist.io',
    image: '/images/partners/peerlist.png',
    bgColor: '#F9F5F2',
  },
  {
    link: 'https://polygon.technology',
    image: '/images/partners/polygon.png',
    bgColor: '#F9F5F2',
  },
  {
    link: 'https://www.postman.com',
    image: '/images/partners/postman.png',
    bgColor: '#F9F5F2',
  },
  {
    link: 'https://www.quicknode.com',
    image: '/images/partners/quicknode.png',
    bgColor: '#F9F5F2',
  },
  {
    link: 'https://replit.com',
    image: '/images/partners/replit.png',
    bgColor: '#F9F5F2',
  },
  {
    link: 'https://solana.com',
    image: '/images/partners/solana.png',
    bgColor: '#F9F5F2',
  },
  {
    link: 'https://www.storyblok.com',
    image: '/images/partners/storyblok.png',
    bgColor: '#F9F5F2',
  },
  {
    link: 'https://www.twilio.com',
    image: '/images/partners/twilio.png',
    bgColor: '#F9F5F2',
  },
  {
    link: 'https://www.getunleash.io',
    image: '/images/partners/unleash.png',
    bgColor: '#F9F5F2',
  },
  {
    link: 'https://www.vonage.com',
    image: '/images/partners/vonage.png',
    bgColor: '#F9F5F2',
  },
];

const PreviousPartnersSection = () => {
  return (
    <Flex
      background="#F9F5F2"
      w="full"
      className="container-1200"
      flexDir="column"
      gap="3rem"
    >
      <Flex
        justifyContent={{ base: 'center', md: 'flex-start' }}
        alignItems="center"
        gap="1rem"
        maxW="100%"
      >
        <Image
          h={{ base: '3rem', md: '5rem', '2xl': '6rem' }}
          src="/images/icons/purplePill.svg"
          alt="Purple Pill"
        />
        <Image
          h={{ base: '3rem', md: '5rem', '2xl': '6rem' }}
          src="/images/icons/orangeStar.svg"
          alt="Orange Star"
        />
        <Heading
          color="#282826"
          fontFamily="var(--font-roboto-condensed)"
          fontSize={{ base: '3rem', md: '5rem', '2xl': '6rem' }}
          fontWeight="600"
        >
          PREVIOUS PARTNERS
        </Heading>
      </Flex>
      <SimpleGrid
        templateColumns={{
          base: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
          '2xl': 'repeat(5, 1fr)',
        }}
        gap="1rem"
      >
        {PartnerDetails.map(({ image, link, bgColor }, index) => (
          <DropShadowBox key={index} w="full" aspectRatio="2">
            <Flex
              as={Link}
              href={link}
              target="_blank"
              w="full"
              h="full"
              px="1rem"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              background={bgColor}
            >
              <Image src={image} alt="sponsor" maxH="50%" aspectRatio="auto" />
            </Flex>
          </DropShadowBox>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default PreviousPartnersSection;
