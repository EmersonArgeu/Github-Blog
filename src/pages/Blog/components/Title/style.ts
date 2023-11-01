import styled from 'styled-components'

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4.5rem;

  strong {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.subtitle};
  }

  span {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.span};

    display: flex;
    align-items: center;
  }
`
