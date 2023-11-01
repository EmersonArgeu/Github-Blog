import { Input } from './style'
import { useForm } from 'react-hook-form'

export function SearchBar() {
  const { register, handleSubmit, reset } = useForm()

  function handleSubmitForm(data) {
    console.log(data)

    reset()
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
