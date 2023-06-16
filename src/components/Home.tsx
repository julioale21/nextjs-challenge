'use client'

import React from 'react';
import { Card, CardBody, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react';

import { Product } from '../models/Product';
import Link from 'next/link';
import slugify from 'react-slugify';

interface HomeContentProps {
    products: Product[];
}

const HomeContent: React.FC<HomeContentProps> = ({ products }) => {
  return (
    <Stack height="100%" minH="100vh" flexDirection="row" width="100%">
        <Stack display={['none', 'none', 'flex']} backgroundColor="gray.200" width="300px">
            <Text fontSize="2xl">Products</Text>
        </Stack>
        <Stack flexGrow={1} paddingX={[8, 8, 20]} paddingTop={50} marginBottom={5}>
            <Stack marginBottom={10}>
                <Image objectFit="fill" width="100%" height={350} alt='banner' src='/beer-banner.png' />
            </Stack>
            <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']} gap={6}>
                {products.map((product) => (
                    <GridItem  key={product.id} w='100%'>
                            <Card paddingX={2} _hover={{ backgroundColor: 'rgba(0, 0, 0, 0.03)'}} maxW='xs'>
                                <Link href={`/${slugify(`${product.id}-${product.brand}`)}`}>
                                    <CardBody>
                                        <Stack alignItems="center">
                                            <Image
                                                src={product.image}
                                                alt={product.brand}
                                                borderRadius='lg'
                                                width={150}
                                                height={150}
                                                objectFit={'contain'}
                                            />
                                        </Stack>
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md'>{product.brand}</Heading>
                                            <Text textAlign="justify" fontSize="xs">`${product.information.slice(0, 250)} ...`</Text>
                                            {/* <Text color='blue.600' fontSize='2xl'>
                                                $450
                                            </Text> */}
                                        </Stack>
                                    </CardBody>
                                </Link>
                            </Card>
                    </GridItem>
                ))}
            </Grid>
        </Stack>
    </Stack>
  )
}

export { HomeContent }