import React, {useState}from 'react'
import { Flex, Select, Box } from '@chakra-ui/react';
import {filterData, getFilterValues} from "../utils/FilterData"
const SearchFilter = ({setRentFrequency,  setCategoryExternalId,setmaxPrice, setminPrice, setSort}) => {
  const [filters] = useState(filterData);

  const searchProperties = (filterValues) => {
    const values = getFilterValues(filterValues);
    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
     
         if(item.name==='rentFrequency'){
          setRentFrequency(item.value);
          console.log(item.value);
        }
         if(item.name==='minPrice'){
          setminPrice(item.value);
        }
        if(item.name==='maxPrice'){
          setmaxPrice(item.value);
        }
        if(item.name === 'sort'){
          setSort(item.value);
        }
        if(item.name==='categoryExternalID'){
          setCategoryExternalId(item.value);       
        }
      }
    });
  }
  return (
    <Flex  p = "4"
    justifyContent="center" flexWrap = "wrap">
     {
      filters.map((filter) => (
        <Box key = {filter.queryName}>
          <Select 
          fontFamily = "poppins"
          placeholder = {filter.placeholder}
          width = "fit-content"
          p = "2"
          variant = "filled"
          size = "lg"
          onChange = {(e) => searchProperties({[filter.queryName] : e.target.value})}
          >
            {filter?.items?.map((items) => (
              <option value = {items.value} key  = {items.id}>{items.name}</option>
            ))}
          </Select>
        </Box>
      ))
     }
    </Flex>
  )
}

export default SearchFilter