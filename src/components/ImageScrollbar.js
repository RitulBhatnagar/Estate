import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image } from '@chakra-ui/react';
const ImageScrollbar = ({data}) => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
    <Slider {...settings}>
      
    {data.map((item) => (
        <Box width='910px' itemId={item.id} overflow='hidden' p='1'>
          <Image placeholder="blur" blurDataURL={item.url} src={item.url} width={1000} height={500}  sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" />
        </Box>
      ))}
      
    </Slider>
    </div>
  )
}

export default ImageScrollbar