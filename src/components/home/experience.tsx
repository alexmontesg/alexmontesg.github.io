import { Card, Icon, Span, Timeline } from "@chakra-ui/react";
import { memo } from "react";

import type { ExperienceRepository } from "@/domain/experience";
import HomeSection from "@/components/home/home-section";

function Experience({
  experienceRepo,
}: {
  experienceRepo: ExperienceRepository;
}) {
  const experience = experienceRepo.getAll();
  const EmptyContent = (
    <Timeline.Content flex="1" display={{ mdDown: "none" }} />
  );

  return (
    <HomeSection id="experience">
      <HomeSection.Heading>I've Worked On</HomeSection.Heading>
      <HomeSection.Content>
        <Timeline.Root size="lg" variant="subtle" maxW="5xl">
          {experience.map((e, idx) => {
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
              <Timeline.Item key={idx}>
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
      </HomeSection.Content>
    </HomeSection>
  );
}

export default memo(Experience);
