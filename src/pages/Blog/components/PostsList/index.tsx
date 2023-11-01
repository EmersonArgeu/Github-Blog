import { PostsListContainer } from './style'
import { PostCard } from './components/PostCard.tsx'

export function PostsList() {
  return (
    <PostsListContainer>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </PostsListContainer>
  )
}
