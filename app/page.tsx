'use client';

import { Flex } from '@chakra-ui/react';
import HeroSection from './components/Home/HeroSection';

const Page = () => {
  return (
    <Flex background="#F9F5F2" w="100vw" h="100dvh">
      <HeroSection />
    </Flex>
  );
};

export default Page;
