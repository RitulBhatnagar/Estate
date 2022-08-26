import { Spinner, Box } from '@chakra-ui/react'

import React from 'react'

const Loader = () => {
  return (
    <Box height = "1000px" textAlign = "center" fontSize=  "3rem">
    <Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
  />
  </Box>
  )
}

export default Loader