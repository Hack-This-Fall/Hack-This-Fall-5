import React, { useState, useEffect } from 'react';
import {
  Flex,
  Box,
  useDisclosure,
  Stack,
  useBreakpointValue,
  Image,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

interface Props {
  children: React.ReactNode;
  currentSection: string;
  title: string;
  link?: string;
  isVirtual?: boolean;
  setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
  onClose: () => void;
}

const NavLink = (props: Props) => {
  const {
    children,
    currentSection,
    title,
    link,
    isVirtual,
    setCurrentSection,
    onClose,
  } = props;
  const router = useRouter();

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
        if (link) {
          router.push(link);
          return;
        }
        setCurrentSection(title);
        if (isVirtual && window.location.pathname !== '/virtual') {
          router.push(`/virtual/#${title}`);
        } else if (!isVirtual && window.location.pathname !== '/') {
          router.push(`/#${title}`);
        } else {
          document.querySelector(`#${title}`)!.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
        }
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
  isVirtual = false,
  tabs,
}: {
  currentSection: string;
  setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
  isVirtual?: boolean;
  tabs: { title: string; link?: string }[];
}) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMd = useBreakpointValue({ base: false, md: true });
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Flex
      flexDir="column"
      position="fixed"
      zIndex="30"
      w="100vw"
      bg={hasScrolled ? '#F9F5F2' : 'transparent'}
      transition="background-color 0.2s ease"
    >
      <Flex
        w="full"
        alignItems="center"
        justifyContent="space-between"
        borderY="2px solid #282826"
        className={hasScrolled ? 'container-1440' : 'container-1200'}
        transition="max-width 0.6s ease"
        mt={{ base: '1rem', xl: '2rem' }}
        position="relative"
      >
        <Flex
          fontSize="1.2rem"
          fontFamily="--var(--font-roboto-condensed)"
          pr="1rem"
          borderRight={isMd ? '2px solid #282826' : 'none'}
          py="0.3rem"
          fontWeight="600"
        >
          HACK THIS FALL
        </Flex>
        {isMd && (
          <Flex gap="1rem" fontWeight="600">
            {tabs.map(({ title, link }, index) => (
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
                  if (link) {
                    router.push(link);
                    return;
                  }

                  setCurrentSection(title);
                  if (isVirtual && window.location.pathname !== '/virtual') {
                    router.push(`/virtual/#${title}`);
                  } else if (!isVirtual && window.location.pathname !== '/') {
                    router.push(`/#${title}`);
                  } else {
                    document.querySelector(`#${title}`)!.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                      inline: 'nearest',
                    });
                  }
                }}
              >
                {title}
              </Flex>
            ))}
            <Flex
              as={'a'}
              id="mlh-trust-badge"
              maxW="100px"
              minW="60px"
              pos="relative"
              w="10%"
              zIndex="10000"
              href="https://mlh.io/apac?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=black"
              target="_blank"
            >
              <Image
                pos={'absolute'}
                src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-black.svg"
                alt="Major League Hacking 2025 Hackathon Season"
                w="full"
                top="-0.6rem"
              ></Image>
            </Flex>
          </Flex>
        )}
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
            {tabs.map((tabs, index) => (
              <NavLink
                isVirtual={isVirtual}
                setCurrentSection={setCurrentSection}
                currentSection={currentSection}
                title={tabs.title}
                link={tabs.link}
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
