import {FaExternalLinkSquareAlt} from 'react-icons/fa';
import { ExternalLinkProps } from "./ExternalLink.types";
import { Container } from "./ExternalLink.styles";

export function ExternalLink({ text, icon, ...rest }: ExternalLinkProps) {
  return (
    <Container {...rest}>
      {text}
      {icon ?? <FaExternalLinkSquareAlt />}
    </Container>
  );
}