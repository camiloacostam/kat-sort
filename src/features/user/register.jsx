//Router Components
import { Link } from 'react-router-dom'
//NextUI Components
import { Button, Input, Spinner } from '@nextui-org/react'
//Form Validations utilities
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email no valido')
    .required('El campo email es requerido'),
  password: yup
    .string()
    .required('El capo Contraseña es requerido')
    .min(8, 'La contraseña debe tener al menos 8 caracteres'),
  name: yup.string().required('El campo nombre es requerido'),
  lastName: yup.string().required('El campo apellido es requerido')
})

export const RegisterUserForm = ({ onRegister, loading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(registerSchema) })

  const handleRegister = (data) => {
    onRegister(data)
  }

  return (
    <div className="mx-auto max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl space-y-6  ">
      <div className="flex justify-center items-center flex-col sm:flex-row">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-center">
            Registro de usuario
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-center">
            Por favor complete los campos para registrarse
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit(handleRegister)}>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Input
                {...register('name')}
                id="name"
                label="Nombre"
                type="text"
                required
                isInvalid={errors.name}
                color={errors.name ? 'danger' : 'default'}
                errorMessage={errors.name && errors.name.message}
              />
            </div>
            <div className="space-y-2">
              <Input
                {...register('lastName')}
                id="last-name"
                type="text"
                label="Apellido"
                required
                isInvalid={errors.lastName}
                color={errors.lastName ? 'danger' : 'default'}
                errorMessage={errors.lastName && errors.lastName.message}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Input
              {...register('email')}
              id="email"
              required
              label="Correo Electrónico"
              type="email"
              isInvalid={errors.email}
              color={errors.email ? 'danger' : 'default'}
              errorMessage={errors.email && errors.email.message}
            />
          </div>
          <div className="space-y-2">
            <Input
              {...register('password')}
              id="password"
              label="Contraseña"
              required
              type="password"
              isInvalid={errors.password}
              color={errors.password ? 'danger' : 'default'}
              errorMessage={errors.password && errors.password.message}
            />
          </div>
          <div className="w-full flex items-center">
            {loading ? (
              <Spinner size="large" />
            ) : (
              <Button
                loading={loading}
                color="primary"
                className="w-full"
                type="submit"
              >
                Registrar
              </Button>
            )}
          </div>
        </div>
      </form>
      <div className="mt-4 text-center">
        <Link
          className="text-blue-500 hover:text-blue-700 font-bold text-center"
          to="/"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
