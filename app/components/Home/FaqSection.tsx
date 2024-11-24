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
    question: 'I am a beginner, can I participate?',
    answer: (
      <AccordionPanel
        fontFamily="var(--font-outfit)"
        fontWeight="400"
        fontSize="1.2rem"
        color="#808080"
      >
        Absolutely! Hack This Fall is beginner-friendly. We’ll have mentors,
        resources, and workshops tailored for beginners. Join us and experience
        your first hackathon!
      </AccordionPanel>
    ),
  },
  {
    question: 'Who is eligible to participate?',
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
    question:
      'What is the maximum team size? Can I participate as a solo Hacker?',
    answer: (
      <AccordionPanel
        fontFamily="var(--font-outfit)"
        fontWeight="400"
        fontSize="1.2rem"
        color="#808080"
      >
        Teams can have 2 to 4 members. Solo hackers are encouraged to find
        teammates on our{' '}
        <Link
          color="#282826"
          href="https://discord.hackthisfall.tech/"
          target="_blank"
        >
          Discord Server
        </Link>{' '}
        before applying.
      </AccordionPanel>
    ),
  },
  {
    question: 'When do the applications close?',
    answer: (
      <AccordionPanel
        fontFamily="var(--font-outfit)"
        fontWeight="400"
        fontSize="1.2rem"
        color="#808080"
      >
        Submit your application by{' '}
        <strong>February 23, 2025, at 11:59 PM IST.</strong>
      </AccordionPanel>
    ),
  },
  {
    question: 'Will you support or reimburse our travel expenses?',
    answer: (
      <AccordionPanel
        fontFamily="var(--font-outfit)"
        fontWeight="400"
        fontSize="1.2rem"
        color="#808080"
      >
        Since Hack This Fall 2025 is a community-driven hackathon,
        unfortunately, we will not be able to support you with travel.
      </AccordionPanel>
    ),
  },
  {
    question: 'What is the event Code of Conduct?',
    answer: (
      <AccordionPanel
        fontFamily="var(--font-outfit)"
        fontWeight="400"
        fontSize="1.2rem"
        color="#808080"
      >
        We want to ensure a positive experience for all participants. We will be
        following{' '}
        <Link
          color="#282826"
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          target="_blank"
        >
          MLH&apos;s Code of Conduct
        </Link>
        ; we encourage you to read it.
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
    question: 'Can I participate remotely?',
    answer: (
      <AccordionPanel
        fontFamily="var(--font-outfit)"
        fontWeight="400"
        fontSize="1.2rem"
        color="#808080"
      >
        No, Hack This Fall 2025 is an in-person event. All team members must
        attend the hackathon in person.
      </AccordionPanel>
    ),
  },
  {
    question: 'How much does it cost to participate?',
    answer: (
      <AccordionPanel
        fontFamily="var(--font-outfit)"
        fontWeight="400"
        fontSize="1.2rem"
        color="#808080"
      >
        Nothing, participation in the Hack This Fall hackathon is absolutely
        FREE.
      </AccordionPanel>
    ),
  },
  {
    question: 'I am below 18 years of age, can I participate in the hackathon?',
    answer: (
      <AccordionPanel
        fontFamily="var(--font-outfit)"
        fontWeight="400"
        fontSize="1.2rem"
        color="#808080"
      >
        Yes! You can participate in the hackathon, but we would need written
        consent from your parent/guardian, and you wouldn’t be allowed to leave
        the venue during the hackathon.
      </AccordionPanel>
    ),
  },
  {
    question: 'Are there any food arrangements?',
    answer: (
      <AccordionPanel
        fontFamily="var(--font-outfit)"
        fontWeight="400"
        fontSize="1.2rem"
        color="#808080"
      >
        Absolutely! We&apos;ve got you covered with complimentary meals, snacks,
        and beverages throughout the hackathon to keep your energy high—all at
        no cost to you!
      </AccordionPanel>
    ),
  },
  {
    question: 'What are the arrangements for women hackers?',
    answer: (
      <AccordionPanel
        fontFamily="var(--font-outfit)"
        fontWeight="400"
        fontSize="1.2rem"
        color="#808080"
      >
        We&apos;re committed to creating a safe and comfortable space for women
        participants. This includes separate sleeping areas, clean washrooms,
        hygiene & sanitary kits, etc.
      </AccordionPanel>
    ),
  },
  {
    question: 'How can I ask more questions?',
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
        and drop your queries in the #ask-htf-team channel. We&apos;re always
        here to help!
      </AccordionPanel>
    ),
  },
];

const FaqSection = () => {
  return (
    <Flex
      background="#F9F5F2"
      w="full"
      className="container-1440-full"
      px={{ base: '1rem', md: '2rem', '2xl': '0' }}
      flexDir="column"
      gap="3rem"
      pt="10rem"
      pb="7rem"
    >
      <Flex
        pos="relative"
        w="full"
        px={{ base: '1rem', md: '2rem' }}
        pb={{ base: '1rem', md: '2rem' }}
        pt={{ base: '4rem', md: '6rem' }}
        border="2px solid #282826"
        borderRadius="1rem"
      >
        <Flex
          p="0.6rem"
          border="2px solid #282826"
          w="max-content"
          gap="1rem"
          borderRadius="1rem"
          bgColor="#fff"
          pos="absolute"
          top="0"
          left={{ base: '1rem', md: '2rem' }}
          transform="translate(0, -50%)"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            maxH={{ base: '4rem', lg: '6.7rem' }}
            borderRadius={{ base: '0.5rem', lg: '1.3rem' }}
            src="/images/icons/home/flower.svg"
            alt="sun"
          />
          <Heading
            fontFamily="var(--font-anton)"
            fontSize={{ base: '2rem', lg: '3.3rem' }}
            lineHeight="1.05"
            fontWeight="400"
            color="#282826"
            textTransform="uppercase"
          >
            FREQUENTLY ASKED
            <br /> QUESTIONS
          </Heading>
        </Flex>
        <Image
          w="max-content"
          alt="purple icon"
          maxH={{ base: '3rem', lg: '5rem' }}
          pos="absolute"
          display={{ base: 'none', md: 'block' }}
          top="0"
          right={{ base: '1rem', md: '2rem' }}
          transform="translate(0, -50%)"
          justifyContent="center"
          alignItems="center"
          src="/images/icons/home/purple3.svg"
        />

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
    </Flex>
  );
};

export default FaqSection;
