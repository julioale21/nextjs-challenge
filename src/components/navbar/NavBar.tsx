import React from 'react';
import { NavBarContainer } from "./NavBarContainer";
import { Logo } from './Logo';
import { MenuToggle } from './MenuToggleButton';
import { MenuLinks } from './MenuLinks';


const NavBar: React.FC= (props) => {
    const [isOpen, setIsOpen] = React.useState(false)
  
    const toggle = () => setIsOpen(!isOpen)
  
    return (
      <NavBarContainer {...props}>
        <Logo
          w="200px"
          color={["red", "red", "red", "red"]}
          text="NEXTJS CHALLENGE"
        />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} />
      </NavBarContainer>
    )
  }

export { NavBar }