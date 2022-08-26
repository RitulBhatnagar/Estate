import React, {useState} from 'react'
import {Flex, Box, Text, Heading} from "@chakra-ui/react"
import { useParams } from 'react-router-dom'
import Properties from '../components/Properties'
import { useGetPropertyForSaleByFilterQuery} from '../services/EstateApi'
import SearchFilter from '../components/SearchFilter'
import Loader from "../components/Loader"
const SearchByRent = () => {
  const {id} = useParams();
   const [rentFrequency, setRentFrequency] = useState('yearly');
   const [minPrice, setminPrice] =  useState('0');
  const [maxPrice, setmaxPrice] =  useState('1000000');
  const [sort, setSort] =  useState('price-desc');
  const [categoryExternalID, setCategoryExternalId]=  useState('4');
    // const locationID = '5002'
  const {data, isLoading} = useGetPropertyForSaleByFilterQuery({  categoryExternalID, rentFrequency, minPrice, maxPrice,sort});

  const properties = data?.hits;
  console.log(properties)
  return (
    <>
    {
      isLoading ? <Loader/> : (<Box>
        <Flex
        cursor= "pointer"
        bg = "white"
        borderBottom = "1px"
   
        p = "2"
        fontWeight= " black"
        fontSize = "lg"
        justifyContent = "center"
        alignItems = "center"
        >
         <Text>
          Search Property By Filters
         </Text>
         <SearchFilter setRentFrequency = {setRentFrequency} setCategoryExternalId = {setCategoryExternalId}  setmaxPrice = {setmaxPrice} setminPrice = {setminPrice}  setSort = {setSort}  />
        </Flex>
        <Text fontSize="2xl" p = "4" fontWeight = "bold" fontFamily = "Raleway">
          Properties for {id}
        </Text>
        <Flex flexWrap = "wrap">
          {
           properties?.map((data) => <Properties data={data} key={data.id} />)
          }
           { properties.length === 0 && (
        <Flex justifyContent='center' alignItems='center' flexDir='column' marginTop='5' marginBottom='5'>
               <Heading as = "h1" fontFamily="Raleway" marginTop='3'> Sorry! No Result Found.</Heading>
        </Flex>
      )}
        </Flex>

      </Box>)
    }
      </>
  )
}

export default SearchByRent;