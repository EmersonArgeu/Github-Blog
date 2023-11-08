import { PostContainer, PostsListContainer } from './style.ts'
import Markdown from 'react-markdown'
import { useContext } from 'react'
import { relativeDateFormatter } from '../../../../utils/fomatter.ts'
import { QueryContext } from '../../../../contexts/QueryContext.tsx'

export function Posts() {
  const { searchData } = useContext(QueryContext)

  return (
    <PostsListContainer>
      {searchData.map((item) => (
        <PostContainer key={item.number} to={`/post/${item.number}`}>
          <header>
            <strong>{item.title}</strong>
            <span>{relativeDateFormatter(item.created_at)}</span>
          </header>
          <main>
            <Markdown>
              {item.body.length <= 200
                ? item.body
                : item.body.slice(0, 200) + '...'}
            </Markdown>
          </main>
        </PostContainer>
      ))}
    </PostsListContainer>
  )
}
