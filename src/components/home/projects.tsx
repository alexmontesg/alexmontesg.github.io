import { memo } from "react";
import Project from "../projects/project";
import { Carousel, Heading, IconButton, VStack } from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
const projects = [
  {
    title: "Roshn Saudi League x Flight Pass",
    role: {
      title: "Delivery Lead",
      description:
        "I led the full-stack delivery, customizing a core product to align with Saudia's specific business logic and high-traffic performance needs.",
    },
    description:
      "The Saudia Flight Pass is a specialized travel subscription designed for football fans to follow the Roshn Saudi League across the Kingdom at fixed, competitive rates. It offers flexible domestic travel between match cities with the choice of quarterly or yearly plans, ensuring supporters never miss a game.",
    technologies: new Set(["Vue.js", "PHP", "Laravel"]),
    url: "https://rsl.saudia.com/sv/subscriptions",
  },
  {
    title: "Kris: eDreams AI Chatbot",
    role: {
      title: "Tech Lead",
      description:
        "I led the technical architecture and implemented the core integrations between the chatbot eDreams and Genesys APIs, ensuring reliable, real-time data flow for seamless self-service.",
    },
    description:
      "Kris is an intelligent AI assistant built for eDreams ODIGEO and all its brands to automate global customer support. It streamlines the travel experience by managing bookings, providing real-time flight updates, and resolving inquiries for millions of users worldwide.",
    technologies: new Set([
      "Node.js",
      "Dialogflow",
      "Botkit",
      "NLP",
      "Artificial Intelligence",
      "Java",
    ]),
  },
];

function Projects() {
  return (
    <VStack gap="8">
      <Heading as="h3" size="2xl">
        Selected Projects
      </Heading>
      <Carousel.Root
        slideCount={projects.length}
        autoSize
        spacing="60px"
        maxW={{ base: "sm", md: "6xl" }}
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
