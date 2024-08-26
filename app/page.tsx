"use client";

import { Flex } from "@chakra-ui/react";
import HeroSection from "./components/Home/HeroSection";
import HumansSection from "./components/Home/HumansSection";
import TracksSection from "./components/Home/TracksSection";
import PreviousPartnersSection from "./components/Home/PreviousPartnersSection";
import FaqSection from "./components/Home/FaqSection";

const Page = () => {
  return (
    <Flex
      background="#F9F5F2"
      w="100vw"
      overflowX="hidden"
      minH="100dvh"
      flexDir="column"
      gap="7rem"
      py="8rem"
    >
      <HeroSection />
      {/* <TracksSection />
      <HumansSection />
      <PreviousPartnersSection />
      <FaqSection /> */}
    </Flex>
  );
};

export default Page;
