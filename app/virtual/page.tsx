'use client';

import { Flex } from '@chakra-ui/react';
import HeroSection from '../components/Virtual/HeroSection';
import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import TracksSection from '../components/Virtual/TracksSection';
import PartnersSection from '../components/Virtual/PartnersSection';
import FaqSection from '../components/Virtual/FaqSection';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PrizesSection from '../components/Virtual/PrizesSection';
import HumansSection from '../components/Virtual/HumansSection';

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
    link: '/virtual/schedule',
  },
  {
    title: 'PARTNERS',
  },
  {
    title: 'FAQ',
  },
];

const Page = () => {
  const [currentSection, setCurrentSection] = useState('HOME');

  return (
    <>
      <Header
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
        isVirtual
        tabs={Tabs}
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
        <InView
          style={{ width: '100%' }}
          id="HOME"
          as="div"
          threshold={0.7}
          onChange={(inView, entry) => inView && setCurrentSection('HOME')}
        >
          <HeroSection />
        </InView>
        <InView
          style={{ width: '100%' }}
          id="TRACKS"
          as="div"
          threshold={0.7}
          onChange={(inView, entry) => inView && setCurrentSection('TRACKS')}
        >
          <TracksSection />
        </InView>
        <InView
          style={{ width: '100%' }}
          id="PRIZES"
          as="div"
          threshold={0.7}
          onChange={(inView, entry) => inView && setCurrentSection('PRIZES')}
        >
          <PrizesSection pt="7rem" pb="0" />
        </InView>
        <InView
          style={{ width: '100%' }}
          id="PRIZES"
          as="div"
          threshold={0.7}
          onChange={(inView, entry) => inView && setCurrentSection('HUMANS')}
        >
          <HumansSection />
        </InView>
        <InView
          style={{ width: '100%' }}
          id="PARTNERS"
          as="div"
          threshold={0.7}
          onChange={(inView, entry) => inView && setCurrentSection('PARTNERS')}
        >
          <PartnersSection />
        </InView>
        <InView
          style={{ width: '100%' }}
          id="FAQ"
          as="div"
          threshold={0.7}
          onChange={(inView, entry) => inView && setCurrentSection('FAQ')}
        >
          <FaqSection />
        </InView>
        <Footer />
      </Flex>
    </>
  );
};

export default Page;
