import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  margin-top: 4.5rem;
  margin-bottom: 3rem;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.85rem;
    h3 {
      font-size: 16px;
      color: ${({ theme }) => theme.baseSubtitle};
    }
    span {
      font-size: 12px;
      color: ${({ theme }) => theme.baseSpan};
    }
  }
  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    background: ${({ theme }) => theme.baseInput};
    border: 1px solid ${({ theme }) => theme.baseBorder};
    color: ${({ theme }) => theme.baseText};
    transition: 0.4s;
    &:focus {
      border-color: ${({ theme }) => theme.blue500};
      outline: none;
    }
    &::placeholder {
      color: ${({ theme }) => theme.baseLabel};
    }
  }
`;