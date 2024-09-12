'use client';

import {
  Flex,
  Heading,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  SimpleGrid,
  Text,
  Link,
  Box,
} from '@chakra-ui/react';
import DropShadowBox from './DropShadowBox';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

const FaqDetails = [
  {
    question: 'What is a hackathon?',
    answer: (
      <AccordionPanel
        fontFamily="var(--font-outfit)"
        fontWeight="400"
        fontSize="1.2rem"
        color="#808080"
      >
        A hackathon is an event where community members come together to learn
        new skills, build innovative projects, and share ideas. It&apos;s a
        great opportunity for collaboration, creativity, and skill development.
      </AccordionPanel>
    ),
  },
  {
    question: 'What is Hack This Fall?',
    answer: (
      <AccordionPanel
        fontFamily="var(--font-outfit)"
        fontWeight="400"
        fontSize="1.2rem"
        color="#808080"
      >
        Hack This Fall is one of India&apos;s most welcoming, inclusive, and
        thriving hacker communities. Launched in 2020, it aims to encourage new
        hackers to build unique projects, regardless of the technology or field.
        Learn more about Hack This Fall here:{' '}
        <Link
          color="#282826"
          href="https://hackthisfall.tech/about"
          target="_blank"
        >
          hackthisfall.tech/about
        </Link>
      </AccordionPanel>
    ),
  },
  {
    question: 'Who is eligible to participate in Hack This Fall?',
    answer: (
      <AccordionPanel
        fontFamily="var(--font-outfit)"
        fontWeight="400"
        fontSize="1.2rem"
        color="#808080"
      >
        Hack This Fall is open to everyone, regardless of experience level. The
        community values inclusivity and diversity, so anyone interested in
        building innovative projects is welcome to join.
      </AccordionPanel>
    ),
  },
  {
    question: 'Do I need a team to participate?',
    answer: (
      <AccordionPanel
        fontFamily="var(--font-outfit)"
        fontWeight="400"
        fontSize="1.2rem"
        color="#808080"
      >
        We encourage collaboration, and teams of up to 5 members are allowed. If
        you don&apos;t have a team, you can find team members through our
        <Link
          color="#282826"
          href="https://discord.hackthisfall.tech/"
          target="_blank"
        >
          Discord Server
        </Link>
        . Solo participation is also welcome.
      </AccordionPanel>
    ),
  },
  {
    question: 'Can I start working on projects in advance?',
    answer: (
      <AccordionPanel
        fontFamily="var(--font-outfit)"
        fontWeight="400"
        fontSize="1.2rem"
        color="#808080"
      >
        No, projects should only be started once hacking officially begins on
        November 8, 2024, after the opening ceremony. Any project with an
        earlier commit history will be disqualified. However, you can
        familiarize yourself with the necessary tools, technologies, and start
        ideating before the hackathon begins. Implementation must begin only
        after the hackathon starts.
      </AccordionPanel>
    ),
  },
  {
    question: 'Can I submit a previous project?',
    answer: (
      <AccordionPanel
        fontFamily="var(--font-outfit)"
        fontWeight="400"
        fontSize="1.2rem"
        color="#808080"
      >
        No, all projects must be developed from scratch during the hackathon to
        ensure fairness. All code and development should happen during the
        event.
      </AccordionPanel>
    ),
  },
  {
    question: 'Where do I submit my project?',
    answer: (
      <AccordionPanel
        fontFamily="var(--font-outfit)"
        fontWeight="400"
        fontSize="1.2rem"
        color="#808080"
      >
        First, apply on{' '}
        <Link
          color="#282826"
          href="https://hackthisfall-virtual.devfolio.co/"
          target="_blank"
        >
          Devfolio
        </Link>
        . Once the hackathon starts, you can create and submit your project
        there. Ensure you submit before the deadline to be eligible for prizes.
      </AccordionPanel>
    ),
  },
  {
    question: 'Who retains ownership of my project?',
    answer: (
      <AccordionPanel
        fontFamily="var(--font-outfit)"
        fontWeight="400"
        fontSize="1.2rem"
        color="#808080"
      >
        The creators (hackers) retain full ownership of their projects as they
        remain their intellectual property.
      </AccordionPanel>
    ),
  },
  {
    question: "What is the event's Code of Conduct?",
    answer: (
      <AccordionPanel
        fontFamily="var(--font-outfit)"
        fontWeight="400"
        fontSize="1.2rem"
        color="#808080"
      >
        We are committed to providing a positive experience for all
        participants. Please read our Community Code of Conduct for more details
        here:{' '}
        <Link
          color="#282826"
          href="https://hackthisfall.tech/coc"
          target="_blank"
        >
          hackthisfall.tech/coc
        </Link>
      </AccordionPanel>
    ),
  },
  {
    question: 'How can I ask more questions or get help?',
    answer: (
      <AccordionPanel
        fontFamily="var(--font-outfit)"
        fontWeight="400"
        fontSize="1.2rem"
        color="#808080"
      >
        Join our{' '}
        <Link
          color="#282826"
          href="https://discord.hackthisfall.tech/"
          target="_blank"
        >
          Discord Server
        </Link>{' '}
        and head to the #ask-htf-team channel. We&apos;re always ready to help!
      </AccordionPanel>
    ),
  },
];

const FaqSection = () => {
  return (
    <Flex
      background="#F9F5F2"
      w="full"
      className="container-1200"
      flexDir="column"
      gap="3rem"
      py="7rem"
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
          alt="Back Green Arrows"
        />
        <Image
          h={{ base: '3rem', md: '5rem', '2xl': '6rem' }}
          src="/images/icons/yellowBall.svg"
          alt="Yellow Ball"
        />
        <Heading
          color="#282826"
          fontFamily="var(--font-roboto-condensed)"
          fontSize={{ base: '3rem', md: '5rem', '2xl': '6rem' }}
          fontWeight="600"
        >
          FAQS
        </Heading>
      </Flex>
      <Flex flexDir="column" gap="1rem">
        <Accordion
          display="grid"
          gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }}
          gap="1rem"
          allowToggle
        >
          {FaqDetails.map(({ question, answer }, index) => (
            <Box w="full" h="full" key={index}>
              <AccordionItem
                boxShadow="6px 6px 0px 0px #282826"
                border="2px solid #282826"
                background="#FFF"
                borderRadius="1rem"
                p="1rem"
              >
                {({ isExpanded }) => (
                  <>
                    <AccordionButton
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      _hover={{ background: '#FFF' }}
                    >
                      <Text
                        fontFamily="var(--font-outfit)"
                        fontWeight="500"
                        fontSize="1.2rem"
                        textAlign="left"
                      >
                        {question}
                      </Text>
                      {isExpanded ? (
                        <MinusIcon fontSize="1.2rem" />
                      ) : (
                        <AddIcon fontSize="1.2rem" />
                      )}
                    </AccordionButton>
                    {answer}
                  </>
                )}
              </AccordionItem>
            </Box>
          ))}
        </Accordion>
      </Flex>
    </Flex>
  );
};

export default FaqSection;
