import { Box, Text, VStack } from "@chakra-ui/react";
import { memo } from "react";
import type { IconType } from "react-icons";

type SocialLinkProps = {
  href?: string;
  Icon: IconType;
  text: string;
  subtitle?: string;
};

function SocialLinkContent(props: Exclude<SocialLinkProps, "href">) {
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
      {props.subtitle && (
        <Text fontSize="xs" color="fg.subtle">
          {props.subtitle}
        </Text>
      )}
    </VStack>
  );
}

function SocialLink(props: SocialLinkProps) {
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
