import {
  lazy,
  Suspense,
  type ComponentProps,
  type PropsWithChildren,
} from "react";
import { Text } from "@chakra-ui/react";

const TypewriterEffect = lazy(() => import("typewriter-effect"));
type Props = ComponentProps<typeof TypewriterEffect>;

function TypewriterWrapper({ children }: PropsWithChildren) {
  return (
    <Text fontSize={{ base: "md", md: "xl" }} fontWeight="bold" color="blue.fg">
      {children}
    </Text>
  );
}

export function Typewriter(props: Props) {
  return (
    <Suspense
      fallback={
        <TypewriterWrapper>
          Specialized in: {props.options?.strings?.[0] ?? ""}
        </TypewriterWrapper>
      }
    >
      <TypewriterWrapper>
        Specialized in: <TypewriterEffect {...props} />
      </TypewriterWrapper>
    </Suspense>
  );
}
