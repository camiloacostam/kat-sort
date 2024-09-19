import { useEffect } from 'react'
import { useTest } from '../features/card-sorting-test'
//Router Components
import { Link } from 'react-router-dom'
//nex Ui Components
import { Spinner } from '@nextui-org/react'
//UI Components
import { TestInfoCard } from '../features/card-sorting-test'
import { toast } from 'sonner'

export default function DashboardPage() {
  const { getUserTest, editTestName, tests, loading } = useTest()

  const handleEditTestName = async (testId, name) => {
    await editTestName(testId, name)
      .then(() => toast.success('Nombre de la prueba editado correctamente'))
      .catch(() => toast.error('No se pudo editar el nombre de la prueba'))
  }

  useEffect(() => {
    getUserTest()
  }, [])

  return (
    <div className="flex flex-col bg-gray-100 p-6 px-20 w-full min-h-screen">
      <header className="flex flex-row gap-8 mb-8">
        <h1 className="text-2xl font-semibold mb-4">Pruebas Creadas</h1>
        <Link
          className={`text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2  focus:outline-none `}
          to="/Crear-prueba"
        >
          Crear Prueba
        </Link>
      </header>
      <main className=" flex w-full">
        {loading ? (
          <span className="flex w-full">
            <Spinner />
          </span>
        ) : (
          <section className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {tests &&
              tests.map(
                (test, index) =>
                  test?.isActive && (
                    <div key={index}>
                      <TestInfoCard
                        test={test}
                        key={index}
                        onEditTest={handleEditTestName}
                      />
                    </div>
                  )
              )}
          </section>
        )}
      </main>
    </div>
  )
}
