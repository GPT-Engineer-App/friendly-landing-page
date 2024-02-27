import React from "react";
import { Box, Button, Container, Heading, Text, VStack, Stack, useColorModeValue, Image, Flex, Link } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const bg = useColorModeValue("brand.600", "brand.700");
  const color = useColorModeValue("brand.700", "brand.800");

  return (
    <Container maxW="container.xl" p={0}>
      {/* Header Area */}
      <Flex as="header" w="full" p={5} justifyContent="space-between" alignItems="center">
        <Heading as="a" href="/" size="lg" color={color} cursor="pointer">
          ProBau
        </Heading>
      </Flex>

      {/* Hero Area */}
      <VStack w="full" h="100vh" p={10} spacing={10} alignItems="flex-start" bg={bg}>
        <Heading color={color} size="2xl">
          Verwirklichen Sie Ihr Bauprojekt mit ProBau – Ihre Experten für Bauvorhaben
        </Heading>
        <Text fontSize="lg" color={color}>
          Entdecken Sie die führende Online-Plattform für Bauprojekte. ProBau verbindet Sie mit erfahrenen Bauunternehmen und Handwerkern in ganz Deutschland. Starten Sie Ihr Projekt heute und erleben Sie Bauvorhaben, die Effizienz, Qualität und Nachhaltigkeit in den Mittelpunkt stellen.
        </Text>
        <Stack direction="row" spacing={4}>
          <Button bgColor="brand.900" color="brand.800" rightIcon={<FaArrowRight />}>
            Projekt starten
          </Button>
          <Button variant="outline" colorScheme="brand" rightIcon={<FaArrowRight />}>
            Mehr erfahren
          </Button>
        </Stack>
      </VStack>

      {/* Rest of the content goes here */}

      {/* Footer Area */}
      <Flex as="footer" w="full" p={5} justifyContent="space-between" alignItems="center" bg="brand.700">
        {/* Footer content goes here */}
      </Flex>
    </Container>
  );
};

export default Home;
