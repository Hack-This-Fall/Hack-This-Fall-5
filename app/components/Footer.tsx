import { Flex, Heading, Text } from '@chakra-ui/react';
const footer = [
  {
    title: 'HOME',
    subLinks: [
      {
        title: 'ABOUT',
        link: '/virtual/#about',
      },
      {
        title: 'TRACKS',
        link: '/virtual/#tracks',
      },
      {
        title: 'PRIZES',
        link: '/prizes',
      },
      {
        title: 'HUMANS',
        link: '/virtual/#humans',
      },
    ],
  },
  {
    title: 'HOME',
    subLinks: [
      {
        title: 'ABOUT',
        link: '/about',
      },
      {
        title: 'TRACKS',
        link: '/tracks',
      },
      {
        title: 'PRIZES',
        link: '/prizes',
      },
      {
        title: 'HUMANS',
        link: '/humans',
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
          Hack This Fall began with a mindset of encouraging new hackers to
          build unique projects regardless of the tech or field. The only focus
          was to create something meaningful and enjoy the process{' '}
        </Text>
      </Flex>
      <Flex
        justifyContent={{base: "center", md: "flex-end"}}
        borderX={{ base: '2px solid #282826', md: 'none' }}
        borderBottom={{ base: '2px solid #282826', md: 'none' }}
        gap="1.5rem"
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
