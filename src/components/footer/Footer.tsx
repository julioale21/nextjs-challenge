import React from "react";
import { Stack } from "@chakra-ui/layout";
import { MenuLinks } from "./";

const Footer: React.FC = () => {
  return (
    <Stack
      alignItems="center"
      as="footer"
      bg="gray.900"
      boxShadow="0px -3px 6px #00000026"
      direction={{ base: "column", lg: "row" }}
      h={["100%", 161]}
      paddingY={[10, 0]}
      justifyContent={{ base: "center", lg: "space-between" }}
      paddingX={{ lg: "calc((100vw - 665px) / 2)" }}
    >
      <MenuLinks />
    </Stack>
  );
};

export { Footer };