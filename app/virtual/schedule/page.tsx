'use client';

import {
  Flex,
  Image,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import moment from 'moment';
import DropShadowBox from '../../components/DropShadowBox';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const TabsData = [
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

interface ScheduleItem {
  title: string;
  startTimestamp: moment.Moment;
  endTimestamp: moment.Moment;
  platform: string;
}

interface HackathonSchedule {
  [key: string]: ScheduleItem[];
}

const HackathonSchedule: HackathonSchedule = {
  'Day 1 - November 8': [
    {
      title: 'Opening Ceremony + Ask Me Anything',
      startTimestamp: moment('2024-11-08T18:00'),
      endTimestamp: moment('2024-11-08T19:00'),
      platform: '/images/icons/platforms/youtube.png',
    },
    {
      title:
        'Elevate Your Hackathon Game with GitHub Copilot [GitHub Workshop]',
      startTimestamp: moment('2024-11-08T19:15'),
      endTimestamp: moment('2024-11-08T20:00'),
      platform: '/images/icons/platforms/youtube.png',
    },
    {
      title: 'What makes a good hackathon project [Devfolio Talk]',
      startTimestamp: moment('2024-11-08T20:15'),
      endTimestamp: moment('2024-11-08T20:45'),
      platform: '/images/icons/platforms/youtube.png',
    },
    {
      title: 'Hacking Begins',
      startTimestamp: moment('2024-11-08T21:00'),
      endTimestamp: moment('2024-11-08T21:02'),
      platform: '/images/icons/platforms/devfolio.svg',
    },
    {
      title: 'HTF Connect',
      startTimestamp: moment('2024-11-08T23:00'),
      endTimestamp: moment('2024-11-09T00:00'),
      platform: '/images/icons/platforms/discord.png',
    },
  ],
  'Day 2 - November 9': [
    {
      title: 'Mentorship Round - 1/3',
      startTimestamp: moment('2024-11-09T00:30'),
      endTimestamp: moment('2024-11-09T01:30'),
      platform: '/images/icons/platforms/discord.png',
    },
    {
      title: 'Submission Checkpoint - 1/5',
      startTimestamp: moment('2024-11-09T01:30'),
      endTimestamp: moment('2024-11-09T01:32'),
      platform: '/images/icons/platforms/devfolio.svg',
    },
    {
      title: 'Mini Event - Tetris Tournament',
      startTimestamp: moment('2024-11-09T02:30'),
      endTimestamp: moment('2024-11-09T03:30'),
      platform: '/images/icons/platforms/twitch.png',
    },
    // {
    //   title: 'Talk Slot',
    //   startTimestamp: moment('2024-11-09T10:00'),
    //   endTimestamp: moment('2024-11-09T10:45'),
    //   platform: '/images/icons/platforms/youtube.png',
    // },
    {
      title: 'Submission Checkpoint - 2/5',
      startTimestamp: moment('2024-11-09T11:00'),
      endTimestamp: moment('2024-11-09T11:02'),
      platform: '/images/icons/platforms/devfolio.svg',
    },
    {
      title: 'Mentorship Round - 2/3',
      startTimestamp: moment('2024-11-09T12:00'),
      endTimestamp: moment('2024-11-09T13:00'),
      platform: '/images/icons/platforms/discord.png',
    },
    {
      title: 'HTF Connect',
      startTimestamp: moment('2024-11-09T17:30'),
      endTimestamp: moment('2024-11-09T18:30'),
      platform: '/images/icons/platforms/discord.png',
    },
    {
      title: 'Mentorship Round - 3/3',
      startTimestamp: moment('2024-11-09T23:00'),
      endTimestamp: moment('2024-11-10T00:00'),
      platform: '/images/icons/platforms/discord.png',
    },
  ],
  'Day 3 - November 10': [
    {
      title: 'Submission Checkpoint - 3/5',
      startTimestamp: moment('2024-11-10T00:30'),
      endTimestamp: moment('2024-11-10T00:32'),
      platform: '/images/icons/platforms/devfolio.svg',
    },
    {
      title: 'Mini Event - Wikipedia Races',
      startTimestamp: moment('2024-11-10T02:30'),
      endTimestamp: moment('2024-11-10T03:30'),
      platform: '/images/icons/platforms/twitch.png',
    },
    {
      title: 'Submission Checkpoint - 4/5',
      startTimestamp: moment('2024-11-10T07:00'),
      endTimestamp: moment('2024-11-10T07:02'),
      platform: '/images/icons/platforms/devfolio.svg',
    },
    {
      title: 'Devfolio Office Hours',
      startTimestamp: moment('2024-11-10T08:00'),
      endTimestamp: moment('2024-11-10T09:00'),
      platform: '/images/icons/platforms/discord.png',
    },
    {
      title: 'Submission Checkpoint - 5/5',
      startTimestamp: moment('2024-11-10T09:00'),
      endTimestamp: moment('2024-11-10T09:02'),
      platform: '/images/icons/platforms/devfolio.svg',
    },
    {
      title: 'Project Showcase',
      startTimestamp: moment('2024-11-10T10:00'),
      endTimestamp: moment('2024-11-10T11:00'),
      platform: '/images/icons/platforms/youtube.png',
    },
    {
      title: 'Hackathon & Partner Judging',
      startTimestamp: moment('2024-11-10T11:00'),
      endTimestamp: moment('2024-11-10T16:00'),
      platform: '/images/icons/platforms/discord.png',
    },
    {
      title: 'Closing Ceremony + Winner Announcement',
      startTimestamp: moment('2024-11-10T17:00'),
      endTimestamp: moment('2024-11-10T17:30'),
      platform: '/images/icons/platforms/youtube.png',
    },
    {
      title: 'Special Announcement',
      startTimestamp: moment('2024-11-10T18:30'),
      endTimestamp: moment('2024-11-10T18:45'),
      platform: '/images/icons/platforms/youtube.png',
    },
  ],
};

const Page = () => {
  const [currentSection, setCurrentSection] = useState('SCHEDULE');

  return (
    <>
      <Header
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
        tabs={TabsData}
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
        >
          <Flex
            justifyContent={{ base: 'center', md: 'flex-start' }}
            alignItems="center"
            gap="1rem"
            maxW="100%"
          >
            <Image
              h={{ base: '2.7rem', md: '5rem', '2xl': '6rem' }}
              src="/images/icons/backGreenArrows.svg"
              alt="Orange Ball"
            />
            <Image
              h={{ base: '2.7rem', md: '5rem', '2xl': '6rem' }}
              src="/images/icons/yellowBall.svg"
              alt="Green Pill"
            />
            <Heading
              color="#282826"
              fontFamily="var(--font-roboto-condensed)"
              fontSize={{ base: '2.7rem', md: '5rem', '2xl': '6rem' }}
              fontWeight="600"
            >
              HACKATHON SCHEDULE
            </Heading>
          </Flex>
          <Tabs variant="unstyled" mb="4rem">
            <TabList flexDir={{ base: 'column', md: 'row' }} gap="1rem">
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
            <Text
              mt="1rem"
              color="#282826"
              fontSize="1rem"
              fontWeight="600"
              fontStyle="italic"
            >
              * All times displayed in India Standard Time (UTC+05:30)
            </Text>
            <TabPanels mt="2rem">
              {Object.keys(HackathonSchedule).map((key) => (
                <TabPanel p="0" key={key}>
                  <Flex flexDir="column" gap="1.5rem">
                    {HackathonSchedule[key].map((item) =>
                      moment().isAfter(item.endTimestamp) ? (
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
                          {/* <Image src={item.platform} /> */}
                          <Heading fontWeight="800" fontSize="1.4rem">
                            {item.startTimestamp.format('HH:mm')}
                          </Heading>
                          <Heading
                            color="#808080"
                            fontWeight="600"
                            fontSize={{ base: '1rem', md: '1.5rem' }}
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
                              {/* <Image src={item.platform} w="2rem" /> */}
                              <Heading fontWeight="800" fontSize="1.4rem">
                                {item.startTimestamp.format('HH:mm')}
                              </Heading>
                              <Heading
                                color="#808080"
                                fontWeight="600"
                                fontSize={{ base: '1rem', md: '1.5rem' }}
                              >
                                {item.title}
                              </Heading>
                            </Flex>
                            {moment().isBetween(
                              item.startTimestamp,
                              item.endTimestamp,
                            ) ? (
                              <Flex
                                w="1rem"
                                h="1rem"
                                bgColor="#1ED860"
                                rounded="full"
                              />
                            ) : item.startTimestamp.diff(moment(), 'minutes') <
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
