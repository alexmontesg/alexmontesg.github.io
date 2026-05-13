import { memo } from "react";
import Project from "../projects/project";
import { Carousel, Heading, IconButton, VStack } from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import type { ProjectRepository } from "@/domain/project";

function Projects({ projectRepo }: { projectRepo: ProjectRepository }) {
  const projects = projectRepo.getAll();

  return (
    <VStack id="selected-projects" gap="8">
      <Heading as="h3" size="2xl">
        Selected Projects
      </Heading>
      <Carousel.Root
        slideCount={projects.length}
        autoSize
        spacing="60px"
        maxW={{ base: "md", md: "2xl", lg: "4xl", xl: "6xl" }}
        mx="auto"
        gap="4"
      >
        <Carousel.Control gap="4">
          <Carousel.PrevTrigger asChild>
            <IconButton size="xs" variant="ghost">
              <LuChevronLeft />
            </IconButton>
          </Carousel.PrevTrigger>

          <Carousel.ItemGroup>
            {projects.map((p, idx) => {
              return (
                <Carousel.Item
                  key={p.title}
                  index={idx}
                  snapAlign="center"
                  width="auto"
                >
                  <Project {...p} />
                </Carousel.Item>
              );
            })}
          </Carousel.ItemGroup>

          <Carousel.NextTrigger asChild>
            <IconButton size="xs" variant="ghost">
              <LuChevronRight />
            </IconButton>
          </Carousel.NextTrigger>
        </Carousel.Control>
      </Carousel.Root>
    </VStack>
  );
}

export default memo(Projects);
