import React from 'react'
import {useParams} from "react-router-dom"
import { useGetPropertyDetailsByIdQuery } from '../services/EstateApi';
import { Box, Flex, Spacer, Text, Heading, Badge } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import ImageScrollbar from '../components/ImageScrollbar';
import  Loader  from "../components/Loader"
const Property = () => {
  const {id} = useParams();
    const {data, isLoading} = useGetPropertyDetailsByIdQuery(id);
    // const  propertyDetails =  { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } 
  return (
    <>
   {
    isLoading ? <Loader/> : ( <Box maxWidth="1000px" margin='auto' p='4'>
    {data?.photos && <ImageScrollbar data={data?.photos} />}
    <Box w='full' p='6'>
      <Flex paddingTop='2' alignItems='center'>
        <Box paddingRight='3' color='green.400' fontSize = "30px">{data?.isVerified && <GoVerified />}</Box>
        <Heading as = 'h3'  fontWeight='bold' fontFamily = "Raleway">
          $ {millify(data?.price)} {data?.rentFrequency && `/${data?.rentFrequency}`}
        </Heading>
        <Spacer />
        <Avatar size='sm' src={data?.FaBathagency?.logo?.url}></Avatar>
      </Flex>
      <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
        {data?.rooms}<FaBed /> | {data?.baths} <FaBath /> | {millify(data?.area)} sqft <BsGridFill />
      </Flex>
    </Box>
    <Box marginTop='2'>
      <Heading as = 'h1' marginBottom='2' fontWeight='bold' fontFamily = "Raleway">{data?.title}</Heading>
      <Text lineHeight='2' fontFamily = "Raleway" color='gray.600'>{data?.description}</Text>
    </Box>
    <Flex flexWrap='wrap' textTransform='uppercase' justifyContent='space-between'>
      <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
        <Text fontWeight = "bold" fontFamily = "Raleway">Type</Text>
        <Badge fontFamily = "poppins"  ml='1' fontSize='1em' colorScheme='green'>{data?.type}</Badge>
      </Flex>
      <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
        <Text fontWeight = "bold" fontFamily = "Raleway">Purpose</Text>
        <Badge fontFamily = "poppins"  ml='1' fontSize='1em' colorScheme='green'>{data?.purpose}</Badge>
      </Flex>
      {data?.furnishingStatus && (
        <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3' >
          <Text fontWeight = "bold" fontFamily = "Raleway">Furnishing Status</Text>
          <Badge fontFamily = "poppins"  ml='1' fontSize='1em' colorScheme='green'>{data?.furnishingStatus}</Badge>
        </Flex>
      )}
    </Flex>
    <Box>
      {data?.amenities.length && <Text fontSize='2xl' fontWeight='black' marginTop='5'>Facilites:</Text>}
        <Flex flexWrap='wrap'>
          {data?.amenities?.map((item) => (
              item?.amenities?.map((amenity) => (
                <Text key={amenity.text} fontWeight='bold' color='blue.400' fontSize='l' p='2' bg='gray.200' m='1' borderRadius='5'>
                  {amenity.text}
                </Text>
              ))
          ))}
        </Flex>
    </Box>
  </Box>)
   }
   
  </>
  )
}

export default Property