import { Flex, Heading, Text } from '@chakra-ui/react';
const footer = [
  {
    title: 'EXPLORE',
    subLinks: [
      {
        title: 'APPLY',
        link: 'https://hackthisfall-virtual.devfolio.co/',
      },
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
        link: 'https://blog.hackthisfall.tech/',
      },
      {
        title: 'COC',
        link: 'https://hackthisfall.tech/coc',
      },
    ],
  },
  {
    title: 'SOCIALS',
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
        title: 'DISCORD',
        link: 'https://discord.hackthisfall.tech/',
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
        justifyContent="center"
        borderX={{ base: '2px solid #282826', md: 'none' }}
        borderRight="2px solid #282826 !important"
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
        justifyContent={{ base: 'center', md: 'flex-end' }}
        borderX={{ base: '2px solid #282826', md: 'none' }}
        borderBottom={{ base: '2px solid #282826', md: 'none' }}
        gap="2.5rem"
        w={{ base: '100%', md: '50%', lg: '65%' }}
        p="1.2rem"
      >
        {footer.map((item, index) => (
          <Flex
            key={index}
            flexDir="column"
            alignItems="flex-start"
            justifyContent="center"
            gap={{ base: '0.8rem', md: '1.4rem' }}
          >
            <Heading
              fontFamily="--var(--font-roboto-condensed)"
              fontWeight="700"
              fontSize={{ base: '1rem', lg: '1.2rem' }}
            >
              {item.title}
            </Heading>
            {item.subLinks.map((subLink, index) => (
              <Text
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
