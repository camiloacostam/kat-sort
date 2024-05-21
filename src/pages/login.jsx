import { Card } from '@nextui-org/react'
import { Login } from '../features/user'
// Hooks
import { useAuth } from '../features/user'
// Router
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const { login, error } = useAuth()
  const navigate = useNavigate()

  const handleLogin = async (data) => {
    await login(data?.email, data?.password).then(() => {
      navigate('/')
    })
  }
  return (
    <span className="flex flex-col md:flex-row w-full h-screen justify-center align-top items-center gap-10 p-10">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Bienvenido a KatSort
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-lg mx-auto mb-8">
          Una aplicación revolucionaria que simplifica las pruebas de Card
          Sorting y mejora su flujo de trabajo.
        </p>
      </div>
      <div>
        <Card>
          <Login onSubmit={handleLogin} />
          {error && <p>{error}</p>}
        </Card>
      </div>
    </span>
  )
}
