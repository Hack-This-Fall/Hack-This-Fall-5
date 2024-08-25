import {
  Flex,
  Box,
  useDisclosure,
  Stack,
  useBreakpointValue,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

interface Props {
  children: React.ReactNode;
  currentSection: string;
  title: string;
  setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
  onClose: () => void;
}

const Tabs = [
  {
    title: 'HOME',
  },
  //   {
  //     title: 'ABOUT',
  //   },
  {
    title: 'TRACKS',
  },
  //   {
  //     title: 'PRIZE',
  //   },
  {
    title: 'HUMANS',
  },
  {
    title: 'FAQ',
  },
];

const NavLink = (props: Props) => {
  const { children, currentSection, title, setCurrentSection, onClose } = props;
  return (
    <Box
      color={currentSection === title ? '#282826' : '#00000066'}
      fontSize="24px"
      fontWeight="700"
      fontFamily="--var(--font-roboto-condensed)"
      cursor="pointer"
      _hover={{
        color: '#282826',
      }}
      onClick={() => {
        setCurrentSection(title);
        document.querySelector(`#${title}`)!.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest',
        });
        onClose();
      }}
    >
      {children}
    </Box>
  );
};

const Header = ({
  currentSection,
  setCurrentSection,
}: {
  currentSection: string;
  setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMd = useBreakpointValue({ base: false, md: true });

  return (
    <Flex
      background="#F9F5F2"
      flexDir="column"
      position="fixed"
      zIndex="30"
      w="full"
    >
      <Flex
        w="full"
        alignItems="center"
        justifyContent="space-between"
        borderY="2px solid #282826"
        background="#F9F5F2"
        className="container-1200"
        mt="2rem"
        position="relative"
      >
        <Flex
          as={'a'}
          id="mlh-trust-badge"
          display={{ base: 'block', md: 'none' }}
          maxW="100px"
          minW="60px"
          pos="fixed"
          right="50px"
          top="0"
          w="10%"
          zIndex="10000"
          href="https://mlh.io/apac?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=black"
          target="_blank"
        >
          <Image
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-black.svg"
            alt="Major League Hacking 2025 Hackathon Season"
            w="full"
          ></Image>
        </Flex>
        <Flex
          fontSize="1.2rem"
          fontFamily="--var(--font-roboto-condensed)"
          pr="2rem"
          borderRight={isMd ? '2px solid #282826' : 'none'}
          py="0.3rem"
          fontWeight="600"
        >
          HACK THIS FALL
        </Flex>
        <Flex hideBelow="md" gap="1rem" py="0.3rem" fontWeight="600">
          {Tabs.map(({ title }, index) => (
            <Flex
              color={currentSection === title ? '#282826' : '#00000066'}
              key={index}
              fontSize="1rem"
              fontFamily="--var(--font-roboto-condensed)"
              cursor="pointer"
              _hover={{
                color: '#282826',
              }}
              onClick={() => {
                setCurrentSection(title);
                document.querySelector(`#${title}`)!.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                  inline: 'nearest',
                });
              }}
            >
              {title}
            </Flex>
          ))}
        </Flex>
        {!isMd && (
          <Flex
            fontSize="1.2rem"
            alignItems={'center'}
            aria-label={'Open Menu'}
            onClick={isOpen ? onClose : onOpen}
          >
            {isOpen ? <CloseIcon /> : <HamburgerIcon />}
          </Flex>
        )}
      </Flex>
      {isOpen ? (
        <Box
          py="1rem"
          w="full"
          className="container-1200"
          borderBottom="2px solid #282826"
          display={{ md: 'none' }}
        >
          <Stack as={'nav'} spacing={6}>
            {Tabs.map((tabs, index) => (
              <NavLink
                setCurrentSection={setCurrentSection}
                currentSection={currentSection}
                title={tabs.title}
                key={index}
                onClose={onClose}
              >
                {tabs.title}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Flex>
  );
};

export default Header;
