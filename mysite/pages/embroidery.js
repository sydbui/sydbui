import Head from 'next/head';
import NextLink from 'next/link';
import { 
  ThemeProvider, 
  CSSReset, 
  Flex, 
  Box, 
  Link, 
  Text,
  Tooltip,
  Image,
  Button,
  SimpleGrid,
} from "@chakra-ui/core";
import * as styles from '../components/customtext';
import {MdArrowBack} from "react-icons/md";

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
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap" rel="stylesheet"></link>
        <link rel="icon" type="image/png" href="/pics/_.png" />
      </Head>

      <ThemeProvider>
        <CSSReset config={config} />
        <Flex flexWrap="wrap" margin="5%">
          <Tooltip label="Return Home" placement="right" backgroundColor="transparent" color="#C273E7" 
            shadow="none" fontFamily="Zilla Slab" fontSize="28px">
            <Flex>
              <styles.Header color="#C273E7" text={<Link href="/" >*</Link>}></styles.Header>
            </Flex>
          </Tooltip>
          <Box width="100%" height="30px"></Box>
          <styles.Title text="Avatar the Last Airbender Jeans"></styles.Title>
          <SimpleGrid columns={4} spacingX="40px" spacingY="20px" marginTop="3%">
            <Image src="/pics/fullbod.JPG"></Image>
            <Image src="/pics/elements.JPG" ></Image>
            <Image src="/pics/elements2.JPG" ></Image>
            <Image src="/pics/fan.JPG"></Image>
          </SimpleGrid>
          <Box width="100%" height="30px"></Box>
          <SimpleGrid columns={1} spacingX="40px" spacingY="20px" marginTop="1%" marginX="10%">
            <Image src="/pics/appa.JPG"></Image>
          </SimpleGrid>
          <Box width="100%" height="100px"></Box>
          <styles.Title text="Chi Chai Monchon Sweater"></styles.Title>
          <SimpleGrid columns={1} spacingX="40px" spacingY="20px" marginTop="3%" marginX="10%">
            <Image src="/pics/chichai.JPG"></Image>
          </SimpleGrid>
          <Box height="100px" width="100%"></Box>
          <Link href="/">
            <Button variant="link" leftIcon={MdArrowBack} fontSize={["14px", "14px", "28px", "28px"]} fontFamily="Zilla Slab" color="#C273E7" fontWeight="normal"> 
            Return Home</Button>
          </Link>
          <Box height="80px" width="100%"></Box>
        </Flex>

      </ThemeProvider>
    </div>
  )
}
