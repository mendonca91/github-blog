import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  width: 100%;
  height: 16.25rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.basePost};
  border: 2px solid ${({ theme }) => theme.basePost};
  padding: 2rem;
  transition: 0.4s;
  &:hover {
    border-color: ${({ theme }) => theme.baseLabel};
  }
  div {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;
    strong {
      flex: 1;
      font-size: 16px;
      color: ${({ theme }) => theme.baseTitle};
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    span {
      width: max-content;
      font-size: 12px;
      color: ${({ theme }) => theme.baseSpan};
    }
  }
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`;