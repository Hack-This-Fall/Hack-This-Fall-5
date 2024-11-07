'use client';

import {
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import DropShadowBox from '../DropShadowBox';

const HumanDetails = [
  {
    name: 'Aditya',
    image: '/images/humans/aditya.png',
    link: 'https://twitter.com/adityaoberai1',
  },
  {
    name: 'Ashwin',
    image: '/images/humans/ashwin.png',
    link: 'https://twitter.com/ashwinexe',
  },
  {
    name: 'Diana',
    image: '/images/humans/diana.png',
    link: 'https://x.com/dianasoyster',
  },
  {
    name: 'Dmitry',
    image: '/images/humans/dmitry.png',
    link: 'https://twitter.com/dimidj',
  },
  {
    name: 'Eddie',
    image: '/images/humans/eddie.png',
    link: 'https://twitter.com/eddiejaoude',
  },
  {
    name: 'Karl',
    image: '/images/humans/karl.png',
    link: 'https://twitter.com/KarlLingiah',
  },
  {
    name: 'Khushboo',
    image: '/images/humans/khushboo.png',
    link: 'https://twitter.com/khushbooverma_',
  },
  {
    name: 'Santosh',
    image: '/images/humans/santosh.png',
    link: 'https://twitter.com/SantoshYadavDev',
  },
  {
    name: 'Shivay',
    image: '/images/humans/shivay.png',
    link: 'https://twitter.com/HowDevelop',
  },
  {
    name: 'Yashovardhan',
    image: '/images/humans/yashovardhan.png',
    link: 'https://twitter.com/yashovardhan',
  },
];

const HumansSection = () => {
  return (
    <Flex
      background="#F9F5F2"
      w="full"
      className="container-1200"
      flexDir="column"
      gap="3rem"
      pt="9rem"
    >
      <Flex
        justifyContent={{ base: 'center', md: 'flex-start' }}
        alignItems="center"
        gap="1rem"
        maxW="100%"
      >
        <Image
          h={{ base: '2.8rem', md: '5rem', '2xl': '6rem' }}
          src="/images/icons/orangeBall.svg"
          alt="Orange Ball"
        />
        <Image
          h={{ base: '2.8rem', md: '5rem', '2xl': '6rem' }}
          src="/images/icons/greenPill.svg"
          alt="Green Pill"
        />
        <Heading
          color="#282826"
          fontFamily="var(--font-roboto-condensed)"
          fontSize={{ base: '2.8rem', md: '5rem', '2xl': '6rem' }}
          fontWeight="600"
        >
          PREVIOUS HUMANS
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
        {HumanDetails.map(({ image, name, link }, index) => (
          <DropShadowBox link={link} key={index} w="full" aspectRatio="0.9" >
            <Image src={image} alt={name} w="full" h="full" objectFit="cover" />
            <Flex
              pos="absolute"
              w="full"
              top="50%"
              left="0"
              h="50%"
              background="linear-gradient(180.09deg, rgba(0, 0, 0, 0) 0.08%, #010101 124.07%)"
              alignItems="flex-end"
              justifyContent="center"
              pb="0.8rem"
            >
              <Text color="white" fontSize="1.5rem" fontWeight="600">
                {name}
              </Text>
            </Flex>
          </DropShadowBox>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default HumansSection;
