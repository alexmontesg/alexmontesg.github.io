import { Card, Heading, Icon, Span, Timeline, VStack } from "@chakra-ui/react";
import { memo } from "react";

import type { ExperienceRepository } from "@/domain/experience";

const Experience = ({
  experienceRepo,
}: {
  experienceRepo: ExperienceRepository;
}) => {
  const experience = experienceRepo.getAll();

  return (
    <VStack id="experience" gap="8">
      <Heading as="h3" size="2xl">
        I've Worked On
      </Heading>
      <Timeline.Root size="lg" variant="subtle" maxW="5xl">
        {experience.map((e, idx) => {
          const EmptyContent = (
            <Timeline.Content flex="1" display={{ mdDown: "none" }} />
          );
          const ContentBody = (
            <>
              <Timeline.Title>
                {e.position} <Span color="fg.muted">at</Span>
                {e.company} <Span color="fg.muted">between</Span>
                {e.startDate} <Span color="fg.muted">and</Span>
                {e.endDate}
              </Timeline.Title>

              <Card.Root size="sm" w="100%">
                <Card.Body textStyle="sm" lineHeight="tall">
                  {e.description}
                </Card.Body>
              </Card.Root>
            </>
          );
          const Content = (
            <Timeline.Content
              flex="1"
              alignItems={idx % 2 === 1 ? "flex-start" : "flex-end"}
              display={{ mdDown: "none" }}
            >
              {ContentBody}
            </Timeline.Content>
          );

          const MobileContent = (
            <Timeline.Content display={{ md: "none" }}>
              {ContentBody}
            </Timeline.Content>
          );

          return (
            <Timeline.Item>
              {idx % 2 === 1 ? EmptyContent : Content}
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <Icon fontSize="xs">
                    <e.Icon />
                  </Icon>
                </Timeline.Indicator>
              </Timeline.Connector>
              {idx % 2 === 1 ? Content : EmptyContent}
              {MobileContent}
            </Timeline.Item>
          );
        })}
      </Timeline.Root>
    </VStack>
  );
};

export default memo(Experience);
