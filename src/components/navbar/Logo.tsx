import React from "react";
import { Box, Text } from "@chakra-ui/react";

interface LogoProps {
    text?: String,
    w: any,
    color: any
}

const Logo: React.FC<LogoProps> = ({ text, ...rest }) => {
  return (
    <Box {...rest}>
      <Text fontSize="lg" fontWeight="bold">
        {text}
      </Text>
    </Box>
  )
}

export { Logo }