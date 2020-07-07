import HoverText from "./hoverfunc";
import * as styles from "./customtext";
import {  
  Flex, 
  Box, 
  Text,
} from "@chakra-ui/core";

export default function InfoBox(props) {
  return <div>
      <styles.Title text={props.title}></styles.Title>
      <styles.Subtitle color="#73B5A1" text={props.subtitle}></styles.Subtitle>
      <Box height="36px" width="100%"></Box>
      <Flex width="100%" marginBottom="24px">
        <styles.Subtitle color="white" text ={props.body}></styles.Subtitle>
      </Flex>
      <HoverText img={props.img} link={props.link} check={props.check}></HoverText>
  </div>
}