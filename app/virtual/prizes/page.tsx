'use client';

import { Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PrizesSection from '../../components/Virtual/PrizesSection';

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
        <PrizesSection />
        <Footer />
      </Flex>
    </>
  );
};

export default Page;
