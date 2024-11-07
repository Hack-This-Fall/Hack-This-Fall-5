'use client';

import { Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import DropShadowBox from '../DropShadowBox';

const HumanDetails = [
  {
    name: 'Akash Jaiswal',
    image: '/images/mentors/akash.jpg',
    link: 'https://www.linkedin.com/in/akashjaiswal03/',
  },
  {
    name: 'Anurag Mishra',
    image: '/images/mentors/anurag.jpg',
    link: 'https://linkedin.com/in/anuragayumishra',
  },
  {
    name: 'Hrishikesh Omprakash Yadav',
    image: '/images/mentors/hrishikesh.jpg',
    link: 'https://www.linkedin.com/in/hrishikesh-yadav-aa748121a/',
  },
  {
    name: 'Malla Venkata Sai Ashish',
    image: '/images/mentors/malla.jpeg',
    link: 'https://www.linkedin.com/in/im45145v/',
  },
  {
    name: 'Janki Gabani',
    image: '/images/mentors/janki.jpg',
    link: 'https://www.linkedin.com/in/janki-gabani/',
  },
  {
    name: 'Fuzail Kazi',
    image: '/images/mentors/fuzail.jpg',
    link: 'https://www.linkedin.com/in/fuzail-kazi/',
  },
  {
    name: 'Pratik Parmar',
    image: '/images/mentors/pratik.jpg',
    link: 'https://linkedin.com/in/pratikparmar1',
  },
  {
    name: 'Sanika Chavan',
    image: '/images/mentors/sanika.jpeg',
    link: 'https://www.linkedin.com/in/sanika-chavan-52457b236/',
  },
  {
    name: 'Tirth Joshi',
    image: '/images/mentors/tirth.jpg',
    link: 'https://www.linkedin.com/in/tirth5828/',
  },
  {
    name: 'Shivay Lamba',
    image: '/images/mentors/shivay.png',
    link: 'https://linkedin.com/in/shivaylamba',
  },
  {
    name: 'Shivam Singhal',
    image: '/images/mentors/shivam.png',
    link: 'https://www.linkedin.com/in/shivam310/',
  },
  {
    name: 'Amogh Jahagirdar',
    image: '/images/mentors/amogh.jpg',
    link: 'https://www.linkedin.com/in/0xamogh/',
  },
  {
    name: 'Tanush Sharanarthi',
    image: '/images/mentors/tanush.jpeg',
    link: 'https://www.linkedin.com/in/tanush-s/',
  },
  {
    name: 'Srishti Gupta',
    image: '/images/mentors/srishti.jpeg',
    link: 'https://www.linkedin.com/in/srishti-gupta2/',
  },
  {
    name: 'Sriram Santosh Aripirala',
    image: '/images/mentors/sriram.jpeg',
    link: 'https://www.linkedin.com/in/sriramsantosh/',
  },
  {
    name: 'Srinivas',
    image: '/images/mentors/srinivas.png',
    link: 'https://www.linkedin.com/in/srinivas-reddy-k0612/',
  },
  {
    name: 'Sharmila Devi chandariah',
    image: '/images/mentors/sharmila.jpg',
    link: 'http://www.linkedin.com/in/sharmiladevichandariah',
  },
  {
    name: 'Sankalp Shrivastava',
    image: '/images/mentors/sankalp.jpeg',
    link: 'https://www.linkedin.com/in/shrivastavasankalp/',
  },
  {
    name: 'Rajeev Kumar',
    image: '/images/mentors/rajeev.jpg',
    link: 'https://www.linkedin.com/in/rajeev-kumar-uw/',
  },
  {
    name: 'Nastassia Shahun',
    image: '/images/mentors/nastassia.jpg',
    link: 'https://www.linkedin.com/in/nastassia-shahun/',
  },
  {
    name: 'Namita',
    image: '/images/mentors/namita.jpeg',
    link: 'https://www.linkedin.com/in/namitadandawate/',
  },
  {
    name: 'Madhu',
    image: '/images/mentors/madhu.jpg',
    link: 'https://www.linkedin.com/in/madhu-chavva/',
  },
  {
    name: 'Krishna Chaitanya Rao',
    image: '/images/mentors/krishna.jpeg',
    link: 'https://www.linkedin.com/in/krishnachaitanyarao/',
  },
  {
    name: 'Deepak Bhaskaran',
    image: '/images/mentors/deepak.png',
    link: 'https://www.linkedin.com/in/deepakbhaskaran/',
  },
  {
    name: 'Chirag Agrawal',
    image: '/images/mentors/chirag.jpg',
    link: 'https://www.linkedin.com/in/agrawalchirag',
  },
  {
    name: 'Bhumik Thakkar',
    image: '/images/mentors/bhumik.jpeg',
    link: 'https://www.linkedin.com/in/bhumikthakkar/',
  },
  {
    name: 'Ashish Pawar',
    image: '/images/mentors/ashish.jpg',
    link: 'https://linkedin.com/in/ashish-a-pawar',
  },
  {
    name: 'Arushi Garg',
    image: '/images/mentors/arushi.jpg',
    link: 'https://www.linkedin.com/in/arushi-garg105',
  },
  {
    name: 'Sannidhya Dubey',
    image: '/images/mentors/sannidhya.png',
    link: 'https://www.linkedin.com/in/sannidhyadubey/',
  },
  {
    name: 'Vinayak Rawat',
    image: '/images/mentors/vinayak.jpeg',
    link: 'https://www.linkedin.com/in/ig-rawx/?originalSubdomain=in',
  },
  {
    name: 'Aniket Raj',
    image: '/images/mentors/aniket.jpeg',
    link: 'https://www.linkedin.com/in/aniketraj1/',
  },
];

const HumansSection = () => {
  return (
    <Flex
      background="#F9F5F2"
      w="full"
      className="container-1200"
      flexDir="column"
      gap="3rem"
      pt="9rem"
    >
      <Flex
        justifyContent={{ base: 'center', md: 'flex-start' }}
        alignItems="center"
        gap="1rem"
        maxW="100%"
      >
        <Image
          h={{ base: '2.8rem', md: '5rem', '2xl': '6rem' }}
          src="/images/icons/orangeBall.svg"
          alt="Orange Ball"
        />
        <Image
          h={{ base: '2.8rem', md: '5rem', '2xl': '6rem' }}
          src="/images/icons/greenPill.svg"
          alt="Green Pill"
        />
        <Heading
          color="#282826"
          fontFamily="var(--font-roboto-condensed)"
          fontSize={{ base: '2.8rem', md: '5rem', '2xl': '6rem' }}
          fontWeight="600"
        >
          MENTORS & JUDGES
        </Heading>
      </Flex>
      <SimpleGrid
        templateColumns={{
          base: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
          '2xl': 'repeat(5, 1fr)',
        }}
        gap="1rem"
      >
        {HumanDetails.map(({ image, name, link }, index) => (
          <DropShadowBox link={link} key={index} w="full" aspectRatio="0.9" bgColor="#000">
            <Image src={image} alt={name} w="full" h="full" objectFit="cover" />
            <Flex
              pos="absolute"
              w="full"
              top="50%"
              left="0"
              h="50%"
              background="linear-gradient(180.09deg, rgba(0, 0, 0, 0) 0.08%, #010101 124.07%)"
              alignItems="flex-end"
              justifyContent="center"
              pb="0.8rem"
            >
              <Text color="white" fontSize="1.5rem" fontWeight="600" textAlign="center">
                {name}
              </Text>
            </Flex>
          </DropShadowBox>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default HumansSection;
