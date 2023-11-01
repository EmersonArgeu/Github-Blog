import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background: ${({ theme }) => theme.profile};
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  gap: 2rem;
  box-shadow: 0.75rem 0.75rem 1rem ${({ theme }) => theme.input};

  img {
    width: 9rem;
    height: 9rem;
    border-radius: 6px;
  }
`
export const ProfileContent = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;

  p {
    margin-top: 0.5rem;
    line-height: 160%;
  }
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  strong {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.title};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.blue};
    font-size: 0.75rem;
    font-weight: bold;
  }
`

export const Details = styled.footer`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;

  span {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`
