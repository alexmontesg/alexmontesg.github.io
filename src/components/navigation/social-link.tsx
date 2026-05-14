import { Box, Text, VStack } from "@chakra-ui/react";
import { memo } from "react";
import type { SocialLink } from "@/domain/social-link";

function SocialLinkContent(props: Exclude<SocialLink, "href">) {
  return (
    <VStack gap="2">
      <Box
        background="bg.subtle"
        border="1px solid"
        borderColor="border"
        borderRadius="full"
        w="75px"
        h="75px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <props.Icon size="25" />
      </Box>
      <Text fontSize="sm" color="gray.fg">
        {props.text}
      </Text>
      {props.subtitle ? (
        <Text fontSize="xs" color="fg.muted">
          {props.subtitle}
        </Text>
      ) : null}
    </VStack>
  );
}

function SocialLink(props: SocialLink) {
  if (props.href) {
    return (
      <a href={props.href} target="_blank">
        <SocialLinkContent {...props} />
      </a>
    );
  }
  return <SocialLinkContent {...props} />;
}

export default memo(SocialLink);
