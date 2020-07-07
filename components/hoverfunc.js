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
import * as styles from '../pages/styles';
import {MdArrowForward} from "react-icons/md";

export default function HoverText(props) {
  return <div>
  <Popover trigger="hover" placement="right-end">
    <PopoverTrigger>
      <Button variant="link" rightIcon={MdArrowForward} fontSize="28px" fontFamily="Inconsolata" color= "#FFCC7E">
        Learn More
      </Button>
    </PopoverTrigger>
    <PopoverContent backgroundColor="transparent" border="0px">
      <Image src={props.img} alt="cool image" />
    </PopoverContent>
    </Popover>
  </div>
}