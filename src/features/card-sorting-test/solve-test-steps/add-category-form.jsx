import propTypes from 'prop-types'
// Next ui Components
import { Input, Button } from '@nextui-org/react'
// Form validation
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
// Notifications
import { toast } from 'sonner'

const schema = yup.object().shape({
  category: yup.string().required('Este campo es requerido')
})

export default function AddCategoryForm({ onAddCategory }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      category: ''
    }
  })

  const onSubmit = (category) => {
    onAddCategory(category)
    reset()
    toast.success('Carta agregada correctamente')
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <span className="flex items-start gap-2">
        <Button color="primary" type="submit" size="lg">
          Agregar categoría
        </Button>
        <Input
          {...register('category')}
          label="Categoría"
          type="text"
          isInvalid={!!errors?.category}
          errorMessage={errors?.category?.message}
          color={errors?.category ? 'danger' : 'default'}
        />
      </span>
    </form>
  )
}

AddCategoryForm.propTypes = {
  onAddCategory: propTypes.func.isRequired
}
