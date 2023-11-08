import { useContext, useEffect, useState } from 'react'
import { PostDetailsCard } from './components/PostDetailsCard'
import { PostContent } from './style'
import { IssueDataType, QueryContext } from '../../contexts/QueryContext'
import Markdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'

export function Post() {
  const { userData } = useContext(QueryContext)

  const [issuesData, setIssuesData] = useState<IssueDataType>(
    {} as IssueDataType,
  )

  const { id } = useParams()

  async function APIIssues() {
    const response = await api.get(
      `/repos/EmersonArgeu/Github-Blog/issues/${id}`,
    )
    setIssuesData(response.data)
  }

  useEffect(() => {
    APIIssues()
  }, [])

  return (
    <>
      <PostDetailsCard
        title={issuesData.title}
        comments={issuesData.comments}
        createdAt={issuesData.created_at}
        username={userData.login}
        url={issuesData.html_url}
      />
      <PostContent>
        <Markdown>{issuesData.body}</Markdown>
      </PostContent>
    </>
  )
}
