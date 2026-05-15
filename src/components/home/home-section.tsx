import { Heading, VStack } from "@chakra-ui/react";
import { memo, type PropsWithChildren } from "react";

type HomeSectionProps = {
  id: string;
} & PropsWithChildren;

type HomeSectionComponent = React.FC<HomeSectionProps> & {
  Heading: React.FC<PropsWithChildren>;
  Content: React.FC<PropsWithChildren>;
};

const HomeSection: React.FC<HomeSectionProps> = (props: HomeSectionProps) => {
  return (
    <VStack id={props.id} gap={{ base: "8", md: "12" }}>
      {props.children}
    </VStack>
  );
};

const MemoizedHomeSection = memo(
  HomeSection,
) as unknown as HomeSectionComponent;

MemoizedHomeSection.Heading = ({ children }: PropsWithChildren) => {
  return (
    <Heading
      as="h3"
      size={{ base: "2xl", md: "4xl" }}
      fontWeight={{ base: "normal", md: "bold" }}
    >
      {children}
    </Heading>
  );
};

MemoizedHomeSection.Content = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default MemoizedHomeSection;
