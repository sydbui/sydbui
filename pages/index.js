import Head from 'next/head';
import NextLink from 'next/link';
import { 
  ThemeProvider, 
  CSSReset, 
  Flex, 
  Box, 
  Link, 
  Button, 
  Icon, 
  ButtonGroup,   
  Popover,
  PopoverTrigger,
  PopoverContent,
  Image,
  Text,
} from "@chakra-ui/core";
import {BsArrowDown} from "react-icons/bs";
import InfoBox from '../components/infobox';
import * as styles from '../components/customtext';

const config = theme => ({
  light: {
    color: "#EBC1FF",
    bg: "#1A6D54",
    borderColor: theme.colors.gray[200],
    placeholderColor: theme.colors.gray[500]
  },
  dark: {
    color: "theme.colors.whiteAlpha[900]",
    bg: theme.colors.gray[800],
    borderColor: theme.colors.whiteAlpha[300],
    placeholderColor: theme.colors.whiteAlpha[400]
  }
});


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>syd's site</title>
        <link href="https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&display=swap" rel="stylesheet"></link>
      </Head>

      <ThemeProvider>
        <CSSReset config={config} />
        <Flex background-color= "transparent" marginLeft="125px" marginRight="126px" flexWrap="wrap" flexDirection="row" marginTop="80px">
          <Flex>
            <styles.Header color="#FFCC7E" text="*"></styles.Header>
          </Flex>
          <Box width="100%"></Box>
          <Flex>
            <Text fontFamily="Zilla Slab" fontSize="64px" lineHeight="160%">
              <Popover trigger="hover" placement="right-start">
                <PopoverTrigger>
                <Text fontFamily="Zilla Slab" as="u">Sydney Bui</Text>
                </PopoverTrigger>
                <PopoverContent backgroundColor="transparent" border="0px">
                    <Image src="/pics/kribz.jpg" alt="Me!" />
                </PopoverContent>
              </Popover> is a software developer, designer, and student at UC Berkeley. 
              Her work is motivated at <Text fontFamily="Zilla Slab" color="#EBC1FF" as="u">
                <Link href="https://calblueprint.org/" isExternal>building a better world.</Link> 
              </Text> She is also very cool.
            </Text>
          </Flex>
          <Flex justifyContent="space-between" width="100%">
            <Flex marginTop="90px">
              <Text fontFamily="Inconsolata" color="#FFCC7E" fontSize="28px">
              <Link href="mailto:sydneythibui@gmail.com">Email</Link> *  <Link href="/resume.pdf" isExternal>
              Resume</Link> * <Link href="https://www.linkedin.com/in/sydney-bui/" isExternal>LinkedIn</Link>
              </Text>
            </Flex>
            <Box as={BsArrowDown} size="150px" color="#FFCC7E"></Box>
          </Flex>
          <Box height="192px" width="100%"></Box>
          <InfoBox title="1951 Coffee Trainee App" subtitle="SOFTWARE ENGINEERING" body="Through Blueprint, a student organization 
          that develops softwares for non-profits, I worked with a team of people to create an app using React Native for 1951 Coffee, a 
          local Berkeley non-profit focused towards advancing the well-being of the refugee community." img="/pics/1951.jpg" 
          link="https://apps.apple.com/us/app/1951-coffee-trainee/id1496686726" check={true} ></InfoBox>
          <Box height="128px" width="100%"></Box>
          <InfoBox title="RecipeBook iOS App" subtitle="PRODUCT DESIGN" body="I designed an iOS App that allows users with 
          limited cooking knowledge to easily find a variety of new recipes through user research and design." img="/pics/ponyo.png" link="/swag" check={false}></InfoBox>
          <Box height="192px" width="100%"></Box>
        </Flex>
        <Flex width="100%" backgroundColor="#FFCC7E">
          <Flex marginTop="88px" marginLeft="126px" marginLeft="126px" width="950px" flexDirection="column" marginBottom="90px">
            <styles.Title color="#424242" text="Want to work with me?"></styles.Title>
            <Box height="36px" width="100%"></Box>
            <styles.Subtitle color="#424242" text="I am actively looking for internships and ready 
            to start summer 2021. If you’d like to talk to me over a game of sudoku, get in touch!"></styles.Subtitle>
            <Box height="36px" width="100%"></Box>
            <Text fontFamily="Inconsolata" color="#424242" fontSize="28px" fontWeight="700">
            <Link href="mailto:sydneythibui@gmail.com">Email</Link>  *   <Link href="/resume.pdf" isExternal>
            Resume</Link>  *  <Link href="https://www.linkedin.com/in/sydney-bui/" isExternal>LinkedIn</Link>
            </Text>
          </Flex>
          <Image marginLeft="64px" rounded="full" size="225px" src="/pics/me!.jpg" display="flex" marginTop="130px" marginRight="100px"/>
        </Flex>
      </ThemeProvider>
    </div>
  )
}
