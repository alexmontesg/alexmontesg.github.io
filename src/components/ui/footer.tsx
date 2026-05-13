import { Container, Heading, HStack, VStack } from "@chakra-ui/react";
import { memo } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

import SocialLink from "../navigation/social-link";

function Footer() {
  return (
    <Container
      as="footer"
      py="5"
      borderBlockStart="1px solid"
      borderColor="fg.subtle"
      fluid
    >
      <Container>
        <VStack gap="8" w="full">
          <Heading as="h3" size="2xl">
            Get in touch
          </Heading>

          <Container as="nav">
            <HStack justifyContent="space-around">
              <SocialLink Icon={FaMapMarkerAlt} text="Gijón, Spain" />

              <SocialLink
                Icon={FaLinkedinIn}
                href="https://www.linkedin.com/in/alejandromontesg/"
                text="LinkedIn"
                subtitle="@alejandromontesg"
              />

              <SocialLink
                Icon={FaGithub}
                href="https://github.com/alexmontesg"
                text="Github"
                subtitle="@alexmontesg"
              />
            </HStack>
          </Container>
        </VStack>
      </Container>
    </Container>
  );
}

export default memo(Footer);
