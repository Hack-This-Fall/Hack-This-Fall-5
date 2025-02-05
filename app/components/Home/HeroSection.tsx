'use client';

import { Flex, Image, Link, useBreakpointValue } from '@chakra-ui/react';
import Lottie from 'lottie-react';
import animationDesktop from './animationDesktop.json';
import animationMobile from './animationMobile.json';

const HeroSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Flex
      background="#F9F5F2"
      w="full"
      className="container-1440-full"
      justifyContent="center"
      position="relative"
      alignItems="center"
      flexDir="column"
    >
      {!isMobile ? (
        <>
          <Lottie
            animationData={animationDesktop}
            loop={false}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
          <Image
            position="absolute"
            src="/images/hero/heading.svg"
            left={{ md: '2rem', '2xl': '7.5rem' }}
            w="50%"
            alt="Hero"
          />
          <Link
            pos="absolute"
            bgColor="#F9F5F2"
            bottom="5%"
            right="9.5%"
            w={{ md: '160px', lg: '210px', '2xl': '290px' }}
            aspectRatio="1"
            borderRadius="full"
            href="https://hackthisfall.devfolio.co/"
            target="_blank"
          >
            <Image
              h="100%"
              aspectRatio="1"
              borderRadius="full"
              src="/images/hero/primaryButton.svg"
              alt="Devfolio"
            />
          </Link>
          <Link
            pos="absolute"
            bgColor="#F9F5F2"
            bottom="41%"
            right="9.5%"
            w={{ md: '80px', lg: '100px', '2xl': '130px' }}
            aspectRatio="1"
            borderRadius="full"
            href="https://discord.hackthisfall.tech/"
            target="_blank"
          >
            <Image
              h="100%"
              aspectRatio="1"
              borderRadius="full"
              src="/images/hero/discordButton.svg"
              alt="Devfolio"
            />
          </Link>
        </>
      ) : (
        <>
          <Image src={'/images/hero/base-mobile.svg'} alt="Hero" w="full" />
          <Image
            position="absolute"
            src="/images/hero/heading-mobile.svg"
            top="20%"
            left={{ base: '30px' }}
            w="75%"
            alt="Hero"
          />
          <Link
            pos="absolute"
            bottom="13%"
            right="8%"
            w={{ base: '180px' }}
            aspectRatio="1"
            borderRadius="full"
            href="https://hackthisfall.devfolio.co/"
            target="_blank"
          />
          <Link
            pos="absolute"
            bottom="29%"
            left="8%"
            w={{ base: '110px' }}
            aspectRatio="1"
            borderRadius="full"
            href="https://discord.hackthisfall.tech/"
            target="_blank"
          />
        </>
      )}
    </Flex>
  );
};

export default HeroSection;
