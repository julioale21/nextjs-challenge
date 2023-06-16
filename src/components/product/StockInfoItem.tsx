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
        alignItems="end"
        flexDirection="row" 
    >
        <Stack paddingRight={5} justifyContent="space-between" alignItems="end" flexGrow={1} flexDirection="row">
            <Stack>
            <Text fontSize="xs" fontWeight="extrabold">Code: {stock.code}</Text>
            <Text fontWeight="light">{stock.name}</Text>
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