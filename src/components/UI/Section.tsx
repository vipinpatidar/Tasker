import { ReactNode } from "react";

// styled component

import { UiSection } from "./Section.styled";

interface SectionProps {
  children: ReactNode;
}

const Section = (props: SectionProps) => {
  return <UiSection>{props.children}</UiSection>;
};

export default Section;
