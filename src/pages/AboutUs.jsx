import React from "react";
import { Box, Container, Heading, Text, VStack, List, ListItem, Link } from "@chakra-ui/react";
// Removed the incorrect import line for react-icons

const AboutUs = () => {
  return (
    <Container maxW="container.xl">
      <Box as="header" d="flex" justifyContent="space-between" alignItems="center" p={4}>
        {/* Logo will be added here */}
      </Box>
      <VStack spacing={8} as="main" py={10}>
        <Heading as="h1">Erfahren Sie mehr über ProBau – Ihr Partner für Bauprojekte</Heading>
        <Text>Willkommen bei ProBau, der innovativen Plattform, die Bauvorhaben in ganz Deutschland revolutioniert. Unsere Mission ist es, Bauherren und Fachleute aus der Baubranche zusammenzubringen, um jedes Bauprojekt effizient, transparent und erfolgreich zu gestalten.</Text>
        {/* More sections will be added here */}
      </VStack>
      {/* Footer will be added here */}
    </Container>
  );
};

export default AboutUs;
