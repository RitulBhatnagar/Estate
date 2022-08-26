import React from 'react'
import {Link} from "react-router-dom"
import { Box, Flex, Heading, Spacer } from '@chakra-ui/layout';
// import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath, FaRegHeart } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

const Properties = ({data : { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID  }}) => {
  return (
    <Link to = {`/property/${externalID}`}>
      <Flex alignItems= "center">
       <Box bg = "white" width = "390px"
       height = "420px" borderWidth='1px' borderRadius='lg' overflow='hidden' margin="20px" boxShadow = "sm">
        <img  src = {coverPhoto?.url} alt ={agency.name} style = {{width : "400px", height : "200px", objectFit:"cover"}}/>
         <Box bg = "white" width = "390px" p ='4'>
            <Box display = "flex" alignItems='baseline' bg = "white">
            <Box bg = "white" marginBottom={2} fontSize = "xl" paddingRight='3' color='green.400'>{isVerified && <GoVerified  />}</Box>
            </Box>
            <Flex bg  = "white">
            <Heading bg = "white" fontWeight='bold' size = "lg" as = "h6" color="purple.700"> ${millify(price)}/{ <small style = {{color : "gray" , background : "white" ,fontFamily : "Raleway"}}>{rentFrequency}</small>}</Heading>
            <Spacer style = {{background : "white"}}/>
            <FaRegHeart style = {{fontSize : "25px", backgroundColor : "white"}}></FaRegHeart>
            </Flex>
         </Box>
        <Heading fontFamily= "poppins" p = {4} as = "h6" size = "md" bg = "white">
          {agency?.name}
        </Heading>
        <Box display='flex' alignItems  = "end"  flexDirection="row" justifyContent="space-evenly"
        fontFamily  = "poppins"
        color  = "gray"
        fontSize="18px"
        bg = "white"
        >
          
          <Flex alignItems='center' paddingBottom={0} 
          marginBottom={0}
          justifyContent='space-between' w='380px' color='gray.400' bg = "white">
            <FaBed />
          {rooms} beds
           | <FaBath /> {baths}  bathrooms | {millify(area)} sqft <BsGridFill />
        </Flex>
          </Box>
        </Box>
        </Flex>
    </Link>
  )
}

export default Properties