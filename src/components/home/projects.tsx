import { memo } from "react";
import { Carousel, IconButton } from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

import HomeSection from "@/components/home/home-section";
import Project from "@/components/projects/project";
import type { ProjectRepository } from "@/domain/project";

function Projects({ projectRepo }: { projectRepo: ProjectRepository }) {
  const projects = projectRepo.getAll();
  const gradient = `linear-gradient(
    to right,
    transparent,
    var(--chakra-colors-bg) var(--chakra-spacing-8),
    var(--chakra-colors-bg) calc(100% - var(--chakra-spacing-8)),
    transparent
  )`;

  return (
    <HomeSection id="selected-projects">
      <HomeSection.Heading>Selected Projects</HomeSection.Heading>
      <HomeSection.Content>
        <Carousel.Root
          slideCount={projects.length}
          autoSize
          spacing="60px"
          maxW={{ base: "md", md: "2xl", lg: "4xl", xl: "6xl" }}
          mx="auto"
        >
          <Carousel.Control gap="4">
            <Carousel.PrevTrigger asChild>
              <IconButton size="xs" variant="ghost">
                <LuChevronLeft />
              </IconButton>
            </Carousel.PrevTrigger>

            <Carousel.ItemGroup
              px={{ base: "0", md: "6" }}
              maskImage={{ base: "0", md: gradient }}
            >
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
      </HomeSection.Content>
    </HomeSection>
  );
}

export default memo(Projects);
