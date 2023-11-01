import { Header } from '../../components/Header'
import { ContentContainer, LayoutContainer } from './style'
import { Outlet } from 'react-router-dom'

export function LayoutDefault() {
  return (
    <LayoutContainer>
      <Header />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </LayoutContainer>
  )
}
