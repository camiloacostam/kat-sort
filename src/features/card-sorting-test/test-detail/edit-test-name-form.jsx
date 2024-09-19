import { Button, input } from '@nextui-org/react'

// Form validation
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

const schema = yup.object().shape({
  name: yup.string().required('Este campo es requerido')
})

export default function EditTestNameForm({
  currentName,
  onSave,
  onCancelEdit
}) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: currentName
    }
  })

  return (
    <form className="flex gap-3 w-full">
      <div>
        <input
          type="text"
          size="sm"
          {...register('name')}
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="flex gap-2">
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <Button size="" color="primary" onClick={handleSubmit(onSave)}>
          Guardar
        </Button>
        <Button color="primary" onClick={onCancelEdit}>
          cancelar
        </Button>
      </div>
    </form>
  )
}
