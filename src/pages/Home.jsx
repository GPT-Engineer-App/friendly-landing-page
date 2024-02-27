import React from "react";
import { Box, Button, Container, Heading, Text, VStack, Flex, Link, Stack, Input, Icon, useColorModeValue, HStack } from "@chakra-ui/react";
import { FaArrowRight, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Home = () => {
  const bg = useColorModeValue("brand.600", "brand.700");
  const color = useColorModeValue("brand.700", "brand.800");

  return (
    <Container maxW="container.xl" p={0}>
      {/* Header-Bereich */}
      <Flex as="header" w="full" p={5} justifyContent="space-between" alignItems="center">
        <Heading as="a" href="/" size="lg" color={color} cursor="pointer">
          ProBau
        </Heading>
        {/* Navigation Links */}
        <HStack spacing={4}>
          <Link href="/" p={2} color={color}>
            Home
          </Link>
          <Link href="/ueber-uns" p={2} color={color}>
            Über uns
          </Link>
          <Link href="#services" p={2} color={color}>
            Dienstleistungen
          </Link>
          <Link href="#projects" p={2} color={color}>
            Projekte
          </Link>
          <Link href="#for-companies" p={2} color={color}>
            Für Unternehmen
          </Link>
          <Link href="#resources" p={2} color={color}>
            Ressourcen
          </Link>
          <Link href="#contact" p={2} color={color}>
            Kontakt
          </Link>
        </HStack>
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
        {/* Hero-Bereich */}
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
        </VStack>
        {/* Vorteile von ProBau */}
        <Stack w="full" pt={10} spacing={8}>
          <Heading color={color} size="xl" id="advantages">
            Warum ProBau Ihre erste Wahl für Bauprojekte sein sollte
          </Heading>
          {/* Vorteil 1 */}
          <Box>
            <Heading color={color} size="md">
              Zugang zu einem breiten Netzwerk von Bauexperten
            </Heading>
            <Text color={color}>Mit ProBau erreichen Sie ein umfangreiches Netzwerk qualifizierter Bauunternehmen und Handwerker. Ob Sie auf der Suche nach einem Spezialisten für nachhaltiges Bauen, einem erfahrenen Architekten oder verlässlichen Handwerkern für Sanierungen sind – ProBau bietet Ihnen direkten Zugang zu den besten Fachkräften in der Branche.</Text>
          </Box>
          {/* Vorteil 2 */}
          <Box>
            <Heading color={color} size="md">
              Transparente und vertrauenswürdige Partnerschaften
            </Heading>
            <Text color={color}>Vertrauen und Transparenz stehen bei uns an erster Stelle. Alle Partner auf unserer Plattform werden sorgfältig geprüft und durch Kundenbewertungen transparent gemacht. So können Sie sicher sein, dass Ihr Bauprojekt in den besten Händen ist. Mit ProBau finden Sie nicht nur Bauunternehmen, sondern vertrauenswürdige Partner für Ihre Bauvorhaben.</Text>
          </Box>
          {/* Vorteil 3 */}
          <Box>
            <Heading color={color} size="md">
              Effizienzsteigerung und Kosteneinsparung
            </Heading>
            <Text color={color}>ProBau nutzt fortschrittliche Matching-Algorithmen, um Ihr Projekt mit den passenden Bauexperten zu verbinden. Diese effiziente Art der Projektvermittlung spart Ihnen wertvolle Zeit und minimiert die Projektkosten. Von der Planung bis zur Fertigstellung – ProBau optimiert jeden Schritt Ihres Bauprojekts.</Text>
          </Box>
          {/* Advantages sections */}
          {/* ...Advantage 1, Advantage 2, Advantage 3 as specified */}
          {/* How it works section */}
          {/* ...Step 1, Step 2, Step 3 as specified */}
          {/* Testimonials section */}
          {/* ...Testimonial 1, Testimonial 2, Testimonial 3 as specified */}
        </Stack>
      </VStack>

      {/* Wie es funktioniert */}
      <Stack w="full" pt={10} spacing={8}>
        <Heading color={color} size="xl" id="how-it-works">
          So bringen Sie Ihr Bauprojekt auf ProBau zum Erfolg
        </Heading>
        <Text color={color}>Entdecken Sie den einfachen und effizienten Weg, Bauprojekte zu realisieren. ProBau verbindet Sie mit top Bauunternehmen und Dienstleistern aus ganz Deutschland. Folgen Sie diesen drei Schritten, um Ihr Bauprojekt zum Erfolg zu führen.</Text>
        {/* Schritt 1 */}
        <Box>
          <Heading color={color} size="md">
            Projekt einstellen
          </Heading>
          <Text color={color}>Starten Sie, indem Sie Ihr Bauprojekt auf ProBau einstellen. Beschreiben Sie, was genau gemacht werden muss, von Renovierungsarbeiten bis zum Neubau. Nutzen Sie unsere benutzerfreundlichen Formulare, um sicherzustellen, dass alle relevanten Informationen für Bauunternehmen sichtbar sind.</Text>
        </Box>
        {/* Schritt 2 */}
        <Box>
          <Heading color={color} size="md">
            Angebote erhalten
          </Heading>
          <Text color={color}>Sobald Ihr Projekt eingestellt ist, erhalten Sie Angebote von qualifizierten Bauunternehmen. Jedes Angebot enthält detaillierte Informationen zur Dienstleistung und zum Preis, sodass Sie die Optionen transparent und effektiv vergleichen können.</Text>
        </Box>
        {/* Schritt 3 */}
        <Box>
          <Heading color={color} size="md">
            Partner auswählen
          </Heading>
          <Text color={color}>Entscheiden Sie sich für das Bauunternehmen, das am besten zu Ihren Anforderungen und Ihrem Budget passt. Unsere Bewertungssysteme und Nutzerfeedbacks helfen Ihnen, eine informierte Entscheidung zu treffen und mit Vertrauen voranzuschreiten.</Text>
        </Box>
      </Stack>

      {/* Testimonials */}
      <Stack w="full" pt={10} spacing={8}>
        <Heading color={color} size="xl" id="testimonials">
          Erfolgsgeschichten unserer Kunden
        </Heading>
        <Text color={color}>Lesen Sie, wie ProBau Nutzer bei der Realisierung ihrer Bauprojekte unterstützt hat. Unsere Plattform verbindet Sie nicht nur mit den besten Bauunternehmen, sondern begleitet Sie auch auf dem Weg zum erfolgreichen Projektabschluss.</Text>
        {/* Testimonial 1 */}
        <Box>
          <Heading color={color} size="md">
            Anna & Tobias, Leipzig
          </Heading>
          <Text color={color}>Projekt: Komplettsanierung eines Altbauhauses</Text>
          <Text color={color}>Feedback: "Die Suche nach dem richtigen Bauunternehmen für die Sanierung unseres Altbaus schien eine Herausforderung zu sein, bis wir auf ProBau gestoßen sind. Die Plattform machte es uns leicht, Angebote zu vergleichen und das Unternehmen mit der besten Bewertung auszuwählen. Wir sind begeistert von der Qualität und der Transparenz, die ProBau bietet."</Text>
        </Box>
        {/* Testimonial 2 */}
        <Box>
          <Heading color={color} size="md">
            Michael J., Berlin
          </Heading>
          <Text color={color}>Projekt: Modernisierung eines Bürogebäudes</Text>
          <Text color={color}>Feedback: "Für die Modernisierung unseres Bürogebäudes benötigten wir spezialisierte Fachkräfte, die moderne und energieeffiziente Lösungen anbieten. ProBau hat uns nicht nur mit einem hervorragenden Dienstleister verbunden, sondern auch den Projektfortschritt vereinfacht und beschleunigt. Ein großartiger Service für jedes Bauprojekt!"</Text>
        </Box>
        {/* Testimonial 3 */}
        <Box>
          <Heading color={color} size="md">
            Sandra K., München
          </Heading>
          <Text color={color}>Projekt: Neubau eines Einfamilienhauses</Text>
          <Text color={color}>Feedback: "Von der Planung bis zur Umsetzung – mit ProBau an unserer Seite fühlten wir uns durchgehend gut beraten. Die Auswahl an Bauunternehmen war beeindruckend, und die Entscheidungshilfen, wie Nutzerbewertungen, waren goldwert. Unser Traumhaus wurde Realität, dank der Unterstützung von ProBau."</Text>
        </Box>
      </Stack>

      {/* Footer */}
      <Flex as="footer" w="full" p={5} justifyContent="space-between" alignItems="center" bg="brand.700">
        {/* Quick Navigation Links */}
        <HStack spacing={4}>
          <Link href="/" p={2} color="brand.800">
            Home
          </Link>
          <Link href="#about" p={2} color="brand.800">
            Über uns
          </Link>
          <Link href="#services" p={2} color="brand.800">
            Dienstleistungen
          </Link>
          <Link href="#projects" p={2} color="brand.800">
            Projekte
          </Link>
          <Link href="#for-companies" p={2} color="brand.800">
            Für Unternehmen
          </Link>
          <Link href="#resources" p={2} color="brand.800">
            Ressourcen
          </Link>
          <Link href="#contact" p={2} color="brand.800">
            Kontakt
          </Link>
        </HStack>
        {/* Legal Links */}
        <HStack spacing={4}>
          <Link href="/privacy" p={2} color="brand.800">
            Datenschutzrichtlinie
          </Link>
          <Link href="/imprint" p={2} color="brand.800">
            Impressum
          </Link>
        </HStack>
        {/* Social Media Icons */}
        <HStack spacing={2}>
          <Link href="https://www.facebook.com/probau" color="brand.800">
            <Icon as={FaFacebook} />
          </Link>
          <Link href="https://www.twitter.com/probau" color="brand.800">
            <Icon as={FaTwitter} />
          </Link>
          <Link href="https://www.instagram.com/probau" color="brand.800">
            <Icon as={FaInstagram} />
          </Link>
          <Link href="https://www.linkedin.com/company/probau" color="brand.800">
            <Icon as={FaLinkedin} />
          </Link>
        </HStack>
        {/* Newsletter Subscription */}
        <Flex align="center">
          <Input placeholder="Email für Newsletter" size="sm" />
          <Button leftIcon={<FaEnvelope />} ml={2} size="sm" bgColor="brand.900" color="brand.800">
            Anmelden
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Home;
