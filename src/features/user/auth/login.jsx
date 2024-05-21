// Router Components
import { Link } from 'react-router-dom'
// NextUI Components
import { Button, Input } from '@nextui-org/react'
// Form Validations utilities
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Correo Electrónico no válido')
    .required('Ingrese un correo electrónico'),
  password: yup
    .string()
    .required('Ingrese una contraseña')
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
})

export const Login = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const handleLogin = (data) => {
    onSubmit(data)
  }
  return (
    <div className="flex items-center justify-center ">
      <div className=" p-10 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Input
                {...register('email')}
                id="username"
                required
                type="email"
                label="Correo Electrónico"
                isInvalid={errors.email}
                color={errors.email ? 'danger' : 'default'}
                errorMessage={errors.email && errors.email.message}
              />
            </div>
            <div className="space-y-2">
              <Input
                {...register('password')}
                id="password"
                required
                type="password"
                label="Contraseña"
                isInvalid={errors.password}
                color={errors.password ? 'danger' : 'default'}
                errorMessage={errors.password && errors.password.message}
              />
            </div>
            <Button color="primary" className=" w-full" type="submit">
              Iniciar Sesión
            </Button>
            <div className="flex justify-between items-center mt-4">
              <Link className="text-sm underline" href="#">
                ¿Olvidaste tu contraseña?
              </Link>
              <Link className="text-sm underline" to="/registro">
                Registrarse
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
