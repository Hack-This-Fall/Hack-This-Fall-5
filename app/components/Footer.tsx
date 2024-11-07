import { Flex, Heading, Text } from '@chakra-ui/react';
const footer = [
  {
    title: 'EXPLORE',
    subLinks: [
      {
        title: 'ABOUT',
        link: 'https://hackthisfall.tech/about',
      },
      {
        title: 'EVENTS',
        link: 'https://hackthisfall.tech/events',
      },
      {
        title: 'BLOG',
        link: 'https://hackthisfall.tech/blog',
      },
      {
        title: 'COC',
        link: 'https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md',
      },
    ],
  },
  {
    title: 'SOCIAL',
    subLinks: [
      {
        title: 'TWITTER',
        link: 'https://twitter.com/hackthisfall/',
      },
      {
        title: 'INSTAGRAM',
        link: 'https://instagram.com/hackthisfall',
      },
      {
        title: 'LINKEDIN',
        link: 'https://www.linkedin.com/company/hackthisfall/',
      },
      {
        title: 'YOUTUBE',
        link: 'https://www.youtube.com/channel/UCpdsmUIkLpfopjURSYF1gaA',
      },
    ],
  },
];

const Footer = () => {
  return (
    <Flex
      w="full"
      justifyContent="space-between"
      flexDir={{ base: 'column-reverse', md: 'row' }}
      borderY={{ base: 'none', md: '2px solid #282826' }}
      background="#F9F5F2"
      className="container-1200"
      mb="-4rem"
    >
      <Flex
        flexDir="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        borderRight={{ base: 'none', md: '2px solid #282826 !important' }}
        borderBottom={{ base: '2px solid #282826', md: 'none' }}
        gap="0.8rem"
        w={{ base: '100%', md: '50%', lg: '35%' }}
        p="1.2rem"
      >
        <Heading
          fontFamily="--var(--font-roboto-condensed)"
          fontWeight="700"
          fontSize={{ base: '1.2rem', md: '1.5rem' }}
        >
          HACK THIS FALL
        </Heading>
        <Text
          fontFamily="--var(--font-roboto-condensed)"
          fontWeight="400"
          fontSize={{ base: '1rem', md: '1.2rem' }}
          color="#808080"
        >
          Hack This Fall is one of India&apos;s most thriving hacker
          communities. Join us to build groundbreaking solutions, inspire
          problem-solvers, and grow together in a diverse, supportive
          environment.
        </Text>
      </Flex>
      <Flex
        justifyContent={{ base: 'flex-start', md: 'flex-end' }}
        borderY={{ base: '2px solid #282826', md: 'none' }}
        gap={{ base: '5rem', md: '2.5rem' }}
        w={{ base: '100%', md: '50%', lg: '65%' }}
        px="1.2rem"
        pt="1.2rem"
        pb="0.6rem"
      >
        {footer.map((item, index) => (
          <Flex
            key={index}
            flexDir="column"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Heading
              fontFamily="--var(--font-roboto-condensed)"
              fontWeight="700"
              fontSize={{ base: '1rem', lg: '1.2rem' }}
              mb={{ base: '0.8rem', md: '1.4rem' }}
            >
              {item.title}
            </Heading>
            {item.subLinks.map((subLink, index) => (
              <Text
                mb={{ base: '0.6rem', md: '0.5rem' }}
                as="a"
                key={index}
                fontFamily="--var(--font-roboto-condensed)"
                fontWeight="600"
                fontSize={{ base: '1rem', lg: '1.2rem' }}
                color="#808080"
                textDecoration="none"
                _hover={{
                  color: '#282826',
                }}
                href={subLink.link}
                target="_blank"
              >
                {subLink.title}
              </Text>
            ))}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Footer;
