import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: ${({ theme }) => theme.post};
  border-radius: 10px;
  max-height: 16rem;
  overflow: hidden;

  header {
    display: flex;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
  }

  strong {
    font-size: 1.25rem;
    line-height: 160%;
    color: ${({ theme }) => theme.title};
  }

  p {
    line-height: 160%;
    color: ${({ theme }) => theme.text};
    margin-top: 1.25rem;
    text-overflow: ellipsis;
  }

  time {
    color: ${({ theme }) => theme.span};
    font-size: 0.875rem;
    line-height: 160%;
  }
`
