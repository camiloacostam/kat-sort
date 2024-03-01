// UI Components for the home page
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AuthGoogleButton } from '@/components/component/auth-google-button'
import { AuthGithubButton } from '@/components/component/auth-github-button'

export default async function Home() {
  return (
    <main className='h-screen flex flex-col justify-center items-center bg-gray-50 text-center px-4 sm:px-6 lg:px-8'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
        Bienvenido a Kat Sort
      </h1>
      <p className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-lg mx-auto mb-8'>
        Una App revolucionaria y simple para aplicar pruebas de Card Sorting y
        mejorar tu flujo de trabajo.
      </p>
      <Card className='mb-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto'>
        <CardHeader>
          <CardTitle className='text-xl sm:text-2xl'>
            ¡Sumérgete en el mundo del Card Sorting!
          </CardTitle>
          <CardDescription className='text-gray-500'>
            Inicia sesión y comienza a organizar tus proyectos ahora.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col  lg:flex-row justify-center align-middle '>
            <AuthGoogleButton />
            <AuthGithubButton />
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
