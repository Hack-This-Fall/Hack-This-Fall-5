'use client';

import { Flex, Heading, Image, Link, SimpleGrid } from '@chakra-ui/react';
import DropShadowBox from '../DropShadowBox';

const PartnerDetails = [
  {
    link: 'https://appwrite.io',
    image: '/images/partners/appwrite.svg',
    bgColor: '#F9F5F2',
  },
  {
    link: 'https://auth0.com',
    image: '/images/partners/auth0.png',
    bgColor: '#F9F5F2',
  },
  {
    link: 'https://www.databricks.com',
    image: '/images/partners/databricks.png',
    bgColor: '#F9F5F2',
  },
  {
    link: 'https://devfolio.co',
    image: '/images/partners/devfolio.png',
    bgColor: '#F9F5F2',
  },
  {
    link: 'https://github.com',
    image: '/images/partners/github.png',
    bgColor: '#F9F5F2',
  },
  {
    link: 'https://developers.google.com',
    image: '/images/partners/google.png',
    bgColor: '#F9F5F2',
  },
  {
    link: 'https://devlibrary.withgoogle.com',
    image: '/images/partners/googleDev.png',
    bgColor: '#F9F5F2',
  },
  {
    link: 'https://www.logitech.com',
    image: '/images/partners/logitech.png',
    bgColor: '#F9F5F2',
  },
  {
    link: 'https://www.linode.com',
    image: '/images/partners/linode.png',
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
    link: 'https://streamlit.io',
    image: '/images/partners/streamlit.png',
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
      className="container-1440-full"
      px={{ base: '1rem', md: '2rem', '2xl': '0' }}
      flexDir="column"
      gap="3rem"
      pt="10rem"
      pb="7rem"
    >
      <Flex
        pos="relative"
        w="full"
        px={{ base: '1rem', md: '2rem' }}
        pb={{ base: '1rem', md: '2rem' }}
        pt={{ base: '4rem', md: '6rem' }}
        border="2px solid #282826"
        borderRadius="1rem"
      >
        <Flex
          p="0.6rem"
          border="2px solid #282826"
          w="max-content"
          gap="1rem"
          borderRadius="1rem"
          bgColor="#fff"
          pos="absolute"
          top="0"
          left={{ base: '1rem', md: '2rem' }}
          transform="translate(0, -50%)"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            maxH={{ base: '4rem', lg: '6.7rem' }}
            borderRadius={{ base: '0.5rem', lg: '1.3rem' }}
            src="/images/icons/home/arrows.svg"
            alt="sun"
          />
          <Heading
            fontFamily="var(--font-anton)"
            fontSize={{ base: '2rem', lg: '3.3rem' }}
            lineHeight="1.05"
            fontWeight="400"
            color="#282826"
            textTransform="uppercase"
          >
            Previous
            <br /> Partners
          </Heading>
        </Flex>
        <Image
          w="max-content"
          alt="purple icon"
          maxH={{ base: '3rem', lg: '5rem' }}
          pos="absolute"
          display={{ base: 'none', md: 'block' }}
          top="0"
          right={{ base: '1rem', md: '2rem' }}
          transform="translate(0, -50%)"
          justifyContent="center"
          alignItems="center"
          src="/images/icons/home/purple2.svg"
        />
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
                <Image
                  src={image}
                  alt="sponsor"
                  maxW="80%"
                  maxH="50%"
                  aspectRatio="auto"
                />
              </Flex>
            </DropShadowBox>
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default PreviousPartnersSection;
