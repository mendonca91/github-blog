import { ComponentProps, ReactNode } from "react";
import { Container } from "./ExternalLink.styles";

export type ExternalLinkProps = ComponentProps<typeof Container> & {
    text: string;
    icon?: ReactNode;
    variant?: "iconLeft";
  };


  export interface ExternalLinkStyleProps {
    variant?: "iconLeft";
  }
  