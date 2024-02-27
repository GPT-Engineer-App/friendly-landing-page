import React from "react";
import { Box, Button, Container, Heading, Text, VStack, Flex, Link, Stack, Input, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaArrowRight, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Home = () => {
  const bg = useColorModeValue("brand.600", "brand.700");
  const color = useColorModeValue("brand.700", "brand.800");

  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="header" w="full" p={5} justifyContent="space-between" alignItems="center">
        <Heading as="a" href="/" size="lg" color={color} cursor="pointer">
          ProBau
        </Heading>
      </Flex>

      <VStack w="full" h="auto" p={10} spacing={10} alignItems="flex-start" bg={bg}>
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
        {/* Rest of the content added below */}
        <Stack w="full" pt={10} spacing={8}>
          <Heading color={color} size="xl">
            Warum ProBau Ihre erste Wahl für Bauprojekte sein sollte
          </Heading>
          {/* Advantages sections */}
          {/* ...Advantage 1, Advantage 2, Advantage 3 as specified */}
          {/* How it works section */}
          {/* ...Step 1, Step 2, Step 3 as specified */}
          {/* Testimonials section */}
          {/* ...Testimonial 1, Testimonial 2, Testimonial 3 as specified */}
        </Stack>
      </VStack>

      {/* Footer */}
      <Flex as="footer" w="full" p={5} justifyContent="space-between" alignItems="center" bg="brand.700">
        <Stack spacing={4}>
          <Link href="/">Home</Link>
          <Link href="/about">Über uns</Link>
          {/* ...other quick navigation links */}
        </Stack>
        <Stack spacing={4}>
          <Link href="/privacy">Datenschutzrichtlinie</Link>
          <Link href="/imprint">Impressum</Link>
          {/* ...other legal links */}
        </Stack>
        <Stack direction="row" spacing={2}>
          <Link href="https://www.facebook.com/probau">
            <Icon as={FaFacebook} />
          </Link>
          <Link href="https://www.twitter.com/probau">
            <Icon as={FaTwitter} />
          </Link>
          <Link href="https://www.instagram.com/probau">
            <Icon as={FaInstagram} />
          </Link>
          <Link href="https://www.linkedin.com/company/probau">
            <Icon as={FaLinkedin} />
          </Link>
        </Stack>
        <Flex align="center">
          <Input placeholder="Email für Newsletter" size="sm" />
          <Button leftIcon={<FaEnvelope />} ml={2} size="sm">
            Anmelden
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Home;
