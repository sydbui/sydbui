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
    <Text fontFamily="Inconsolata" color={props.color} fontSize="24px" lineHeight="150%" letterSpacing="1px" fontWeight="bold">{props.text}</Text>
  )
}

export function Description(props) {
  return (
    <Text fontFamily="Inconsolata" color={props.color} fontSize="24px" lineHeight="150%" letterSpacing="1px">{props.text}</Text>
  )
}

export function Underline(props) {
  return (
    <Text fontFamily="Inconsolata" color={props.color} fontSize="24px" lineHeight="150%" letterSpacing="1px" as="u" fontWeight="bold">{props.text}</Text>
  )
}

export function Caption(props) {
  return (
    <Text fontFamily="Inconsolata" color={props.color} fontSize="20px" lineHeight="150%" letterSpacing="1px" textAlign="center">{props.text}</Text>
  )
}

