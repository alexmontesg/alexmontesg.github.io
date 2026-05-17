import { Container, Separator, VStack } from "@chakra-ui/react";
import { memo } from "react";

import AboutMe from "@/components/home/about-me";
import Experience from "@/components/home/experience";
import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects";
import { InMemoryExperienceRepository } from "@/repositories/experience-repository";
import { InMemoryProjectRepository } from "@/repositories/project-repository";

const projectRepo = new InMemoryProjectRepository();
const experienceRepo = new InMemoryExperienceRepository();

function Main() {
  return (
    <Container as="main" fluid alignSelf="start">
      <VStack
        gap={{ base: "8", md: "14" }}
        separator={<Separator />}
        paddingInline={{ base: "2", md: "8" }}
        maxW="8xl"
        marginInline="auto"
      >
        <Hero projectRepo={projectRepo} />
        <Projects projectRepo={projectRepo} />
        <Experience experienceRepo={experienceRepo} />
        <AboutMe />
      </VStack>
    </Container>
  );
}

export default memo(Main);
