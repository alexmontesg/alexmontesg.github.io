import { memo } from "react";
import { VStack } from "@chakra-ui/react";

import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import Main from "@/components/ui/main";
import { InMemorySocialLinkRepository } from "@/repositories/social-link-repository";

const App = () => {
  const socialLinkRepository = new InMemorySocialLinkRepository();

  return (
    <VStack
      gap="10"
      display="grid"
      gridTemplateRows="auto 1fr auto"
      minHeight="100vh"
    >
      <Header />
      <Main />
      <Footer socialLinkRepository={socialLinkRepository} />
    </VStack>
  );
};

export default memo(App);
