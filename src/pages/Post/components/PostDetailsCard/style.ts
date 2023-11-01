import styled from 'styled-components'

export const DetailsPostContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.background};
  border-radius: 10px;
  box-shadow: 1rem 1rem 1rem ${({ theme }) => theme.input};
  padding: 2rem;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;

    nav {
      display: flex;
      gap: 0.5rem;
    }

    a {
      color: ${({ theme }) => theme.blue};
      font-weight: bold;
      font-size: 0.75rem;
      text-decoration: none;
      display: flex;
      gap: 0.5rem;
    }
  }

  main {
    margin-top: 1.25rem;
    strong {
      color: ${({ theme }) => theme.title};
      font-size: 1.5rem;
      line-height: 130%;
    }
  }

  footer {
    display: flex;
    gap: 2rem;
    margin-top: 0.5rem;

    span {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      color: ${({ theme }) => theme.span};
    }
  }
`
