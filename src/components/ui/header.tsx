import { Container, HStack, Link, Separator } from "@chakra-ui/react";
import { memo } from "react";

function Header() {
  return (
    <Container
      as="header"
      py="5"
      borderBlockEnd="1px solid"
      borderColor="fg.subtle"
      fluid
    >
      <Container display="flex" justifyContent="end">
        <nav>
          <HStack separator={<Separator />}>
            <Link href="#selected-projects">Projects</Link>
            <Link href="#experience">Experience</Link>
            <Link href="#get-in-touch">Contact</Link>
            <Link href="#about-me">About</Link>
          </HStack>
        </nav>
      </Container>
    </Container>
  );
}

export default memo(Header);
