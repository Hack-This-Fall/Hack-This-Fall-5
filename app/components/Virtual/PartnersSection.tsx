'use client';

import { Flex, Heading, Image, Link, SimpleGrid } from '@chakra-ui/react';
import DropShadowBox from '../DropShadowBox';

const PlatinumPartners = [
  {
    title: 'PLATINUM',
    color: '#F3CEB4',
    partners: [
      {
        link: 'https://github.com',
        image: '/images/partners/github.png',
        bgColor: '#F9F5F2',
      },
      {
        link: 'https://devfolio.co',
        image: '/images/partners/devfolio.png',
        bgColor: '#F9F5F2',
      },
    ],
    columnConfig: {
      base: 'repeat(1, 18rem)',
      md: 'repeat(2, 20rem)',
      lg: 'repeat(2, 25rem)',
      '2xl': 'repeat(2, 30rem)',
    },
  },
];

const SilverAndGoldPartners = [
  {
    title: 'GOLD',
    color: '#FFC700',
    partners: [
      {
        link: 'https://peerlist.io',
        image: '/images/partners/peerlist.png',
        bgColor: '#F9F5F2',
      },
    ],
    columnConfig: {
      base: 'repeat(2, 13rem)',
      md: 'repeat(2, 15rem)',
      lg: 'repeat(3, 20rem)',
      '2xl': 'repeat(1, 25rem)',
    },
  },
  {
    title: 'SILVER',
    color: '#CCCCCC',
    partners: [
      {
        link: 'https://www.postman.com',
        image: '/images/partners/postman.png',
        bgColor: '#F9F5F2',
      },
    ],
    columnConfig: {
      base: 'repeat(2, 13rem)',
      md: 'repeat(2, 15rem)',
      lg: 'repeat(3, 20rem)',
      '2xl': 'repeat(1, 25rem)',
    },
  },
];

const HackathonPartners = [
  {
    title: 'KNOWLEDGE',
    color: '#7FBC8C',
    partners: [
      {
        link: 'https://mlh.io',
        image: '/images/partners/google.png',
        bgColor: '#F9F5F2',
      },
    ],
    columnConfig: {
      base: 'repeat(2, 13rem)',
      md: 'repeat(2, 15rem)',
      lg: 'repeat(3, 20rem)',
      '2xl': 'repeat(3, 25rem)',
    },
  },
  {
    title: 'HACKATHON',
    color: '#7FBC8C',
    partners: [
      {
        link: 'https://mlh.io',
        image: '/images/partners/mlh.png',
        bgColor: '#F9F5F2',
      },
    ],
    columnConfig: {
      base: 'repeat(2, 13rem)',
      md: 'repeat(2, 15rem)',
      lg: 'repeat(3, 20rem)',
      '2xl': 'repeat(3, 25rem)',
    },
  },
  {
    title: 'COMMUNITY',
    color: '#FFF',
    partners: [
      {
        link: 'https://hackon.tech/',
        image: '/images/partners/hackathon/hackon.svg',
        bgColor: '#F9F5F2',
      },
      {
        link: 'https://hacktheleague.com/',
        image: '/images/partners/hackathon/htl.png',
        bgColor: '#F9F5F2',
      },
      {
        link: 'https://linktr.ee/gurlscodingclub',
        image: '/images/partners/hackathon/gurls.jpg',
        bgColor: '#F9F5F2',
      },
      {
        link: 'https://startupsdilse.com/',
        image: '/images/partners/hackathon/startup.png',
        bgColor: '#F9F5F2',
      },
      {
        link: 'https://www.apexia.tech/',
        image: '/images/partners/hackathon/apexia.png',
        bgColor: '#F9F5F2',
      },
      {
        link: 'https://cityjsconf.org/',
        image: '/images/partners/hackathon/cityjs.png',
        bgColor: '#F9F5F2',
      },
      {
        link: 'https://www.linkedin.com/company/flutter-jaipur/',
        image: '/images/partners/hackathon/flutter.png',
        bgColor: '#F9F5F2',
      },
      {
        link: 'https://www.thecodebird.in/',
        image: '/images/partners/hackathon/cd.png',
        bgColor: '#F9F5F2',
      },
      {
        link: 'https://linktr.ee/learnersden',
        image: '/images/partners/hackathon/LD.svg',
        bgColor: '#F9F5F2',
      },
    ],
    columnConfig: {
      base: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
      lg: 'repeat(4, 1fr)',
      '2xl': 'repeat(5, 1fr)',
    },
  },
];

const PartnersSection = () => {
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
          src="/images/icons/purplePill.svg"
          alt="Purple Pill"
        />
        <Image
          h={{ base: '2.8rem', md: '5rem', '2xl': '6rem' }}
          src="/images/icons/orangeStar.svg"
          alt="Orange Star"
        />
        <Heading
          color="#282826"
          fontFamily="var(--font-roboto-condensed)"
          fontSize={{ base: '2.8rem', md: '5rem', '2xl': '6rem' }}
          fontWeight="600"
        >
          PARTNERS
        </Heading>
      </Flex>
      <Flex flexDir="column" gap="4rem">
        {PlatinumPartners.map(
          ({ title, color, partners, columnConfig }, index) => (
            <Flex
              gap={{ base: '2rem', md: '2rem' }}
              flexDir="column"
              key={index}
            >
              <Heading
                fontSize="1.5rem"
                boxShadow="6px 6px 0px 0px #282826"
                border="2px solid #282826"
                display="flex"
                borderRadius="full"
                w="fit-content"
                bgColor={color}
                px="1.5rem"
                py="0.5rem"
              >
                {title}
              </Heading>
              <SimpleGrid templateColumns={columnConfig} gap="2rem">
                {partners.map(({ link, image, bgColor }, index) => (
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
                        maxH="50%"
                        maxW="80%"
                        aspectRatio="auto"
                      />
                    </Flex>
                  </DropShadowBox>
                ))}
              </SimpleGrid>
            </Flex>
          ),
        )}
        <SimpleGrid
          templateColumns={{ base: '1fr', md: 'repeat(2, 37%)' }}
          gap="4rem"
        >
          {SilverAndGoldPartners.map(
            ({ title, color, partners, columnConfig }, index) => (
              <Flex
                gap={{ base: '2rem', md: '2rem' }}
                flexDir="column"
                key={index}
              >
                <Heading
                  fontSize="1.5rem"
                  boxShadow="6px 6px 0px 0px #282826"
                  border="2px solid #282826"
                  display="flex"
                  borderRadius="full"
                  w="fit-content"
                  bgColor={color}
                  px="1.5rem"
                  py="0.5rem"
                >
                  {title}
                </Heading>
                <SimpleGrid templateColumns={columnConfig} gap="1rem">
                  {partners.map(({ link, image, bgColor }, index) => (
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
                          maxH="50%"
                          maxW="80%"
                          aspectRatio="auto"
                        />
                      </Flex>
                    </DropShadowBox>
                  ))}
                </SimpleGrid>
              </Flex>
            ),
          )}
        </SimpleGrid>
        <Flex flexDir="column" gap="4rem">
          {HackathonPartners.map(
            ({ title, color, partners, columnConfig }, index) => (
              <Flex
                gap={{ base: '2rem', md: '2rem' }}
                flexDir="column"
                key={index}
              >
                <Heading
                  fontSize="1.5rem"
                  boxShadow="6px 6px 0px 0px #282826"
                  border="2px solid #282826"
                  display="flex"
                  borderRadius="full"
                  w="fit-content"
                  bgColor={color}
                  px="1.5rem"
                  py="0.5rem"
                >
                  {title}
                </Heading>
                <SimpleGrid templateColumns={columnConfig} gap="1rem">
                  {partners.map(({ link, image, bgColor }, index) => (
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
            ),
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PartnersSection;
