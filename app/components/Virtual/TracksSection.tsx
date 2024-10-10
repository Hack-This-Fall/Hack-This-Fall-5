'use client';

import { Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import DropShadowBox from './DropShadowBox';

const TracksDetails = [
  {
    name: 'Generative AI & Machine Learning',
    image: '/images/tracks/genai.svg',
  },
  {
    name: 'Blockchain & Web3',
    image: '/images/tracks/web3.svg',
  },
  {
    name: 'IoT & Embedded Systems',
    image: '/images/tracks/iot.svg',
  },
  {
    name: 'Augmented/Virtual Reality',
    image: '/images/tracks/ar.svg',
  },
  {
    name: 'Cloud & DevOps',
    image: '/images/tracks/cloud.svg',
  },
  {
    name: 'Open Track: Innovate for Good',
    image: '/images/tracks/open.svg',
  },
];

const TracksSection = () => {
  return (
    <Flex
      background="#F9F5F2"
      w="full"
      className="container-1200"
      flexDir="column"
      gap="3rem"
      py="7rem"
    >
      <Flex
        justifyContent={{ base: 'center', md: 'flex-start' }}
        alignItems="center"
        gap="1rem"
        maxW="100%"
      >
        <Image
          h={{ base: '3rem', md: '5rem', '2xl': '6rem' }}
          src="/images/icons/skinStar.svg"
          alt="Skin Star"
        />
        <Image
          h={{ base: '3rem', md: '5rem', '2xl': '6rem' }}
          src="/images/icons/yellowArrows.svg"
          alt="Yellow Arrows"
        />
        <Heading
          color="#282826"
          fontFamily="var(--font-roboto-condensed)"
          fontSize={{ base: '3rem', md: '5rem', '2xl': '6rem' }}
          fontWeight="600"
        >
          TRACKS
        </Heading>
      </Flex>
      <SimpleGrid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
          '2xl': 'repeat(3, 1fr)',
        }}
        gap="1rem"
      >
        {TracksDetails.map(({ image, name }, index) => (
          <DropShadowBox key={index} w="full" aspectRatio="1.4">
            <Flex
              w="full"
              h="full"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              gap="1rem"
            >
              <Image src={image} alt={name} h="40%" />
              <Text
                pt="1rem"
                px="1rem"
                color="black"
                textAlign="center"
                fontSize="1.3rem"
                fontWeight="600"
              >
                {name}
              </Text>
            </Flex>
          </DropShadowBox>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default TracksSection;
