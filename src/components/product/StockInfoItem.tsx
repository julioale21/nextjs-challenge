import React from 'react';
import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Stack, Text } from '@chakra-ui/react';
import { centsToDollars } from '@/utils/utils-functions';

interface StockInfoItemProps {
    stock: {
        code: string;
        name: string;
        price: number;
        stock: number;
    }
}

const StockInfoItem: React.FC<StockInfoItemProps> = ({ stock }) => {
  return (
    <Stack 
        width="100%" 
        justifyContent="space-between" 
        marginY={5} 
        alignItems="center"
        flexDirection="row" 
        borderTop={1}
        paddingTop={4}
        borderColor="gray.200"
        borderStyle={'solid'}
    >
        <Stack paddingRight={5} justifyContent="space-between" alignItems="center" flexGrow={1} flexDirection="row">
            <Stack>
                <Text color="teal.500" fontWeight="normal">{stock.name}</Text>
                <Text marginBottom={0} fontSize="xs" fontWeight="light">{stock.stock} units in stock</Text>
                <Text marginY={0} fontSize="x-small" fontWeight="extrabold">Code: {stock.code}</Text>
            </Stack>
            <Text color='teal.600' fontSize='2xl'>{`$${centsToDollars(stock.price)}`}</Text>
        </Stack>
        <Stack>
        <NumberInput width={100} step={1} defaultValue={0} min={0} max={stock.stock}>
        <NumberInputField />
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
            </NumberInput>
        </Stack>
    </Stack>
  )
}

export default StockInfoItem