import { Container, Separator, VStack } from "@chakra-ui/react";
import { memo } from "react";

import Hero from "../home/hero";
import Projects from "../home/projects";

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
        <Hero />
        <Projects />
      </VStack>
    </Container>
  );
}

export default memo(Main);
