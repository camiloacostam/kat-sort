import propTypes from 'prop-types'
// Next UI Components
import { Button, Card, CardHeader, Spinner } from '@nextui-org/react'
// React Router
import { useNavigate } from 'react-router-dom'

export default function TestSummary({
  onBack,
  testSummary,
  onCreateTest,
  loading
}) {
  const navigate = useNavigate()

  const handleCreateTest = () => {
    onCreateTest().then(() => {
      navigate('/')
    })
  }

  return (
    <main className="w-full flex flex-col gap-4">
      <header className="flex justify-between items-center">
        <p className="text-gray-500 ">
          A continuación se muestra los detalles de la prueba que desea crear,
          recuerde revisarlos bien antes de crearla.
        </p>
        <span className="flex gap-2 flex-row-reverse">
          {loading ? (
            <Spinner color="primary" />
          ) : (
            <>
              <Button
                onClick={handleCreateTest}
                color="primary"
                size="lg"
                loading={loading}
                className="w-40"
              >
                Crear Test
              </Button>
              <Button
                onClick={onBack}
                color="primary"
                size="lg"
                loading={loading}
              >
                Volver atrás
              </Button>{' '}
            </>
          )}
        </span>
      </header>
      <Card>
        <CardHeader className="flex flex-col gap-5 justify-between items-start">
          <section className="flex flex-col  items-start">
            <p className="text-sm text-gray-600 mb-0">Nombre de la prueba:</p>
            <h2 className="font-bold text-3xl">{testSummary.name}</h2>
          </section>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="flex flex-col gap-5 justify-between items-start">
          <section id="summaryHeader" className="flex flex-col justify-end ">
            <p className="text-sm text-gray-600 mb-0">Tipo de prueba:</p>
            <p className="capitalize">{testSummary.type}</p>
          </section>
        </CardHeader>
      </Card>
      <section className="grid grid-cols-4 gap-3">
        <span className="col-span-2">
          <Card>
            <CardHeader className="flex flex-col gap-5 justify-between items-start">
              <section>
                <p className="text-sm text-gray-600 mb-0">Cuestionario:</p>
                <ul className="capitalize ">
                  {testSummary.questions.map((question, index) => (
                    <li type="cicle" key={index}>
                      {question}
                    </li>
                  ))}
                </ul>
              </section>
            </CardHeader>
          </Card>
        </span>
        <span>
          <Card>
            <CardHeader className="flex flex-col gap-5 justify-between items-start">
              <section>
                <p className="text-sm text-gray-600 mb-0">Cartas:</p>
                <ul className="capitalize ">
                  {testSummary.cards.map((card, index) => (
                    <li type="cicle" key={index}>
                      {card}
                    </li>
                  ))}
                </ul>
              </section>
            </CardHeader>
          </Card>
        </span>
        <span>
          <Card>
            <CardHeader className="flex flex-col gap-5 justify-between items-start">
              <section>
                <p className="text-sm text-gray-600 mb-0">Categorías:</p>
                {testSummary?.type === 'abierto' ? (
                  <span>
                    <p>
                      No se registran categorías, dado que es un test de tipo
                      abierto
                    </p>
                  </span>
                ) : (
                  <ul className="capitalize ">
                    {testSummary.categories.map((category, index) => (
                      <li type="cicle" key={index}>
                        {category}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </CardHeader>
          </Card>
        </span>
      </section>
    </main>
  )
}

TestSummary.propTypes = {
  onCreateTest: propTypes.func.isRequired,
  onBack: propTypes.func.isRequired,
  testSummary: propTypes.object.isRequired,
  loading: propTypes.bool.isRequired
}
