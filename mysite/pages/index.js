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
  Heading,
} from "@chakra-ui/core";
import {BsArrowDown} from "react-icons/bs";
import InfoBox from '../components/infobox';
import HoverText from '../components/hoverfunc';
import * as styles from '../components/customtext';
import { useState, View } from 'react';

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

  const [profile, setProfile] = useState(null);
  const [club, setClub] = useState(null);
  const [embroidery, setEmbroidery] = useState(null);

  function popUp(image, margin) {
    const ref = "/pics/" + image;
    if (image) {
      return (
        <div style={{position: 'absolute'}}>
          <Image src={ref} marginLeft={margin} width="28%" />
        </div>
      )
    }
  }

  return (
    <div className="container">
      <Head>
        <title>syd's site</title>
        <link href="https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&display=swap" rel="stylesheet"></link>
        <link rel="icon" type="image/png" href="/pics/_.png" />
      </Head>

      <ThemeProvider>
        <CSSReset config={config} />
        <Flex background-color= "transparent" marginLeft={["48px", "48px", "125px", "125px"]} marginRight={["48px", "48px", "125px", "125px"]} flexWrap="wrap" flexDirection="row" marginTop="80px">
          <Flex>
            <styles.Header color="#FFCC7E" text="*"></styles.Header>
          </Flex>
          <Box width="100%"></Box>
          <Flex>
            <Heading fontFamily="Zilla Slab" fontSize={["32px", "32px", "48px","48px"]} fontWeight="regular" lineHeight="160%">
              <Text as="u" fontFamily="Zilla Slab" onMouseEnter={()=>setProfile("kribz.jpg")} onMouseLeave={()=>setProfile(null)}>
                Sydney Bui
                {popUp(profile, "18%")}
              </Text>  is a software developer, designer, and student at UC Berkeley. Her work is geared 
              towards <Text as="u" fontFamily="Zilla Slab" onMouseEnter={()=>setClub("blueprint.JPEG")} onMouseLeave={()=>setClub(null)}>
               {popUp(club, "50%")}
                <Link href="https://calblueprint.org/" isExternal>
                building a better world.
                </Link>
              </Text> She's passionate about improving inequality in education and bridging the gender gap within the tech 
              industry. She also enjoys <Text  as="u" fontFamily="Zilla Slab" onMouseEnter={()=>setEmbroidery("appa.JPG")} onMouseLeave={()=>setEmbroidery(null)}>
                <Link href="/embroidery">
                embroidery.
                {popUp(embroidery, "35%")}
                </Link>
              </Text>
            </Heading>
          </Flex>
          <Flex justifyContent="space-between" width="100%">
            <Flex marginTop="90px">
              <Text fontFamily="Inconsolata" color="#FFCC7E" fontSize={["20px", "20px", "28px", "28px"]}>
              <Link href="mailto:sydneythibui@gmail.com">Email</Link> *  <Link href="/resume.pdf" isExternal>
              Resume</Link> * <Link href="https://www.linkedin.com/in/sydney-bui/" isExternal>LinkedIn</Link> * <Link
               href="https://github.com/sydbui" isExternal>GitHub</Link>
              </Text>
            </Flex>
            <Box as={BsArrowDown} size={["75px", "75px", "150px", "150px"]} color="#FFCC7E" marginTop="5%"></Box>
          </Flex>
          <Box height="192px" width="100%"></Box>
          <InfoBox title="OGSC Student Portal" subtitle="SOFTWARE ENGINEERING (TypeScript)" body="I am currently working as a full-stack developer for Oakland
          Genesis Soccer Club (OGSC) through Blueprint (student organization) to create a student portal for its participants. So far, I've
          created API endpoints as well as complex front-end features using Prisma and React." img="" 
          link="https://www.oaklandgenesis.org/"  github="https://github.com/calblueprint/ogsc" check={true}  font="Inconsolata" size="28px" color="#FFCC7E" placement="top"></InfoBox>
          <Box height="128px" width="100%"></Box>
          <InfoBox title="1951 Coffee Trainee App" subtitle="SOFTWARE ENGINEERING (TypeScript)" body="I worked with a team of 6 people to develop a full-stack mobile app with React Native 
          for 1951 Coffee Company, a Berkeley non-profit empowering refugees, to streamline its refugee barista program. I built intuitive front-end features and React components with Typescript and CSS." img="/pics/1951.jpg" 
          link="https://apps.apple.com/us/app/1951-coffee-trainee/id1496686726"  github="https://github.com/calblueprint" check={true}  font="Inconsolata" size="28px" color="#FFCC7E" placement="top"></InfoBox>
          <Box height="128px" width="100%"></Box>
          <InfoBox title="Trivia Game Website" subtitle="SOFTWARE ENGINEERING (JavaScript)" body="Using React JS, I pulled from an open API making both static and dynamic requests in order to create a trivia game." img="/pics/trivia.png" 
          link="https://triviaproj.vercel.app/" github="https://github.com/sydbui/triviaproj" check={true}  font="Inconsolata" size="28px" color="#FFCC7E" placement="top"></InfoBox>
          <Box height="128px" width="100%"></Box>
          <InfoBox title="RecipeBook iOS App" subtitle="PRODUCT DESIGN" body="I designed an iOS App that allows users with 
          limited cooking knowledge to easily find a variety of new recipes through user research and design." img="/pics/recipepic.png" link="/swag" check={false} placement="right"></InfoBox>
          <Box height="192px" width="100%"></Box>
        </Flex>
        <Flex width="100%" backgroundColor="#FFCC7E" flexDirection={["column", "column", "row", "row"]}>
          <Flex marginTop="88px" paddingLeft={["48px", "48px", "125px", "125px"]} paddingRight={["48px", "48px", "125px", "125px"]} width={["100%","100%","1000px","1000px"]} flexDirection="column">
            <styles.Title color="#424242" text="Want to work with me?"></styles.Title>
            <Box height="36px" width="100%"></Box>
            <styles.Subtitle color="#424242" text="I am actively looking for internships and ready 
            to start summer 2021. If you’d like to talk to me over a game of sudoku, get in touch!"></styles.Subtitle>
            <Box height="36px" width="100%"></Box>
            <Text fontFamily="Inconsolata" color="#424242" fontSize={["14px", "14px", "28px", "28px"]} fontWeight="700">
            <Link href="mailto:sydneythibui@gmail.com">Email</Link>  *   <Link href="/resume.pdf" isExternal>
            Resume</Link>  *  <Link href="https://www.linkedin.com/in/sydney-bui/" isExternal>LinkedIn</Link> * <Link
               href="https://github.com/sydbui" isExternal>GitHub</Link>
            </Text>
          </Flex>
          <Image marginLeft="4%" marginBottom="8%"rounded="full" size= {["125px", "125px", "225px", "225px"]}  src="/pics/me!.jpg" display="flex" marginTop="9%" marginRight="2%"/>
        </Flex>
      </ThemeProvider>
    </div>
  )
}
