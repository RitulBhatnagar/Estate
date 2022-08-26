import React from 'react'
import {Link} from "react-router-dom"
import {Flex, Box, Text, Button, Heading, Divider} from "@chakra-ui/react"
const Banner = ({purpose, title1, title2, desc1, desc2, linkName, buttonText, imageUrl}) => {
  return (
    <Flex flexwrap = "wrap" justifyContent = "center" alignItems = "center" m = "10">
<Box p = "5" bg = "white" boxShadow = "lg" width = "100vw" >
  <Heading color = "gray.500" as = "h1" textAlign="center" letterSpacing={6} fontFamily = "Raleway" >{purpose}</Heading>
  <Divider/>
  <Text letterSpacing="4px" marginTop = "10px" fontFamily = "poppins" textAlign={"center"} fontSize="xl" fontWeight = "medium">{title1}  {title2}</Text>
  <Text color = "gray.700" fontSize="lg" textAlign="center"
   paddingTop = "3" paddingBottom = "3" fontWeight = "medium">{desc1} <br/> {desc2}</Text>
  <Box  textAlign="center">
  <Button fontSize = "xl" fontFamily = "poppins" colorScheme='purple' variant = "ghost">
    <Link to = {linkName} >
      {buttonText}
    </Link>
   </Button>
  </Box>
</Box>
  </Flex>
  )
}

export default Banner