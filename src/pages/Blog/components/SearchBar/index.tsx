import { Input } from './style'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { QueryContext } from '../../../../contexts/QueryContext'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type searchformInput = z.infer<typeof searchFormSchema>

export function SearchBar() {
  const { APISearch } = useContext(QueryContext)
  const { register, handleSubmit, reset } = useForm<searchformInput>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSubmitForm(data: searchformInput) {
    APISearch(data.query)
    reset()

    console.log(data.query)
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <Input
        type="text"
        placeholder="Buscar conteúdo"
        required
        {...register('query')}
      />
    </form>
  )
}
