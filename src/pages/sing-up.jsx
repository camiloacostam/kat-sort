// NextUI Components
import { Card } from '@nextui-org/react'
// users feature component
import { RegisterUserForm } from '../features/user/'
import { useRegister, useAuth } from '../features/user/'

// Router
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

export default function SignUp() {
  const { registerUSer, loading, error } = useRegister()
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleRegister = (registerData) => {
    registerUSer(registerData)
      .then(() =>
        !error
          ? login(registerData.email, registerData.password)
              .then(() => navigate('/'))
              .catch(() => toast.error('No se pudo iniciar sesión'))
          : toast.error('No se pudo registrar el usuario' + error)
      )
      .catch(() => toast.error('No se pudo registrar el usuario'))
  }

  return (
    <span className="flex flex-col md:flex-row w-full h-screen justify-center align-top items-center gap-10 p-10">
      <Card className="p-8">
        <RegisterUserForm onRegister={handleRegister} loading={loading} />
      </Card>
    </span>
  )
}
