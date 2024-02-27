import React from "react";
import { Flex, Box, Heading, Button, Stack, useColorModeValue } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const Navigation = () => {
  const color = useColorModeValue("brand.700", "brand.800");

  return (
    <Flex as="nav" w="full" justifyContent="space-between" alignItems="center">
      <Heading size="lg" color={color}>
        ProBau
      </Heading>
      <Stack direction="row" spacing={4}>
        <Box as="a" href="#" p={2} color={color}>
          Home
        </Box>
        <Box as="a" href="#" p={2} color={color}>
          Über uns
        </Box>
        <Box as="a" href="#" p={2} color={color}>
          Dienstleistungen
        </Box>
        <Box as="a" href="#" p={2} color={color}>
          Projekte
        </Box>
        <Box as="a" href="#" p={2} color={color}>
          Für Unternehmen
        </Box>
        <Box as="a" href="#" p={2} color={color}>
          Ressourcen
        </Box>
        <Box as="a" href="#" p={2} color={color}>
          Kontakt
        </Box>
      </Stack>
    </Flex>
  );
};

export default Navigation;
