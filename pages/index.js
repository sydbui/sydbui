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
  Image
} from "@chakra-ui/core";
import {MdArrowDownward} from "react-icons/md";
import theme from './theme';
import * as styles from './styles';
import HoverText from '../components/hoverfunc';
import InfoBox from '../components/infobox';

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
        <styles.Main>
          <Flex>
            <styles.Header fontFamily="Zilla Slab" color="#FFCC7E">*</styles.Header>
          </Flex>
          <Flex>
            <styles.Header fontFamily="Zilla Slab">
              <Popover trigger="hover" placement="right-start">
                <PopoverTrigger>
                <styles.Header fontFamily="Zilla Slab" as="u">Sydney Bui</styles.Header>
                </PopoverTrigger>
                <PopoverContent backgroundColor="transparent" border="0px">
                    <Image src="/pics/kribz.jpg" alt="Me!" />
                </PopoverContent>
              </Popover> is a software developer, designer, and student at UC Berkeley. 
              Her work is motivated at <styles.Header fontFamily="Zilla Slab" color="#EBC1FF" as="u">
                <Link href="https://calblueprint.org/" isExternal>building a better world.</Link> 
              </styles.Header> She is also very cool.
            </styles.Header>
          </Flex>
          <styles.LeftContainter>
            <Box as={MdArrowDownward} size="100px" color="#FFCC7E"></Box>
          </styles.LeftContainter>
          <styles.Links fontFamily="Inconsolata" color="#FFCC7E">
            <Link href="mailto:sydneythibui@gmail.com">Email</Link> *  <Link href="/resume.pdf" isExternal>
            Resume</Link> * <Link href="https://www.linkedin.com/in/sydney-bui/" isExternal>LinkedIn</Link>
          </styles.Links>
          <Box height="192px" width="100%"></Box>
          <InfoBox title="1951 Coffee Trainee App" subtitle="SOFTWARE ENGINEER" body="Through Blueprint, a student organization 
          that develops softwares for non-profits, I worked with a team of people to create an app using React Native for 1951 Coffee, a 
          local Berkeley non-profit focused towards advancing the well-being of the refugee community." img="/pics/1951.jpg" 
          link="https://apps.apple.com/us/app/1951-coffee-trainee/id1496686726" check={true} ></InfoBox>
          <Box height="64px" width="100%"></Box>
          <InfoBox title="RecipeBook iOS App" subtitle="PRODUCT DESIGN" body="I designed an iOS App that allows users with 
          limited cooking knowledge to easily find a variety of new recipes through user research and design." img="/pics/ponyo.png" link="/swag" check={false}></InfoBox>
          <Box height="192px" width="100%"></Box>
        </styles.Main>
        <Flex height="488px" width="100%" backgroundColor="#FFCC7E">
          <Flex marginTop="88px" marginLeft="126px" marginLeft="126px" width="950px" flexDirection="column">
            <styles.Header fontFamily="Zilla Slab" color="#424242" fontSize="48px">Want to work with me?</styles.Header>
            <Box height="36px" width="100%"></Box>
            <styles.InfoText fontFamily="Inconsolata">I am actively looking for internships and ready 
            to start summer 2021. If you’d like to talk to me over a game of sudoku, get in touch!</styles.InfoText>
            <Box height="36px" width="100%"></Box>
            <styles.Links fontFamily="Inconsolata" color="gray.700">
            <Link href="mailto:sydneythibui@gmail.com">Email</Link>  *   <Link href="/resume.pdf" isExternal>
            Resume</Link>  *  <Link href="https://www.linkedin.com/in/sydney-bui/" isExternal>LinkedIn</Link>
            </styles.Links>
          </Flex>
          <Flex width = "320px" justifyContent="center" flexDirection="column">
            <Image marginLeft="45px" rounded="full" size="225px" src="/pics/me!.jpg"/>
          </Flex>
        </Flex>
      </ThemeProvider>
    </div>
  )
}
