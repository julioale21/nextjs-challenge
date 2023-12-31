import React from 'react';
import { Flex } from '@chakra-ui/react';

interface NavBarContainerProps {
    children: React.ReactNode;
}

const NavBarContainer: React.FC<NavBarContainerProps> = ({ children, ...props }) => {
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        p={8}
        paddingX={[5, 32]}
        bg={["gray.900"]}
        color={["white"]}
        position={"fixed"}
        zIndex={999}
        {...props}
      >
        {children}
      </Flex>
    )
  }

export { NavBarContainer }