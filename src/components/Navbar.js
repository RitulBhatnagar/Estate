import {Link }from 'react-router-dom';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
  <Flex p='2' borderBottom='1px' borderColor='gray.100'>
    <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
      <Link to= {'/'} >Estate</Link>
    </Box>
    <Spacer />
    <Box>
      <Menu bg = "white">
        <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' color='red.400' />
        <MenuList>
          <Link to={'/'} style = {{backgroundColor : "white"}} >
            <MenuItem  icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link to={'/search/purpose/for-sale'} >
            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
          </Link>
          <Link to={'/search/purpose/for-rent'} >
            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;