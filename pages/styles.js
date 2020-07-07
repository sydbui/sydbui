import styled from 'styled-components';
import {Button, Text, Flex } from "@chakra-ui/core";

export const Header = styled(Text)`
  lineHeight: 160%;
  font-Size: 64px; 
  font-weight: normal;
  color: #EBC1FF;
  width:100%;
`
export const Main = styled(Flex)`
  background-color: transparent;
  margin-left: 125px;
  margin-right: 126px;
  margin-top: 80px;
  flex-wrap: wrap;
`
export const Links = styled(Text)`
  font-size: 28px;
  font-weight: bold;
  lineHeight: 7%;
  color: #FFCC7E;
`
export const LeftContainter = styled(Flex)`
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;
`
export const SubHeader = styled(Text)`
  lineHeight: 150%;
  font-Size: 28px; 
  font-weight: normal;
  letter-spacing: 3px;
  color: #73B5A1;
`
export const BodyText = styled(SubHeader)`
  font-Size: 28px;
  color: white;
`