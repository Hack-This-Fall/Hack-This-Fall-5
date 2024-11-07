import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const PrizesSection = ({
  pt = '0',
  pb = '7rem',
}: {
  pt?: string;
  pb?: string;
}) => {
  const isXl = useBreakpointValue({ base: false, xl: true });

  const Prizes = [
    {
      title: 'WINNER',
      amount: '$1000',
    },
    {
      title: '1ST RUNNER UP',
      amount: '$750',
    },
    {
      title: '2ND RUNNER UP',
      amount: '$500',
    },
    {
      title: 'ALL GIRLS TEAM',
      amount: '$250',
    },
    {
      title: 'BEGINNERS TEAM',
      amount: '$250',
    },
  ];

  return (
    <Flex
      background="#F9F5F2"
      w="full"
      className="container-1200"
      flexDir="column"
      gap="3rem"
      pt={pt}
      pb={pb}
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
          PRIZES
        </Heading>
      </Flex>
      <Flex
        w="full"
        justifyContent="center"
        flexWrap="wrap"
        columnGap={{ base: '2rem', md: '4rem' }}
        rowGap={{ base: '4rem', md: '6rem' }}
      >
        {Prizes.map((prize, index) => (
          <Flex pos="relative" key={index} w={{ base: '45%', xl: '25%' }}>
            <Image
              w="full"
              h="full"
              src="/images/prizes/container.svg"
              alt="Prize"
            />
            <Heading
              fontFamily="var(--font-roboto-condensed)"
              fontSize={{ base: '3rem', md: '6rem' }}
              fontWeight="800"
              pos="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
            >
              {prize.amount}
            </Heading>
            <Flex
              fontFamily="var(--font-roboto-condensed)"
              fontSize={{ base: '0.8rem', md: '1.8rem' }}
              py="0.3rem"
              fontWeight="800"
              pos="absolute"
              top="100%"
              w="80%"
              left="50%"
              transform="translate(-50%, -50%)"
              textAlign="center"
              justifyContent="center"
              bgColor="#FFC700"
              rounded="full"
              border="2px solid #282826"
              boxShadow="2.95px 2.95px 0px 0px #000000"
            >
              {prize.title}
            </Flex>
          </Flex>
        ))}
        <Flex
          as={Link}
          href="/virtual/prizes"
          pos="relative"
          w={{ base: '40%', xl: '25%' }}
          _hover={{
            cursor: 'pointer',
            '#arrow': {
              transform: 'rotate(0deg)',
              transition: 'transform 0.3s ease-in-out',
            },
          }}
        >
          <Image
            w="full"
            h="full"
            src="/images/prizes/container.svg"
            alt="Prize"
          />
          <Flex
            pos="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            <Image src="/images/prizes/morePrizes.svg" alt="Prize" />
          </Flex>
          <Flex
            fontFamily="var(--font-roboto-condensed)"
            fontSize={{ base: '0.8rem', md: '1.8rem' }}
            py="0.3rem"
            fontWeight="800"
            pos="absolute"
            top="100%"
            w="80%"
            left="50%"
            transform="translate(-50%, -50%)"
            textAlign="center"
            justifyContent="center"
            bgColor="#C693FF"
            rounded="full"
            border="2px solid #282826"
            boxShadow="2.95px 2.95px 0px 0px #000000"
          >
            MORE PRIZES
          </Flex>
          <Flex
            pos="absolute"
            top="25px"
            right="-10px"
            transform="translate(-50%, -50%)"
            p="0.5rem"
            borderRadius="full"
            border="1px solid #282826"
            boxShadow="2.5px 2.5px 0px 0px #282826"
            bgColor="#F9F5F2"
          >
            <ArrowForwardIcon
              id="arrow"
              transform="rotate(-45deg)"
              fontSize="1.5rem"
              color="#282826"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PrizesSection;
