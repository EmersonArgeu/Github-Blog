import { ArrowSquareOut, GithubLogo, Buildings, Users } from 'phosphor-react'

import { Details, Header, ProfileContainer, ProfileContent } from './style'
import { api } from '../../../../lib/axios'
import { useEffect, useState } from 'react'

interface QueryDataTypes {
  avatar_url: string
  name: string
  html_url: string
  bio: string
  login: string
  company: string
  followers: number
}

export function Profile() {
  const [userData, setUserData] = useState<QueryDataTypes>({} as QueryDataTypes)

  async function queryData() {
    const response = await api.get('users/EmersonArgeu')

    setUserData(response.data)
  }

  console.log(userData)

  useEffect(() => {
    queryData()
  }, [])

  return (
    <ProfileContainer>
      <img src={userData.avatar_url} alt="avatar" />
      <ProfileContent>
        <Header>
          <strong>{userData.name}</strong>
          <a href={userData.html_url}>
            GITHUB <ArrowSquareOut size={14} color="#3294F8" weight="fill" />
          </a>
        </Header>
        <p>{userData.bio}</p>
        <Details>
          <span>
            <GithubLogo size={18} color="#3A536B" weight="fill" />
            {userData.login}
          </span>
          <span>
            <Buildings size={18} color="#3A536B" weight="fill" />
            {userData.company}
          </span>
          <span>
            <Users size={18} color="#3A536B" weight="fill" />
            {userData.followers} seguidores
          </span>
        </Details>
      </ProfileContent>
    </ProfileContainer>
  )
}
