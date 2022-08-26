import React from 'react'
import {Flex, Box} from "@chakra-ui/react"
import Properties from "../components/Properties"
import Banner from '../components/Banner'
import { useGetPropertyListForRentQuery, useGetPropertyListForSaleQuery } from '../services/EstateApi'

const Home = () => {
  const {data : rent} = useGetPropertyListForRentQuery();
  const {data : sale} = useGetPropertyListForSaleQuery();
  const rentProperties = rent?.hits;
  const saleProperties = sale?.hits;
   console.log(rentProperties);
  return (
    <Box alignItems = "center">
        <Banner
        purpose = "RENT A HOME"
        title1 = "Rental Homes for"
        title2 = "Everyone"
        desc1 = "Explore Apartments, Villas, Homes"
        desc2 = "and more"
        buttonText = "Explore Renting"
        linkName = "/search/purpose/for-rent"
        
        />
        <Flex  flexWrap = "wrap">
          {
            rentProperties?.map((data) => (
              <Properties data = {data} key = {data.id}/>
            ))
          }
        </Flex>
        <Banner
        purpose = "BUY A HOME"
        title1 = "Find, Buy and Own Your"
        title2 = "Dream Home"
        desc1 = "Explore Apartments, Villas, Homes"
        desc2 = "and more"
        buttonText = "Explore Buying"
        linkName = "/search/purpose/for-sale"
        />
           <Flex  flexWrap = "wrap">
          {
            saleProperties?.map((data) => (
              <Properties data = {data} key = {data.id}/>
            ))
          }
        </Flex>
    </Box>
  )
}

export default Home