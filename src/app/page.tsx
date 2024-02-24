// UI Components for the home page
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
// import Link from 'next/link'
// //Supabase client
// import { createClient } from '@/utils/supabase/server'
// // Next.js utilities
// import { cookies } from 'next/headers'

export default async function Home() {
  // const cookieStore = cookies()
  // const ServerClient = createClient(cookieStore)

  // const { data, error } = await ServerClient.from('Test').select('*')

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
          <div className='flex flex-row justify-center align-middle '>
            <Button
              type='button'
              className='text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2'
            >
              <svg
                className='w-4 h-4 me-2'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 18 19'
              >
                <path
                  fillRule='evenodd'
                  d='M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z'
                  clipRule='evenodd'
                />
              </svg>
              Iniciar sesión con Google
            </Button>
            <Button
              type='button'
              className='text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center   me-2 mb-2'
            >
              <svg
                className='w-4 h-4 me-2'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z'
                  clipRule='evenodd'
                />
              </svg>
              Iniciar sesión con Github
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
