'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Product } from '@/models/Product';
import { 
  Button, 
  ButtonGroup, 
  Card, 
  CardBody, 
  CardFooter, 
  Divider, 
  Flex, 
  Heading, 
  Image, 
  Stack, 
  Text 
} from '@chakra-ui/react';
import StockInfoItem from './product/StockInfoItem';


const ProductDetail: React.FC<Product> = ({ id, image, brand, information, stocks, ...rest }) => {

  const [curerntStocks, setCurerntStocks] = useState(stocks);

  useEffect(() => {
    const fetchStocks = async () => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/stock-price/${id}`);
      const stocks = await response.data.stocks;
      setCurerntStocks(stocks);
    };

    setInterval(fetchStocks, 5000);
    /* eslint-disable-next-line */
  }, []);

  console.log('stocks', stocks)
  return (
   <Stack flexDirection="row" justifyContent="center" width="100%">
    <Flex maxW={1000} flexDirection={["column", "row"]} mt="16">
        <Stack alignItems="center" width={["100%", "50%"]}>
          <Image objectFit={"contain"} maxHeight={[300, 500]} maxW={[200, 400]} alt={brand} src={image} />
        </Stack>
        <Stack width={["100%", "50%"]}>
          <Card>
            <CardBody>
              <Heading textAlign={["center", "start"]} size="lg" mb="4">
                {brand}
              </Heading>
              <Text textAlign={["justify"]}>
                {information}
              </Text>
              {curerntStocks?.length && curerntStocks.map((stock, index) => (
                <StockInfoItem key={index} stock={stock} />
              ))}
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup 
                  display={"flex"} 
                  justifyContent={["center", "start"]} 
                  flexDirection={"row"} 
                  spacing='2'
                  width={"100%"} 
                >
                  <Button variant='solid' colorScheme="teal">
                    Buy now
                  </Button>
                  <Button variant='ghost' colorScheme='teal'>
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
          </Card>
        </Stack>
  
      </Flex>
    </Stack>
  )
}

export default ProductDetail