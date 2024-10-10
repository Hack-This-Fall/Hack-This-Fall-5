'use client';

import {
  Flex,
  Image,
  Heading,
  useBreakpointValue,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Page = () => {
  const [currentSection, setCurrentSection] = useState('HOME');
  const isXl = useBreakpointValue({ base: false, xl: true });

  const Prizes = !isXl
    ? [
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
      ]
    : [
        {
          title: '1ST RUNNER UP',
          amount: '$750',
        },
        {
          title: 'WINNER',
          amount: '$1000',
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

  return (
    <>
      <Header
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
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
          mb="6rem"
        >
          <Flex
            justifyContent={{ base: 'center', md: 'flex-start' }}
            alignItems="center"
            gap="1rem"
            maxW="100%"
          >
            <Image
              h={{ base: '3rem', md: '5rem', '2xl': '6rem' }}
              src="/images/icons/backGreenArrows.svg"
              alt="Orange Ball"
            />
            <Image
              h={{ base: '3rem', md: '5rem', '2xl': '6rem' }}
              src="/images/icons/yellowBall.svg"
              alt="Green Pill"
            />
            <Heading
              color="#282826"
              fontFamily="var(--font-roboto-condensed)"
              fontSize={{ base: '3rem', md: '5rem', '2xl': '6rem' }}
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
            <Grid w="full" templateColumns="repeat(2, 1fr)" gap="4rem">
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
                </GridItem>
              ))}
            </Grid>
          )}
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};

export default Page;
