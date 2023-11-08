import { Link } from 'react-router-dom'
import { DetailsPostContainer } from './style'
import {
  CaretLeft,
  ArrowSquareOut,
  Calendar,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'
import { relativeDateFormatter } from '../../../../utils/fomatter'

interface PostDetailsCardProps {
  title: string
  comments: number
  username: string
  createdAt: string
  url: string
}

export function PostDetailsCard({
  title,
  comments,
  username,
  createdAt,
  url,
}: PostDetailsCardProps) {
  const formattedDate = relativeDateFormatter(createdAt)

  return (
    <DetailsPostContainer>
      <header>
        <nav>
          <CaretLeft color="#3294F8" size={14} weight="bold" />
          <Link to="/">VOLTAR</Link>
        </nav>
        <a href={url}>
          VER NO GITHUB
          <ArrowSquareOut color="#3294F8" size={14} />
        </a>
      </header>
      <main>
        <strong>{title}</strong>
      </main>
      <footer>
        <span>
          <GithubLogo color="#7B96B2" size={18} />
          {username}
        </span>
        <span>
          <Calendar color="#7B96B2" size={18} />
          {formattedDate}
        </span>
        <span>
          <ChatCircle color="#7B96B2" size={18} />
          {comments} comentários
        </span>
      </footer>
    </DetailsPostContainer>
  )
}
