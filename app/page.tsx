'use client';

import HeroSection from './components/Home/HeroSection';
import { Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import HumansSection from './components/Home/HumansSection';
import TracksSection from './components/Home/TracksSection';
import PreviousPartnersSection from './components/Home/PreviousPartnersSection';
import Header from './components/Home/Header';
import Footer from './components/Home/Footer';
import FaqSection from './components/Home/FaqSection';

const Tabs = [
  {
    title: 'HOME',
  },
  {
    title: 'HUMANS',
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
        tabs={Tabs}
      />
      <Flex
        background="#F9F5F2"
        w="100vw"
        overflowX="hidden"
        minH="100dvh"
        flexDir="column"
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
          id="HUMANS"
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
          <PreviousPartnersSection />
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
