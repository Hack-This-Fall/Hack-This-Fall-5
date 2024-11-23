'use client';

import { Flex, Image, Link, useBreakpointValue } from '@chakra-ui/react';

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
          <Image src={'/images/hero/base.svg'} alt="Hero" w="full" />
          <Image
            position="absolute"
            src="/images/hero/heading.svg"
            left={{ md: '2rem', '2xl': '7.5rem' }}
            w="50%"
            alt="Hero"
          />
          <Link
            pos="absolute"
            bottom="5%"
            right="8%"
            w={{ md: '150px', lg: '200px', '2xl': '275px' }}
            aspectRatio="1"
            borderRadius="full"
            target="_blank"
          />
          <Link
            pos="absolute"
            bottom="41%"
            right="8%"
            w={{ md: '70px', lg: '90px', '2xl': '120px' }}
            aspectRatio="1"
            borderRadius="full"
            href="https://discord.hackthisfall.tech/"
            target="_blank"
          />
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
