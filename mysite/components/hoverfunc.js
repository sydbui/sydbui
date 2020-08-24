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
import {MdArrowForward} from "react-icons/md";

export default function HoverText(props) {
  const external = 
  <Flex>
    <Link href={props.link} isExternal>
      <Button variant="link" rightIcon={MdArrowForward} fontSize={["14px", "14px", "28px", "28px"]} fontFamily="Inconsolata" color= "#FFCC7E">
        Learn More
      </Button>
    </Link>
    <Box width="5%"></Box>
    <Link href={props.github} isExternal>
      <Button variant="link" rightIcon={MdArrowForward} fontSize={["14px", "14px", "28px", "28px"]} fontFamily="Inconsolata" color= "#FFCC7E">
        GitHub
      </Button>
    </Link>
    </Flex>;
  const internal = 
    <Link href={props.link}>
    <Button variant="link" rightIcon={MdArrowForward} fontSize={["14px", "14px", "28px", "28px"]} fontFamily="Inconsolata" color= "#FFCC7E">
      Learn More
    </Button>
    </Link>;
  const linker = props.check ? external : internal;
  return <div>
  <Popover trigger="hover" placement={props.placement}>
    <PopoverTrigger>
      {linker} 
    </PopoverTrigger>
    <PopoverContent backgroundColor="transparent" border="0px">
      <Image src={props.img} alt="cool image"/>
    </PopoverContent>
    </Popover>
  </div>
}