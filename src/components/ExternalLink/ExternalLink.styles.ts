import styled, { css } from "styled-components";
import { ExternalLinkStyleProps } from "./ExternalLink.types";


export const Container = styled.a<ExternalLinkStyleProps>`
  border: none;
  background: none;
  color: ${({ theme }) => theme.blue500};
  font-size: 16px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  transition: 0.4s;
  border-bottom: 1px solid transparent;
  height: 19px;
  line-height: 19px;
  svg {
    width: 0.75rem;
    height: 0.75rem;
  }
  &:hover {
    border-color: ${({ theme }) => theme.blue500};
  }
  ${({ variant }) =>
    variant === "iconLeft" &&
    css`
      flex-direction: row-reverse;
    `}
`;