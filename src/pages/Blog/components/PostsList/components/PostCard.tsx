import { Link } from 'react-router-dom'
import { PostContainer } from './PostCard'

export function PostCard() {
  return (
    <PostContainer>
      <Link to="/post">
        <header>
          <strong>JavaScript data types and data structures</strong>
          <time>argeu</time>
        </header>
        <main>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
          </p>
        </main>
      </Link>
    </PostContainer>
  )
}
