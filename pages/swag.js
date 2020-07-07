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
  Tooltip,
  Image
} from "@chakra-ui/core";
import {MdArrowDownward} from "react-icons/md";
import * as styles from '../styles/styles';
import HoverText from '../components/hoverfunc';
import InfoBox from '../components/infobox';

const config = theme => ({
  light: {
    color: "#1A6D54",
    bg: "white",
    borderColor: "white",
    placeholderColor: theme.colors.gray[500]
  },
  dark: {
    color: theme.colors.whiteAlpha[900],
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

      <ThemeProvider >
        <CSSReset config={config} />
        <styles.Main>
          <Flex>
            <Tooltip label="Return Home" placement="right" backgroundColor="transparent" color="#C273E7" 
            shadow="none" fontFamily="Zilla Slab" fontSize="28px">
                <styles.Header fontFamily="Zilla Slab" color="#C273E7" height="77px">
                  <Link href="/" >*</Link>
                </styles.Header>
            </Tooltip>
          </Flex>
          <Box width="100%" height="30px"></Box>
          <styles.Header fontFamily="Zilla Slab" fontSize="48px">RecipeBook iOS App</styles.Header>
          <styles.SubHeader fontFamily="Inconsolata" color="#B54EE5">PRODUCT DESIGN | 2 WEEKS</styles.SubHeader>
          <Box height="36px" width="100%"></Box>
          <Flex width="100%" marginBottom="24px">
            <styles.BodyText fontFamily="Inconsolata" color="#424242">hello</styles.BodyText>
          </Flex>
        </styles.Main>
        <Flex height="488px" width="100%" backgroundColor="#FFCC7E">
          <Flex marginTop="88px" marginLeft="126px" marginLeft="126px" width="950px" flexDirection="column">
            <styles.Header fontFamily="Zilla Slab" color="#424242" fontSize="48px">Want to work with me?</styles.Header>
            <Box height="36px" width="100%"></Box>
            <styles.BodyText fontFamily="Inconsolata" color="gray.700">I am actively looking for internships and ready 
            to start summer 2021. If you’d like to talk to me over a game of sudoku, get in touch!</styles.BodyText>
            <Box height="36px" width="100%"></Box>
            <styles.Links fontFamily="Inconsolata" color="gray.700">
            <Link href="mailto:sydneythibui@gmail.com">Email</Link>  *   <Link href="/resume.pdf" isExternal>
            Resume</Link>  *  <Link href="https://www.linkedin.com/in/sydney-bui/" isExternal>LinkedIn</Link>
            </styles.Links>
          </Flex>
          <Flex width = "320px" justifyContent="center" flexDirection="column">
            <Image marginLeft="45px" rounded="full" size="225px" src="/pics/ponyo.png"/>
          </Flex>
        </Flex>
      </ThemeProvider>
    </div>
  )
}
