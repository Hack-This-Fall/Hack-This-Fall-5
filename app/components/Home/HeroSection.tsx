'use client';

import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

const HeroSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      background="#F9F5F2"
      w="full"
      h="100dvh"
      className="container-1200"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
    >
      {!isMobile ? (
        <>
          <Flex
            w="full"
            justifyContent="center"
            gap="2rem"
            alignItems="center"
            mb="2rem"
          >
            <Heading
              color="#282826"
              fontFamily="var(--font-roboto-condensed)"
              fontSize={{ md: '6rem', lg: '7rem', xl: '8rem', '2xl': '10rem' }}
              fontWeight="600"
            >
              INNOVATE
            </Heading>
            <Image
              h={{ md: '5rem', lg: '6rem', xl: '7rem', '2xl': '9rem' }}
              src="/images/icons/star.svg"
              alt="Star"
            />
            <Image
              h={{ md: '5rem', lg: '6rem', xl: '7rem', '2xl': '9rem' }}
              src="/images/icons/pill.svg"
              alt="Pill"
            />
          </Flex>
          <Flex
            w="full"
            justifyContent="center"
            gap="2rem"
            alignItems="center"
            mb="5rem"
          >
            <Image
              h={{ md: '5rem', lg: '6rem', xl: '7rem', '2xl': '9rem' }}
              src="/images/icons/yellowPill.svg"
              alt="Yellow Pill"
            />
            <Image
              h={{ md: '5rem', lg: '6rem', xl: '7rem', '2xl': '9rem' }}
              src="/images/icons/arrows.svg"
              alt="Arrows"
            />
            <Heading
              color="#282826"
              fontFamily="var(--font-roboto-condensed)"
              fontSize={{ md: '6rem', lg: '7rem', xl: '8rem', '2xl': '10rem' }}
              fontWeight="600"
            >
              FOR GOOD
            </Heading>
          </Flex>
        </>
      ) : (
        <>
          <Image src="/images/Hero.svg" alt="Hero" w="90%" mb="2rem" />
        </>
      )}
      <Flex
        flexDir={{ base: 'column', xl: 'row' }}
        w="full"
        justifyContent="space-between"
        alignItems="center"
      >
        {isMobile ? (
          <Text
            color="#282826"
            fontFamily="var(--font-roboto-condensed)"
            fontSize={{ base: '1.5rem', xl: '2rem' }}
            textAlign={{ base: 'center', xl: 'left' }}
            fontWeight="600"
            fontStyle="italic"
            textTransform="uppercase"
            mb={{ base: '4rem', xl: '0' }}
            mt={{ base: '2rem', xl: '0' }}
          >
            2025 In-Person Hackathon <br /> Coming Soon
          </Text>
        ) : (
          <Text
            color="#282826"
            fontFamily="var(--font-roboto-condensed)"
            fontSize={{ base: '1.5rem', xl: '1.7rem' }}
            textAlign={{ base: 'center', xl: 'left' }}
            fontWeight="600"
            fontStyle="italic"
            textTransform="uppercase"
            mb={{ base: '4rem', xl: '0' }}
            mt={{ base: '2rem', xl: '0' }}
          >
            2025 In-Person Hackathon • Coming Soon
          </Text>
        )}
        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          gap={{ base: '1rem', xl: '1.5rem' }}
          w={{ base: 'full', xl: 'auto' }}
        >
          <Button
            as={Link}
            href="https://discord.hackthisfall.tech"
            target="_blank"
            color="#282826"
            fontFamily="var(--font-roboto-condensed)"
            fontSize="1.5rem"
            fontWeight="600"
            bg="transparent"
            w={{ base: 'full', xl: 'auto' }}
            px="2.5rem"
            py="2rem"
            borderRadius="full"
            border="2px solid #282826"
            boxShadow="2.95px 2.95px 0px 0px #000000"
            _hover={{
              bg: 'transparent',
              boxShadow: 'none',
              textDecoration: 'none',
            }}
          >
            Join Discord
          </Button>
          <Button
            as={Link}
            href="/virtual"
            color="#fff"
            fontFamily="var(--font-roboto-condensed)"
            fontSize="1.5rem"
            fontWeight="600"
            bg="#746BEB"
            px="2.5rem"
            py="2rem"
            w={{ base: 'full', xl: 'auto' }}
            borderRadius="full"
            border="2px solid #282826"
            boxShadow="2.95px 2.95px 0px 0px #000000"
            _hover={{
              bg: '#746BEB',
              boxShadow: 'none',
              textDecoration: 'none',
            }}
          >
            Join Virtually <ArrowForwardIcon ml="0.5rem" />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HeroSection;
