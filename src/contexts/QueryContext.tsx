import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

export interface IssueDataType {
  title: string
  body: string
  created_at: string
  number: number
  comments: number
  html_url: string
  user: {
    login: string
  }
}

interface ProfileDataTypes {
  avatar_url: string
  name: string
  html_url: string
  bio: string
  login: string
  company: string
  followers: number
}

interface QueryProviderProps {
  children: ReactNode
}

interface QueryContextType {
  APISearch: (query?: string) => Promise<void>
  searchData: IssueDataType[]
  userData: ProfileDataTypes
}

export const QueryContext = createContext({} as QueryContextType)

export function QueryProvider({ children }: QueryProviderProps) {
  const [searchData, setSearchData] = useState([])

  async function APISearch(query: string = '') {
    const response = await api.get(
      `search/issues?q=${query}%20repo:EmersonArgeu/Github-Blog`,
    )

    setSearchData(response.data.items)
  }

  useEffect(() => {
    APISearch()
  }, [])

  const [userData, setUserData] = useState<ProfileDataTypes>(
    {} as ProfileDataTypes,
  )

  async function APIUsers() {
    const response = await api.get('users/EmersonArgeu')

    setUserData(response.data)
  }

  useEffect(() => {
    APIUsers()
  }, [])

  return (
    <QueryContext.Provider
      value={{
        APISearch,
        searchData,
        userData,
      }}
    >
      {children}
    </QueryContext.Provider>
  )
}
