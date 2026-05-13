import { memo } from "react";
import { Badge, Box, Card, Flex, Link, Text } from "@chakra-ui/react";

export type ProjectProps = {
  title: string;
  role: {
    title: string;
    description: string;
  };
  description: string;
  url?: string;
  technologies: Set<string>;
};

function Project(props: ProjectProps) {
  const technologies = [...props.technologies];

  return (
    <Card.Root
      width={{ base: "100%", md: "380px" }}
      size={{ base: "sm", md: "md" }}
      h="100%"
    >
      <Card.Header>
        <Card.Title as="h4" fontSize="xl">
          {props.title}
        </Card.Title>
        <Card.Title as="h5" color="blue.fg" fontSize="md">
          {props.role.title}
        </Card.Title>
        {props.url && (
          <Link target="_blank" href={props.url} fontSize="xs">
            {props.url}
          </Link>
        )}
      </Card.Header>
      <Card.Body>
        <Card.Description>
          <Text mb="4" lineHeight="short">
            {props.description}
          </Text>
          <Box
            backgroundColor="gray.fg"
            borderRadius="sm"
            padding="2"
            color="gray.contrast"
          >
            <Text textTransform="uppercase" fontWeight="bold">
              My Role
            </Text>
            <Text fontWeight="medium" lineHeight="short">
              {props.role.description}
            </Text>
          </Box>
        </Card.Description>
      </Card.Body>
      <Card.Footer>
        <Flex gap="2" wrap="wrap">
          {technologies.map((t) => {
            return (
              <Badge
                key={t}
                backgroundColor="gray.emphasized"
                size="md"
                border="1px solid"
                borderColor="fg.muted"
                borderRadius="full"
                px="3"
              >
                {t}
              </Badge>
            );
          })}
        </Flex>
      </Card.Footer>
    </Card.Root>
  );
}

export default memo(Project);
