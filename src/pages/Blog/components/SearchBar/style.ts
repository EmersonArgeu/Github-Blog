import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  background: ${({ theme }) => theme.input};
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.border};
  padding: 0.75rem 1rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.text};

  &::placeholder {
    color: ${({ theme }) => theme.label};
  }
`
