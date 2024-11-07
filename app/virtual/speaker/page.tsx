'use client';

import {
  Flex,
  Image,
  Tabs,
  TabList,
  Link,
  Text,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Button,
  SimpleGrid,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import DropShadowBox from '../../components/DropShadowBox';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface TabsDataType {
  [key: string]: {
    title: string;
    speaker: string;
    Timestamp: string;
    link: string;
    speakerImage: string;
  }[];
}

const TabsDetails = [
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
    link: '/virtual/schedule',
  },
  {
    title: 'PARTNERS',
  },
  {
    title: 'FAQ',
  },
];

const TabsData: TabsDataType = {
  'Day 1': [
    {
      title: 'Speaker session 1',
      speaker: 'Hitesh Choudhary',
      Timestamp: '22 Sept 24, 9:00 PM IST',
      link: '',
      speakerImage: '/images/humans/aditya.png',
    },
    {
      title: 'Speaker session 1',
      speaker: 'Hitesh Choudhary',
      Timestamp: '22 Sept 24, 9:00 PM IST',
      link: '',
      speakerImage: '/images/humans/aditya.png',
    },
    {
      title: 'Speaker session 1',
      speaker: 'Hitesh Choudhary',
      Timestamp: '22 Sept 24, 9:00 PM IST',
      link: '',
      speakerImage: '/images/humans/aditya.png',
    },
    {
      title: 'Speaker session 1',
      speaker: 'Hitesh Choudhary',
      Timestamp: '22 Sept 24, 9:00 PM IST',
      link: '',
      speakerImage: '/images/humans/aditya.png',
    },
  ],
  'Day 2': [
    {
      title: 'Speaker session 1',
      speaker: 'Hitesh Choudhary',
      Timestamp: '22 Sept 24, 9:00 PM IST',
      link: '',
      speakerImage: '/images/humans/aditya.png',
    },
    {
      title: 'Speaker session 1',
      speaker: 'Hitesh Choudhary',
      Timestamp: '22 Sept 24, 9:00 PM IST',
      link: '',
      speakerImage: '/images/humans/aditya.png',
    },
    {
      title: 'Speaker session 1',
      speaker: 'Hitesh Choudhary',
      Timestamp: '22 Sept 24, 9:00 PM IST',
      link: '',
      speakerImage: '/images/humans/aditya.png',
    },
    {
      title: 'Speaker session 1',
      speaker: 'Hitesh Choudhary',
      Timestamp: '22 Sept 24, 9:00 PM IST',
      link: '',
      speakerImage: '/images/humans/aditya.png',
    },
  ],
  'Day 3': [
    {
      title: 'Speaker session 1',
      speaker: 'Hitesh Choudhary',
      Timestamp: '22 Sept 24, 9:00 PM IST',
      link: '',
      speakerImage: '/images/humans/aditya.png',
    },
    {
      title: 'Speaker session 1',
      speaker: 'Hitesh Choudhary',
      Timestamp: '22 Sept 24, 9:00 PM IST',
      link: '',
      speakerImage: '/images/humans/aditya.png',
    },
    {
      title: 'Speaker session 1',
      speaker: 'Hitesh Choudhary',
      Timestamp: '22 Sept 24, 9:00 PM IST',
      link: '',
      speakerImage: '/images/humans/aditya.png',
    },
    {
      title: 'Speaker session 1',
      speaker: 'Hitesh Choudhary',
      Timestamp: '22 Sept 24, 9:00 PM IST',
      link: '',
      speakerImage: '/images/humans/aditya.png',
    },
  ],
};

const Page = () => {
  const [currentSection, setCurrentSection] = useState('HOME');

  return (
    <>
      <Header
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
        isVirtual
        tabs={TabsDetails}
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
        >
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
              SPEAKER SCHEDULE
            </Heading>
          </Flex>
          <Tabs variant="unstyled" mb="4rem">
            <TabList gap="1rem">
              {Object.keys(TabsData).map((key) => (
                <Tab
                  key={key}
                  as={Button}
                  _selected={{
                    bg: '#746BEB',
                    color: '#fff',
                  }}
                  color="#282826"
                  fontFamily="var(--font-roboto-condensed)"
                  fontSize="1.5rem"
                  fontWeight="600"
                  bg="transparent"
                  px="2rem"
                  py="1.8rem"
                  w={{ base: 'full', md: 'auto' }}
                  borderRadius="full"
                  border="2px solid #282826"
                  boxShadow="2.95px 2.95px 0px 0px #000000"
                  _hover={{
                    boxShadow: 'none',
                    _selected: {
                      bg: '#746BEB',
                      color: '#fff',
                    },
                    bg: 'transparent',
                    color: '#282826',
                  }}
                >
                  {key}
                </Tab>
              ))}
            </TabList>
            <TabPanels mt="2rem">
              {Object.keys(TabsData).map((key) => (
                <TabPanel p="0" key={key}>
                  <SimpleGrid
                    templateColumns={{
                      base: 'repeat(1, 1fr)',
                      md: 'repeat(2, 1fr)',
                      lg: 'repeat(3, 1fr)',
                      '2xl': 'repeat(3, 1fr)',
                    }}
                    gap="1.5rem"
                  >
                    {TabsData[key].map((item) => (
                      <DropShadowBox aspectRatio="1.7" key={item.title}>
                        <Flex
                          pos="relative"
                          justifyContent="space-between"
                          p="1rem"
                          flexDir="column"
                          h="full"
                          w="full"
                        >
                          <Flex flexDir="column">
                            <Heading fontSize="1.5rem">{item.title}</Heading>
                            <Text mt="0.6rem" fontWeight="600" color="#808080">
                              By {item.speaker}
                            </Text>
                            <Text mt="1rem" fontWeight="600">
                              {item.Timestamp}
                            </Text>
                          </Flex>
                          <Button
                            w="40%"
                            as={Link}
                            href={item.link}
                            target="_blank"
                            color="#282826"
                            fontFamily="var(--font-roboto-condensed)"
                            fontSize="1.2rem"
                            fontWeight="600"
                            bg="transparent"
                            px="2rem"
                            py="1.6rem"
                            borderRadius="full"
                            border="2px solid #282826"
                            boxShadow="2.95px 2.95px 0px 0px #000000"
                            _hover={{
                              boxShadow: 'none',
                              bg: 'transparent',
                              color: '#282826',
                            }}
                          >
                            View Session
                          </Button>
                          <Image
                            pos="absolute"
                            bottom="1rem"
                            right="1rem"
                            rounded="full"
                            w="25%"
                            src={item.speakerImage}
                            alt="speaker"
                          />
                        </Flex>
                      </DropShadowBox>
                    ))}
                  </SimpleGrid>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};

export default Page;
