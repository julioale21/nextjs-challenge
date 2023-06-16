import { Text } from "@chakra-ui/react";
import Link from "next/link";

interface MenuItemProps {
    isLast?: boolean;
    to?: string;
    children: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ children, isLast, to = "/", ...rest }) => {
    return (
      <Link href={to}>
        <Text color="white" display="block" {...rest}>
          {children}
        </Text>
      </Link>
    )
  }

export { MenuItem }