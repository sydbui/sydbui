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
  Button
} from "@chakra-ui/core";
import {MdArrowBack} from "react-icons/md";
import * as styles from '../components/customtext';
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
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap" rel="stylesheet"></link>
      </Head>

      <ThemeProvider >
        <CSSReset config={config} />
        <Flex background-color= "transparent" marginLeft={["48px", "48px", "125px", "125px"]} marginRight={["48px", "48px", "125px", "125px"]} flexWrap="wrap" flexDirection="row" marginTop="80px">
          <Tooltip label="Return Home" placement="right" backgroundColor="transparent" color="#C273E7" 
            shadow="none" fontFamily="Zilla Slab" fontSize="28px">
            <Flex>
              <styles.Header color="#C273E7" text={<Link href="/" >*</Link>}></styles.Header>
            </Flex>
          </Tooltip>
          <Box width="100%" height="30px"></Box>
          <styles.Title text="RecipeBook iOS App"></styles.Title>
          <Box width="100%"></Box>
          <styles.Subtitle color="#B54EE5" text="PRODUCT DESIGN | 2 WEEKS"></styles.Subtitle>
          <Box height="36px" width="100%"></Box>
          <styles.Description color="#424242" text="RecipeBook is an iOS App I designed to allow users to easily find a 
          variety of dishes to cook. The skills used include UI Design, UX reseach, and Visual Design"></styles.Description>
          <Box height="50px" width="100%"></Box>
          <styles.Subtitle color="#B54EE5" text="USER RESEARCH TACTICS"></styles.Subtitle>
          <Box height="24px" width="100%"></Box>
          <styles.Description color="#424242" text="Through conducting multiple interviews with siblings and 
          friends with skills ranging from vast cooking experience to none, I was able to learn about their 
          experiences with cooking. I was also able to identify potential problem areas and key insights through 
          additional reading and research."></styles.Description>
          <Box height="60px" width="100%"></Box>
          <styles.Subtitle color="#B54EE5" text="KEY TAKE AWAYS"></styles.Subtitle>
          <Box height="24px" width="100%"></Box>
          <styles.Underline color="#424242" text="TIME CONSTRAINTS"></styles.Underline>
          <styles.Description color="#424242" text="Along with yummy recipes and dishes, people 
          prefer for cooking to be quick and time efficient (typically 20 mins)"></styles.Description>
          <Box width="100%" height="15px"></Box>
          <styles.Underline color="#424242" text="HEALTH CONCERNS"></styles.Underline>
          <styles.Description color="#424242" text="People prefer healthy recipes as they are more 
          conscious of what they eat when cooking as they see all ingredients that go into the dish."></styles.Description>
          <Box width="100%" height="15px"></Box>
          <styles.Underline color="#424242" text="VARIETY"></styles.Underline>
          <styles.Description color="#424242" text="When it comes to cooking, people feel restricted by both their skill set 
          and options of what they know how to cook. RecipeBook’s goal is to recommend new and welcoming recipes to widen 
          one’s skill."></styles.Description>
          <Box width="100%" height="60px"></Box>
          <styles.Subtitle color="#B54EE5" text="THE PROBLEM"></styles.Subtitle>
          <Box height="24px" width="100%"></Box>
          <styles.Underline color="#424242" text="CUSTOMIZATION"></styles.Underline>
          <styles.Description color="#424242" text="Each person has specific dietary preferences and restrictions that 
          make it difficult to chose what to cook."></styles.Description>
          <Box width="100%" height="60px"></Box>
          <styles.Subtitle color="#B54EE5" text="SKETCHES & MOCK-UPS"></styles.Subtitle>
          <Image src="/pics/sketches.jpg" marginTop="24px" size="100%"></Image>
          <Box width="35px"></Box>
          <styles.Caption color="#424242" text="Sketches for Home and Search tab and information on recipe 
          categories."></styles.Caption>
          <Box width="100%" height="60px"></Box>
          <styles.Subtitle color="#B54EE5" text="PRODUCT STRUCTURE"></styles.Subtitle>
          <Image src="/pics/structure.png" marginTop="24px" marginLeft="20px" marginBottom="60px" size="100%"></Image>
          <styles.Subtitle color="#B54EE5" text="DESIGN DECISION: USER ACCESSIBILITY"></styles.Subtitle>
          <Box height="24px" width="100%"></Box>
          <styles.Description color="#424242" text="For the search tab, I weighed the pros and cons of having a 3-column 
          grid or a 2-column grid to showcase the categories of recipes. Taking into consideration user accessibility 
          and effective visual design, the 2-column grid presents a clearer, simpler, and more accessible display of 
          the categories."></styles.Description>
          <Image src="/pics/comp.png" marginTop="24px" size={["50%","50%","100%","100%"]} marginBottom="60px" width="100%"></Image>
          <styles.Subtitle color="#B54EE5" text="VISUAL DESIGN: COLOR PALETTE"></styles.Subtitle>
          <Box height="24px" width="100%"></Box>
          <Flex width="100%" height="100%">
            <Flex width="775px">
              <styles.Description color="#424242" text="The color palette I chose highlights orange and yellow tones because 
              research shows that orange and yellow colors make people hungry which is ideal when looking for a recipe to 
              cook, increasing user usage and engagement"></styles.Description>
            </Flex>
            <Image src="/pics/colors.png" marginTop="24px" marginLeft="20px" marginBottom="60px" size="30%"></Image>
          </Flex>
          <styles.Subtitle color="#B54EE5" text="PROTOTYPES & HI FIDELITY MOCKUPS"></styles.Subtitle>
          <Box height="24px" width="100%"></Box>
          <Flex flexDirection="row" width="100%" justifyContent="space-between">
            <Flex width="100%" justifyContent="center" flexWrap="wrap">
              <styles.Underline color="#424242" text="BROWSING RECIPES"></styles.Underline>
              <Image src="/pics/browsing.gif" marginTop="20px"size="95%"></Image>
            </Flex>
            <Flex width="20%"></Flex>
            <Flex width="100%" justifyContent="center" flexWrap="wrap">
              <styles.Underline color="#424242" text="SEARCH RECIPES"></styles.Underline>
              <Image src="/pics/search.gif" marginTop="20px"size="95%"></Image>
            </Flex>
            <Flex width="20%"></Flex>
            <Flex width="100%" justifyContent="center" flexWrap="wrap">
              <styles.Underline color="#424242" text="SAVING RECIPES"></styles.Underline>
              <Image src="/pics/saved.gif" marginTop="20px"size="95%"></Image>
            </Flex>
          </Flex>
          <Box width="100%" height="10px"></Box>
          <Flex flexDirection="row" width="100%" justifyContent="space-between" marginBottom="70px">
            <Flex width="100%" justifyContent="center" flexWrap="wrap" marginTop="5%">
              <styles.Caption color="#424242" text="Users can scroll through recommended categories, and the recipe previews 
              allow users to see cooking time, difficulty, servings, and ratings."></styles.Caption>
            </Flex>
            <Flex width="20%"></Flex>
            <Flex width="100%" justifyContent="center" flexWrap="wrap" marginTop="5%">
              <styles.Caption color="#424242" text="Upon clicking on a category, users will be taken 
              to a new page with countless fitting recipes to choose from as well as addtional information 
              about them."></styles.Caption>
            </Flex>
            <Flex width="20%"></Flex>
            <Flex width="100%" justifyContent="center" flexWrap="wrap" marginTop="5%">
              <styles.Caption color="#424242" text="If a user wants to save a recipe they can simply press the black 
              outlined bookmark on the top right corner of the recipe. The bookmark will then be filled and 
              the saved recipes can be accessed through the “Saved” tab."></styles.Caption>
            </Flex>
          </Flex>
          <styles.Subtitle color="#B54EE5" text="MOVING FORWARD"></styles.Subtitle>
          <Box height="24px" width="100%"></Box>
          <styles.Description color="#424242" text="This project allowed me to explore user design interactions on digital platforms. 
          Moving forward, this project is still a work in progress and I intend to conduct further research to maximize user 
          experience and interaction"></styles.Description>
          <Box height="100px" width="100%"></Box>
          <Link href="/">
            <Button variant="link" leftIcon={MdArrowBack} fontSize="28px" fontFamily="Zilla Slab" color="#C273E7" fontWeight="normal"> 
            Return Home</Button>
          </Link>
          <Box height="110px" width="100%"></Box>
        </Flex>
        <Flex width="100%" backgroundColor="#FFCC7E" flexDirection={["column", "column", "row", "row"]}>
          <Flex marginTop="88px" paddingLeft={["48px", "48px", "125px", "125px"]} paddingRight={["48px", "48px", "125px", "125px"]} width={["100%","100%","950px","950px"]} flexDirection="column">
            <styles.Title color="#424242" text="Want to work with me?"></styles.Title>
            <Box height="36px" width="100%"></Box>
            <styles.Subtitle color="#424242" text="I am actively looking for internships and ready 
            to start summer 2021. If you’d like to talk to me over a game of sudoku, get in touch!"></styles.Subtitle>
            <Box height="36px" width="100%"></Box>
            <Text fontFamily="Inconsolata" color="#424242" fontSize={["14px", "14px", "28px", "28px"]} fontWeight="700">
            <Link href="mailto:sydneythibui@gmail.com">Email</Link>  *   <Link href="/resume.pdf" isExternal>
            Resume</Link>  *  <Link href="https://www.linkedin.com/in/sydney-bui/" isExternal>LinkedIn</Link>
            </Text>
          </Flex>
          <Image marginLeft="7%" marginBottom="8%"rounded="full" size= {["125px", "125px", "225px", "225px"]}  src="/pics/me!.jpg" display="flex" marginTop="9%" marginRight="2%"/>
        </Flex>
      </ThemeProvider>
    </div>
  )
}
