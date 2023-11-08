import { Posts } from './components/Posts/index'
import { Profile } from './components/Profile'
import { SearchBar } from './components/SearchBar'
import { Title } from './components/Title'

export function Blog() {
  return (
    <>
      <Profile />
      <Title />
      <SearchBar />
      <Posts />
    </>
  )
}
