import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
`

export const PostContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: ${({ theme }) => theme.post};
  border-radius: 10px;
  height: 16rem;
  overflow: hidden;
  text-decoration: none;

  header {
    display: flex;
    justify-content: space-between;
  }

  strong {
    font-size: 1rem;
    line-height: 160%;
    color: ${({ theme }) => theme.title};
  }

  p {
    line-height: 160%;
    color: ${({ theme }) => theme.text};
    margin-top: 1.25rem;
    text-overflow: ellipsis;
    font-size: 0.875rem;
  }

  span {
    color: ${({ theme }) => theme.span};
    font-size: 0.875rem;
    line-height: 160%;
    width: 5rem;
  }
`
