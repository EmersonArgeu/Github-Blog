import { Route, Routes } from 'react-router-dom'
import { LayoutDefault } from './Layout/default'
import { Blog } from './pages/Blog'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<Blog />} />
        <Route path="/post" element={<Post />} />
      </Route>
    </Routes>
  )
}
