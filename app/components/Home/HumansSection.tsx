'use client';

import { Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
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
    name: 'Anubhav Singh',
    image: '/images/mentors/anubhav.png',
    link: 'https://www.linkedin.com/in/xprilion/',
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
      className="container-1440-full"
      px={{ base: '1rem', md: '2rem', '2xl': '0' }}
      flexDir="column"
      gap="3rem"
      pt="10rem"
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
            borderRadius={{base: "0.5rem", lg: "1.3rem"}}
            src="/images/icons/home/sun.svg"
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
            <br /> Humans
          </Heading>
        </Flex>
        <Image
          w="max-content"
          alt="purple icon"
          maxH={{base: "3rem", lg: "5rem"}}
          pos="absolute"
          display={{ base: 'none', md: 'block' }}
          top="0"
          right={{ base: '1rem', md: '2rem' }}
          transform="translate(0, -50%)"
          justifyContent="center"
          alignItems="center"
          src="/images/icons/home/purple1.svg"
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
          {HumanDetails.map(({ image, name, link }, index) => (
            <DropShadowBox link={link} key={index} w="full" aspectRatio="0.9">
              <Image
                src={image}
                alt={name}
                w="full"
                h="full"
                objectFit="cover"
              />
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
                <Text
                  color="white"
                  fontSize={{ base: '1rem', md: '1.5rem' }}
                  fontWeight="600"
                >
                  {name}
                </Text>
              </Flex>
            </DropShadowBox>
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default HumansSection;
