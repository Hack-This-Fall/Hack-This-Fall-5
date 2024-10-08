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
import moment from 'moment';
import DropShadowBox from '../../components/Virtual/DropShadowBox';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const HackathonSchedule = {
  'Day 1': [
    {
      title: 'Hacking Begins',
      StartTimeStamp: moment().subtract(10, 'minutes'),
      EndTimeStamp: moment().subtract(1, 'hour'),
    },
    {
      title: 'Speaker session 1',
      StartTimeStamp: moment().subtract(10, 'minutes'),
      EndTimeStamp: moment().add(1, 'hour'),
    },
    {
      title: 'Speaker session 1',
      StartTimeStamp: moment().add(1, 'hour'),
      EndTimeStamp: moment().add(2, 'hour'),
    },
    {
      title: 'Speaker session 1',
      StartTimeStamp: moment().add(2, 'hour'),
      EndTimeStamp: moment().add(3, 'hour'),
    },
  ],
  'Day 2': [
    {
      title: 'Speaker session 1',
      StartTimeStamp: moment().add(1, 'hour'),
      EndTimeStamp: moment().add(2, 'hour'),
    },
    {
      title: 'Speaker session 1',
      StartTimeStamp: moment().add(1, 'hour'),
      EndTimeStamp: moment().add(2, 'hour'),
    },
    {
      title: 'Speaker session 1',
      StartTimeStamp: moment().add(1, 'hour'),
      EndTimeStamp: moment().add(2, 'hour'),
    },
    {
      title: 'Speaker session 1',
      StartTimeStamp: moment().add(1, 'hour'),
      EndTimeStamp: moment().add(2, 'hour'),
    },
  ],
  'Day 3': [
    {
      title: 'Speaker session 1',
      StartTimeStamp: moment().add(1, 'hour'),
      EndTimeStamp: moment().add(2, 'hour'),
    },
    {
      title: 'Speaker session 1',
      StartTimeStamp: moment().add(1, 'hour'),
      EndTimeStamp: moment().add(2, 'hour'),
    },
    {
      title: 'Speaker session 1',
      StartTimeStamp: moment().add(1, 'hour'),
      EndTimeStamp: moment().add(2, 'hour'),
    },
    {
      title: 'Speaker session 1',
      StartTimeStamp: moment().add(1, 'hour'),
      EndTimeStamp: moment().add(2, 'hour'),
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
              HACKATHON SCHEDULE
            </Heading>
          </Flex>
          <Tabs variant="unstyled" mb="4rem">
            <TabList gap="1rem">
              {Object.keys(HackathonSchedule).map((key) => (
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
              {Object.keys(HackathonSchedule).map((key) => (
                <TabPanel p="0" key={key}>
                  <Flex flexDir="column" gap="1.5rem">
                    {HackathonSchedule[key].map((item) =>
                      moment().isAfter(item.EndTimeStamp) ? (
                        <Flex
                          opacity="0.7"
                          alignItems="center"
                          bgColor="#FFF"
                          borderRadius="1rem"
                          w="full"
                          p="1rem"
                          key={item.title}
                          gap="1rem"
                        >
                          <Heading fontWeight="800" fontSize="1.4rem">
                            {item.StartTimeStamp.format('hh:mm A')}
                          </Heading>
                          <Heading
                            color="#808080"
                            fontWeight="600"
                            fontSize="1.5rem"
                          >
                            {item.title}
                          </Heading>
                        </Flex>
                      ) : (
                        <DropShadowBox
                          aspectRatio="unset"
                          bgColor="#FFF"
                          w="full"
                          key={item.title}
                        >
                          <Flex
                            justifyContent="space-between"
                            alignItems="center"
                            p="1rem"
                            w="full"
                          >
                            <Flex alignItems="center" gap="1rem">
                              <Heading fontWeight="800" fontSize="1.4rem">
                                {item.StartTimeStamp.format('hh:mm A')}
                              </Heading>
                              <Heading
                                color="#808080"
                                fontWeight="600"
                                fontSize="1.5rem"
                              >
                                {item.title}
                              </Heading>
                            </Flex>
                            {moment().isBetween(
                              item.StartTimeStamp,
                              item.EndTimeStamp,
                            ) ? (
                              <Flex
                                w="1rem"
                                h="1rem"
                                bgColor="#1ED860"
                                rounded="full"
                              />
                            ) : item.StartTimeStamp.diff(moment(), 'minutes') <
                              60 ? (
                              <Flex
                                color="#808080"
                                rounded="full"
                                fontWeight="800"
                              >
                                Next
                              </Flex>
                            ) : null}
                          </Flex>
                        </DropShadowBox>
                      ),
                    )}
                  </Flex>
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
