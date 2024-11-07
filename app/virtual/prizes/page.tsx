'use client';

import {
  Flex,
  Image,
  Heading,
  useBreakpointValue,
  Link,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Tabs = [
  {
    title: 'HOME',
  },
  {
    title: 'TRACKS',
  },
  {
    title: 'PRIZES',
  },
  {
    title: 'SCHEDULE',
    link: '/virtual/schedule'
  },
  {
    title: 'PARTNERS',
  },
  {
    title: 'FAQ',
  },
];

const Prizes = [
  {
    title: 'WINNER',
    amount: '$1000',
  },
  {
    title: '1ST RUNNER UP',
    amount: '$750',
  },
  {
    title: '2ND RUNNER UP',
    amount: '$500',
  },
  {
    title: 'ALL GIRLS TEAM',
    amount: '$250',
  },
  {
    title: 'BEGINNERS TEAM',
    amount: '$250',
  },
];

const SponsoredPrizes = [
  {
    logo: '/images/partners/github.png',
    title: 'Best Use of GitHub',
    description:
      "Stand a chance to win GitHub Mona figurine or plushy in two simple steps. Sign up for GitHub Global Campus. Use a GitHub repository to host your hackathon project 's code.",
    link: 'https://bit.ly/htf24v-ge',
    bgColor: '#FFF',
    shadowColor: '#000000',
  },
  {
    logo: '/images/partners/streamlit.png',
    title: 'Best Use of Streamlit',
    description:
      'Hack with Streamlit this weekend for a chance to win an Arduino Tiny ML Kit for you and each member for your team.',
    link: 'https://hack.mlh.io/hack-this-fall-2024/prizes',
    bgColor: '#FFF',
    shadowColor: '#FF4C4B',
  },
  {
    logo: '/images/partners/mongoDbGreen.png',
    title: 'Best Use of MongoDB Atlas',
    description:
      'Build a hack using MongoDB Atlas for a chance to win a M5GO IoT Starter Kit for you and each member of your team.',
    link: 'https://hack.mlh.io/hack-this-fall-2024/prizes',
    bgColor: '#FFF',
    shadowColor: '#00694A',
  },
  {
    logo: '/images/partners/databricks.png',
    title: 'Best AI Project with Databricks Open Source',
    description:
      'Build an AI powered project utilizing Databricks Open Source projects for a chance to win Assorted Lego Sets for you and your teammates.',
    link: 'https://hack.mlh.io/hack-this-fall-2024/prizes',
    bgColor: '#FFF',
    shadowColor: '#EE3D2B',
  },
  {
    logo: '/images/partners/auth0.png',
    title: 'Best Use of Auth0',
    description:
      'Build a hack using Auth0 APIs for a chance to win a Wireless Headphones for you and each member of your team.',
    link: 'https://hack.mlh.io/hack-this-fall-2024/prizes',
    bgColor: '#FFF',
    shadowColor: '#000000',
  },
];

const Page = () => {
  const [currentSection, setCurrentSection] = useState('HOME');
  const isXl = useBreakpointValue({ base: false, xl: true });

  return (
    <>
      <Header
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
        tabs={Tabs}
        isVirtual
      />
      <Flex
        background="#F9F5F2"
        w="100vw"
        overflowX="hidden"
        minH="100dvh"
        flexDir="column"
        pt="8rem"
        pb="8rem"
      >
        <Flex
          background="#F9F5F2"
          w="full"
          className="container-1200"
          flexDir="column"
          gap="3rem"
          pt="0"
          pb="7rem"
        >
          <Flex
            justifyContent={{ base: 'center', md: 'flex-start' }}
            alignItems="center"
            gap="1rem"
            maxW="100%"
          >
            <Image
              h={{ base: '2.8rem', md: '5rem', '2xl': '6rem' }}
              src="/images/icons/orangeStar.svg"
              alt="Orange Star"
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
              PRIZES
            </Heading>
          </Flex>
          {isXl ? (
            <Flex
              w="full"
              justifyContent="center"
              flexWrap="wrap"
              columnGap="4rem"
              rowGap="6rem"
            >
              {Prizes.map((prize, index) => (
                <Flex pos="relative" key={index} w={{ base: '40%', xl: '25%' }}>
                  <Image
                    w="full"
                    h="full"
                    src="/images/prizes/container.svg"
                    alt="Prize"
                  />
                  <Heading
                    fontFamily="var(--font-roboto-condensed)"
                    fontSize={{ base: '3rem', md: '6rem' }}
                    fontWeight="800"
                    pos="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                  >
                    {prize.amount}
                  </Heading>
                  <Flex
                    fontFamily="var(--font-roboto-condensed)"
                    fontSize={{ base: '1rem', md: '1.8rem' }}
                    py="0.3rem"
                    fontWeight="800"
                    pos="absolute"
                    top="100%"
                    w="80%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    textAlign="center"
                    justifyContent="center"
                    bgColor="#FFC700"
                    rounded="full"
                    border="2px solid #282826"
                    boxShadow="2.95px 2.95px 0px 0px #000000"
                  >
                    {prize.title}
                  </Flex>
                </Flex>
              ))}
            </Flex>
          ) : (
            <Grid
              w="full"
              templateColumns="repeat(2, 1fr)"
              columnGap={{ base: '2rem', md: '4rem' }}
              rowGap={{ base: '4rem', md: '6rem' }}
            >
              {Prizes.map((prize, index) => (
                <GridItem
                  colSpan={index === 0 ? 2 : 1}
                  display="flex"
                  pos="relative"
                  key={index}
                  w={index === 0 ? 'calc((100% - 4rem)/2)' : 'full'}
                  justifySelf="center"
                >
                  <Image
                    w="full"
                    h="full"
                    src="/images/prizes/container.svg"
                    alt="Prize"
                  />
                  <Heading
                    fontFamily="var(--font-roboto-condensed)"
                    fontSize={{ base: '2.5rem', md: '6rem' }}
                    fontWeight="800"
                    pos="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                  >
                    {prize.amount}
                  </Heading>
                  <Flex
                    fontFamily="var(--font-roboto-condensed)"
                    fontSize={{ base: '0.8rem', md: '1.8rem' }}
                    py="0.3rem"
                    fontWeight="800"
                    pos="absolute"
                    top="100%"
                    w="80%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    textAlign="center"
                    justifyContent="center"
                    bgColor="#FFC700"
                    rounded="full"
                    border="2px solid #282826"
                    boxShadow="2.95px 2.95px 0px 0px #000000"
                  >
                    {prize.title}
                  </Flex>
                </GridItem>
              ))}
            </Grid>
          )}
          <Flex pt="7rem" w="full" flexDir="column">
            <Flex
              justifyContent={{ base: 'center', md: 'flex-start' }}
              alignItems="center"
              gap="1rem"
              maxW="100%"
            >
              <Image
                h={{ base: '2.8rem', md: '5rem', '2xl': '6rem' }}
                src="/images/icons/backGreenArrows.svg"
                alt="Orange Ball"
              />
              <Image
                h={{ base: '2.8rem', md: '5rem', '2xl': '6rem' }}
                src="/images/icons/yellowBall.svg"
                alt="Green Pill"
              />
              <Heading
                color="#282826"
                fontFamily="var(--font-roboto-condensed)"
                fontSize={{ base: '2.8rem', md: '5rem', '2xl': '6rem' }}
                fontWeight="600"
              >
                PARTNER PRIZES
              </Heading>
            </Flex>
            <SimpleGrid
              templateColumns={{
                base: '1fr',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
              }}
              gap="1rem"
              pt="3rem"
            >
              {SponsoredPrizes.map((prize, index) => (
                <Flex
                  as={Link}
                  href={prize.link}
                  justifyContent="space-between"
                  target="_blank"
                  gap="1.5rem"
                  key={index}
                  flexDir="column"
                  p="1.5rem"
                  borderRadius="1rem"
                  bgColor={prize.bgColor}
                  border={`1px solid ${prize.shadowColor}`}
                  boxShadow={`3px 3px 0px 0px ${prize.shadowColor}`}
                >
                  <Image src={prize.logo} alt="Prize" w="40%" />
                  <Heading
                    fontFamily="var(--font-outfit)"
                    fontSize={{ base: '1rem', md: '1.8rem' }}
                    fontWeight="800"
                  >
                    {prize.title}
                  </Heading>
                  <Text
                    fontFamily="var(--font-outfit)"
                    fontSize={{ base: '0.8rem', md: '1.4rem' }}
                  >
                    {prize.description}
                  </Text>
                </Flex>
              ))}
            </SimpleGrid>
          </Flex>
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};

export default Page;
