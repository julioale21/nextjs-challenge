import React from 'react';
import Link from 'next/link';
import slugify from 'react-slugify';
import { 
    Card, 
    CardBody, 
    Grid, 
    GridItem, 
    Heading, 
    Image, 
    Stack, 
    Text 
} from '@chakra-ui/react';
import { Product } from '@/models/Product';

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
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
                                    <Text textAlign="justify" fontSize="xs">`${product.information?.slice(0, 250)} ...`</Text>
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
  )
}

export default ProductList