import { 
  Text,
  Heading,
} from "@chakra-ui/core";

export function Header(props) {
  return (
    <Heading fontFamily="Zilla Slab" color={props.color} size="2xl" lineHeight="160%">{props.text}</Heading>
  )
}

export function Title(props) {
  return (
    <Text fontFamily="Zilla Slab" color={props.color} fontSize={["24px", "24px", "48px", "48px"]} lineHeight="160%">{props.text}</Text>
  )
}

export function Subtitle(props) {
  return (
    <Text fontFamily="Inconsolata" color={props.color} fontSize={["14px", "14px", "24px", "24px"]} lineHeight="150%" letterSpacing="1px" fontWeight="bold">{props.text}</Text>
  )
}

export function Description(props) {
  return (
    <Text fontFamily="Inconsolata" color={props.color} fontSize={["14px", "14px", "24px", "24px"]}  lineHeight="150%" letterSpacing="1px">{props.text}</Text>
  )
}

export function Underline(props) {
  return (
    <Text fontFamily="Inconsolata" color={props.color} fontSize={["14px", "14px", "24px", "24px"]}  lineHeight="150%" letterSpacing="1px" as="u" fontWeight="bold">{props.text}</Text>
  )
}

export function Caption(props) {
  return (
    <Text fontFamily="Inconsolata" color={props.color} fontSize={["12px", "12px", "20px", "20px"]}  lineHeight="150%" letterSpacing="1px" textAlign="center">{props.text}</Text>
  )
}

