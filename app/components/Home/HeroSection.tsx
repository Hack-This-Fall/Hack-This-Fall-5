'use client';

import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  Heading,
  Image,
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
          <Flex w="full" justifyContent="space-between" mb="2rem">
            <Heading
              color="#282826"
              fontFamily="var(--font-roboto-flex)"
              fontSize="9rem"
              fontWeight="600"
            >
              INNOVATE
            </Heading>
            <Image src="/images/icons/star.svg" alt="Star" />
            <Image src="/images/icons/pill.svg" alt="Pill" />
          </Flex>
          <Flex w="full" justifyContent="space-between" mb="5rem">
            <Image src="/images/icons/yellowPill.svg" alt="Yellow Pill" />
            <Image src="/images/icons/arrows.svg" alt="Arrows" />
            <Heading
              color="#282826"
              fontFamily="var(--font-roboto-flex)"
              fontSize="9rem"
              fontWeight="600"
            >
              FOR GOOD
            </Heading>
          </Flex>
        </>
      ) : (
        <>
          <Heading
            color="#282826"
            fontFamily="var(--font-roboto-flex)"
            fontSize={{ base: '3rem', sm: '3.5rem' }}
            fontWeight="900"
            mb="0.5rem"
          >
            INNOVATE
          </Heading>
          <Flex
            alignItems="center"
            w="95%"
            justifyContent="space-between"
            mb="0.5rem"
          >
            <Heading
              color="#282826"
              fontFamily="var(--font-roboto-flex)"
              fontSize={{ base: '3rem', sm: '3.5rem' }}
              fontWeight="900"
            >
              FOR
            </Heading>
            <Image
              h={{ base: '3rem', sm: '3.5rem' }}
              src="/images/icons/skinArrows.svg"
              alt="Star"
            />
            <Image
              h={{ base: '3rem', sm: '3.5rem' }}
              src="/images/icons/pill.svg"
              alt="Pill"
            />
          </Flex>
          <Flex
            alignItems="center"
            w="full"
            justifyContent="space-between"
            mb={{ base: '2rem', md: '5rem' }}
          >
            <Image
              h={{ base: '3rem', sm: '3.5rem' }}
              src="/images/icons/yellowPill.svg"
              alt="Yellow Pill"
            />
            <Image
              h={{ base: '3rem', sm: '3.5rem' }}
              src="/images/icons/greenStar.svg"
              alt="Arrows"
            />
            <Heading
              color="#282826"
              fontFamily="var(--font-roboto-flex)"
              fontSize={{ base: '3rem', sm: '3.5rem' }}
              fontWeight="900"
            >
              GOOD
            </Heading>
          </Flex>
        </>
      )}
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        w="full"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          color="#282826"
          fontFamily="var(--font-roboto-flex)"
          fontSize={{ base: '1.5rem', md: '2rem' }}
          textAlign={{ base: 'center', md: 'left' }}
          fontWeight="600"
          fontStyle="italic"
          mb={{ base: '4rem', md: '0' }}
          mt={{ base: '2rem', md: '0' }}
        >
          VIRTUAL HACKATHON · 8 - 10 NOV 2024
        </Text>
        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          gap={{ base: '1rem', md: '1.5rem' }}
          w={{ base: 'full', md: 'auto' }}
        >
          <Button
            color="#282826"
            fontFamily="var(--font-roboto-flex)"
            fontSize="1.5rem"
            fontWeight="600"
            bg="transparent"
            w={{ base: 'full', md: 'auto' }}
            px="2.5rem"
            py="2rem"
            borderRadius="full"
            border="2px solid #282826"
            boxShadow="2.95px 2.95px 0px 0px #000000"
            _hover={{ bg: 'transparent', boxShadow: 'none' }}
          >
            Join Discord
          </Button>
          <Button
            color="#fff"
            fontFamily="var(--font-roboto-flex)"
            fontSize="1.5rem"
            fontWeight="600"
            bg="#746BEB"
            px="2.5rem"
            py="2rem"
            w={{ base: 'full', md: 'auto' }}
            borderRadius="full"
            border="2px solid #282826"
            boxShadow="2.95px 2.95px 0px 0px #000000"
            _hover={{ bg: '#746BEB', boxShadow: 'none' }}
          >
            Pre-Register Now <ArrowForwardIcon ml="0.5rem" />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HeroSection;
