import { Grid, GridItem, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { memo } from "react";

import TypewriterComponent from "typewriter-effect";
import type { ProjectRepository } from "@/domain/project";

function Hero({ projectRepo }: { projectRepo: ProjectRepository }) {
  const skills = projectRepo.getAllTechnologies();

  return (
    <Grid as="section" templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
      <GridItem order={{ base: "1", md: "0" }}>
        <VStack gap={{ base: "4", lg: "8" }} alignItems="start">
          <Heading as="h1" size={{ base: "3xl", md: "5xl" }}>
            Alejandro Montes García
          </Heading>
          <Heading as="h2" size={{ base: "lg", md: "2xl" }} color="blue.fg">
            PhD | Fullstack Engineer | Technical Lead
          </Heading>
          <Text textStyle="lg" color="gray.fg" fontWeight="medium">
            Senior Fullstack Engineer with 8+ years building scalable,
            user-focused web applications. I combine strong product thinking, AI
            expertise, and hands-on leadership to deliver fast, maintainable
            solutions. From adaptive systems research to AI-powered products, I
            focus on creating impactful digital experiences that balance
            performance, usability, and long-term scalability.
          </Text>

          <Text
            fontSize={{ base: "md", md: "xl" }}
            fontWeight="bold"
            color="blue.fg"
          >
            Specialized in:{" "}
            <TypewriterComponent
              component="span"
              options={{
                autoStart: true,
                loop: true,
                strings: skills,
                delay: 40,
              }}
            />
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
