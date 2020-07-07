import { 
  Text,
} from "@chakra-ui/core";

export function Header(props) {
  return (
    <Text fontFamily="Zilla Slab" color={props.color} fontSize="64px" lineHeight="160%">{props.text}</Text>
  )
}

export function Title(props) {
  return (
    <Text fontFamily="Zilla Slab" color={props.color} fontSize="48px" lineHeight="160%">{props.text}</Text>
  )
}

export function Subtitle(props) {
  return (
    <Text fontFamily="Inconsolata" color={props.color} fontSize="28px" lineHeight="150%" letterSpacing="3px">{props.text}</Text>
  )
}