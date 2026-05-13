import { Grid, GridItem, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { memo } from "react";

function Hero() {
  return (
    <Grid as="section" templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
      <GridItem order={{ base: "1", md: "0" }}>
        <VStack gap={4} alignItems="start">
          <Heading as="h1" size={{ base: "3xl", md: "5xl" }}>
            Alejandro Montes García
          </Heading>
          <Heading as="h2" size={{ base: "lg", md: "2xl" }} color="blue.fg">
            PhD | Fullstack Engineer | Technical Lead
          </Heading>
          <Text textStyle="lg" color="gray.fg" fontWeight="medium">
            Senior Front-End and Full-Stack Engineer with 8+ years building
            scalable, user-focused web applications. I combine strong product
            thinking, AI expertise, and hands-on leadership to deliver fast,
            maintainable solutions. From adaptive systems research to AI-powered
            products, I focus on creating impactful digital experiences that
            balance performance, usability, and long-term scalability.
          </Text>
        </VStack>
      </GridItem>
      <GridItem
        order={{ base: "0", md: "1" }}
        justifySelf={{ base: "center", md: "end" }}
      >
        <Image
          src="./alejandro-montes.webp"
          borderRadius="md"
          alt="An image of Alejandro Montes García"
          width={{ base: "300px", md: "unset" }}
        />
      </GridItem>
    </Grid>
  );
}

export default memo(Hero);
