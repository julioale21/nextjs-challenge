'use client'

import React from 'react';
import { Card, CardBody, Divider, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react';

import { Product } from '../models/Product';
import Link from 'next/link';
import slugify from 'react-slugify';
import { Filter } from './filter/Filter';
import { alesBeers, lagersBeers } from '@/constants/beers-types';
import ProductList from './product/ProductList';

interface HomeContentProps {
    products: Product[];
}

const HomeContent: React.FC<HomeContentProps> = ({ products }) => {
  return (
    <Stack height="100%" minH="100vh" flexDirection="row" width="100%">
        <Stack 
            paddingX={5} 
            display={['none', 'none', 'flex']} 
            width="300px"
        >
            <Text 
                textTransform="uppercase" 
                fontSize={"4xl"} 
                marginTop={10} 
                fontWeight="extrabold"
                textAlign={"center"}
            >
                Beers
            </Text>
            <Divider />
            <Text fontWeight="bold" fontSize="2xl">Filters</Text>
            <Filter 
                isOpen 
                name='Lagers' 
                currentFilter='All' 
                values={lagersBeers}
                onFilterSelected={() => console.log('//TODO:')} 
            />
            <Filter 
                isOpen 
                name='Ales' 
                currentFilter='All' 
                values={alesBeers} 
                onFilterSelected={() => console.log('//TODO:')} 
            />
        </Stack>
        <Stack flexGrow={1} paddingX={[8, 8, 20]} paddingTop={50} marginBottom={5}>
            <Stack marginBottom={10}>
                <Image 
                    objectFit="fill" 
                    width="100%" 
                    height={[200, 350]} 
                    alt='banner' 
                    src='/beer-banner.png' 
                />
            </Stack>
            <ProductList products={products} />
        </Stack>
    </Stack>
  )
}

export { HomeContent }