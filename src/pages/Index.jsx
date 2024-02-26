import React from "react";
import { Box, Button, Container, Heading, Text, VStack, Image, useColorModeValue, Flex } from "@chakra-ui/react";
import { FaArrowRight, FaMobileAlt } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("brand.600", "brand.700"); // ProBau Light Gray for light mode and ProBau Dark Gray for dark mode
  const color = useColorModeValue("brand.700", "brand.800"); // ProBau Dark Gray for light mode and ProBau White for dark mode

  return (
    <Container maxW="container.xl" p={0}>
      <VStack w="full" h="100vh" p={10} spacing={10} alignItems="flex-start" bg={bg}>
        <Flex w="full" justifyContent="space-between" alignItems="center" as="nav">
          <Heading size="lg" color={color}>
            AppName
          </Heading>
          <Button variant="solid" bgColor="brand.900" color="brand.800" rightIcon={<FaArrowRight />}>
            Get Started
          </Button>
        </Flex>
        <Box w="full" py={10}>
          <VStack spacing={3} w="full" maxW="lg" alignItems="flex-start">
            <Heading color={color} size="2xl">
              Simplify Your Life with AppName
            </Heading>
            <Text fontSize="lg" color={color}>
              AppName is your ultimate platform for managing tasks, connecting with people, and achieving your goals.
            </Text>
            <Button size="lg" leftIcon={<FaMobileAlt />} bgColor="brand.900" color="brand.800" variant="solid">
              Download the App
            </Button>
          </VStack>
        </Box>
        <Box w="full" flex={1}>
          <Image src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcHAlMjBtb2NrdXB8ZW58MHx8fHwxNzA4OTc4NjIyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="App Mockup" borderRadius="lg" shadow="2xl" maxH="400px" w="full" objectFit="contain" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
