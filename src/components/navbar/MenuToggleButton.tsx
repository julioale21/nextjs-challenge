import React from "react";
import { Box } from "@chakra-ui/react";

import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

interface MenuToggleButtonProps {
    toggle: any,
    isOpen: boolean
}

const MenuToggle: React.FC<MenuToggleButtonProps> = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  )
}

export { MenuToggle}