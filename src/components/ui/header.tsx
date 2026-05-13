import { Container, HStack, Separator } from "@chakra-ui/react";
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
      <Container justifyItems="end">
        <nav>
          <HStack separator={<Separator />}>
            <b>ADD LINKS</b>
          </HStack>
        </nav>
      </Container>
    </Container>
  );
}

export default memo(Header);
