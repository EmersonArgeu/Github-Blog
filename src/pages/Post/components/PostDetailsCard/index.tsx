import { Link } from 'react-router-dom'
import { DetailsPostContainer } from './style'
import {
  CaretLeft,
  ArrowSquareOut,
  Calendar,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'

export function PostDetailsCard() {
  return (
    <DetailsPostContainer>
      <header>
        <nav>
          <CaretLeft color="#3294F8" size={14} weight="bold" />
          <Link to="/">VOLTAR</Link>
        </nav>
        <a href="">
          VER NO GITHUB
          <ArrowSquareOut color="#3294F8" size={14} />
        </a>
      </header>
      <main>
        <strong>JavaScript data types and data structures</strong>
      </main>
      <footer>
        <span>
          <GithubLogo color="#7B96B2" size={18} />
          cameronwll
        </span>
        <span>
          <Calendar color="#7B96B2" size={18} />
          Há 1 dia
        </span>
        <span>
          <ChatCircle color="#7B96B2" size={18} />5 comentários
        </span>
      </footer>
    </DetailsPostContainer>
  )
}
