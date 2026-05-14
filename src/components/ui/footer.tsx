import { Container, Heading, HStack, VStack } from "@chakra-ui/react";
import { memo } from "react";

import SocialLink from "../navigation/social-link";
import type { SocialLinkRepository } from "@/domain/social-link";

function Footer({
  socialLinkRepository,
}: {
  socialLinkRepository: SocialLinkRepository;
}) {
  const socialLinks = socialLinkRepository.getAll();

  return (
    <Container
      as="footer"
      id="get-in-touch"
      py="5"
      borderBlockStart="1px solid"
      borderColor="fg.subtle"
      fluid
    >
      <Container>
        <VStack gap="8" w="full">
          <Heading as="h3" size="2xl">
            Get in Touch
          </Heading>

          <Container as="nav">
            <HStack justifyContent="space-around" alignItems="start">
              {socialLinks.map((l) => {
                return <SocialLink {...l} key={l.text} />;
              })}
            </HStack>
          </Container>
        </VStack>
      </Container>
    </Container>
  );
}

export default memo(Footer);
