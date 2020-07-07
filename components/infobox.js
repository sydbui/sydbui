import HoverText from "./hoverfunc";
import * as styles from "../pages/styles";
import {  
  Flex, 
  Box, 
} from "@chakra-ui/core";

export default function InfoBox(props) {
  return <div>
      <styles.Header fontFamily="Zilla Slab" fontSize="48px">{props.title}</styles.Header>
      <styles.SubHeader fontFamily="Inconsolata">{props.subtitle}</styles.SubHeader>
      <Box height="36px" width="100%"></Box>
      <Flex width="100%" marginBottom="24px">
        <styles.BodyText fontFamily="Inconsolata">{props.body}</styles.BodyText>
      </Flex>
      <HoverText img={props.img} link={props.link} check={props.check}></HoverText>
  </div>
}