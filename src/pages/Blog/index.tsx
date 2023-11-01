import { PostsList } from './components/PostsList'
import { Profile } from './components/Profile'
import { SearchBar } from './components/SearchBar'
import { Title } from './components/Title'

export function Blog() {
  return (
    <>
      <Profile />
      <Title />
      <SearchBar />
      <PostsList />
    </>
  )
}
