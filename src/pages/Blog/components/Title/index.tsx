import { QueryContext } from '../../../../contexts/QueryContext'
import { TitleContainer } from './style'
import { useContext } from 'react'
export function Title() {
  const { searchData } = useContext(QueryContext)

  return (
    <TitleContainer>
      <strong>Publicações</strong>
      <span>{searchData.length} publicações</span>
    </TitleContainer>
  )
}
