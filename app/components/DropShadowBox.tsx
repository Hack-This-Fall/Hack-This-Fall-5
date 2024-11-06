import { Flex } from '@chakra-ui/react';

const DropShadowBox = ({
  children,
  w = 'full',
  borderRadius = '1rem',
  aspectRatio = '1',
  link = '',
  bgColor = '',
}: {
  children: React.ReactNode;
  w?: string;
  borderRadius?: string;
  aspectRatio?: string;
  bgColor?: string;
  link?: string;
}) => {
  return (
    <Flex
      {...{
        as: link ? 'a' : 'div',
        href: link ? link : undefined,
        target: '_blank',
      }}
      w={w}
      justifyContent="center"
      bgColor={bgColor ? bgColor : 'transparent'}
      alignItems="center"
      position="relative"
      boxShadow="6px 6px 0px 0px #282826"
      border="2px solid #282826"
      borderRadius={borderRadius}
      flexDir="column"
      overflow="hidden"
      aspectRatio={aspectRatio}
      _active={{
        boxShadow: '3px 3px 0px 0px #282826',
        transform: 'translate(3px, 3px)',
      }}
    >
      {children}
    </Flex>
  );
};

export default DropShadowBox;
