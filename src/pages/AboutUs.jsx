import React from "react";
import { Box, Container, Heading, Text, VStack, Flex, HStack, Link, Icon, Input, Button, useColorModeValue } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const AboutUs = () => {
  return (
    <Container maxW="container.xl">
      {/* Header-Bereich */}
      <Flex as="header" w="full" p={5} justifyContent="space-between" alignItems="center">
        <Heading as="a" href="/" size="lg" color={useColorModeValue("brand.700", "brand.800")} cursor="pointer">
          ProBau
        </Heading>
        {/* Navigation Links */}
        <HStack spacing={4}>
          <Link to="/" p={2} color={useColorModeValue("brand.700", "brand.800")}>
            Home
          </Link>
          <Link to="/ueber-uns" p={2} color={useColorModeValue("brand.700", "brand.800")}>
            Über uns
          </Link>
          {/* ...rest of the links */}
        </HStack>
      </Flex>
      <VStack spacing={8} as="main" py={10}>
        <Heading as="h1">Erfahren Sie mehr über ProBau – Ihr Partner für Bauprojekte</Heading>
        <Text>Willkommen bei ProBau, der innovativen Plattform, die Bauvorhaben in ganz Deutschland revolutioniert. Unsere Mission ist es, Bauherren und Fachleute aus der Baubranche zusammenzubringen, um jedes Bauprojekt effizient, transparent und erfolgreich zu gestalten.</Text>
        {/* More sections will be added here */}
      </VStack>
      {/* Footer */}
      <Flex as="footer" w="full" p={5} justifyContent="space-between" alignItems="center" bg="brand.700">
        {/* Quick Navigation Links */}
        <HStack spacing={4}>
          <Link to="/" p={2} color="brand.800">
            Home
          </Link>
          <Link to="/ueber-uns" p={2} color="brand.800">
            Über uns
          </Link>
          {/* ...rest of the links */}
        </HStack>
        {/* ...rest of the footer content */}
      </Flex>
    </Container>
  );
};

export default AboutUs;
