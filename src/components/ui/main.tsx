import { Container, Separator, VStack } from "@chakra-ui/react";
import { memo } from "react";

import Hero from "../home/hero";
import Projects from "../home/projects";
import { InMemoryProjectRepository } from "@/repositories/project-repository";

const projectRepo = new InMemoryProjectRepository();

function Main() {
  return (
    <Container as="main" fluid alignSelf="start">
      <VStack
        gap="8"
        separator={<Separator />}
        paddingInline={{ base: "2", md: "8" }}
        maxW="8xl"
        marginInline="auto"
      >
        <Hero projectRepo={projectRepo} />
        <Projects projectRepo={projectRepo} />
      </VStack>
    </Container>
  );
}

export default memo(Main);
