import { memo } from "react";
import { VStack } from "@chakra-ui/react";

import Footer from "./components/ui/footer";
import Header from "./components/ui/header";
import Main from "./components/ui/main";

const Demo = () => {
  return (
    <VStack
      gap="10"
      display="grid"
      gridTemplateRows="auto 1fr auto"
      minHeight="100vh"
    >
      <Header />
      <Main />
      <Footer />
    </VStack>
  );
};

export default memo(Demo);
