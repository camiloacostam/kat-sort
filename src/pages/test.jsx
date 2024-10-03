import { useEffect } from 'react'
//Router
import { useParams, useNavigate } from 'react-router-dom'
// Test utilities
import { useStepForm, useSolveTest } from '../features/card-sorting-test'
// Next ui components
import { Button, Spinner } from '@nextui-org/react'
// Test Containers
import {
  TestInstructions,
  RegisterUser,
  Questionary,
  CardSortingTest,
  Congratulation
} from '../features/card-sorting-test/solve-test-steps'
// Columns context

export default function TestPage() {
  const { accessLink } = useParams()
  const navigate = useNavigate()
  const { step, nextStep, prevStep } = useStepForm()
  const {
    test,
    solution,
    startTest,
    getTest,
    saveAnswers,
    completeTest,
    loading
  } = useSolveTest()

  useEffect(() => {
    getTest(accessLink)
  }, [accessLink])

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <TestInstructions testName={test?.name || ''} onContinue={nextStep} />
        )
      case 1:
        return (
          <RegisterUser
            onContinue={nextStep}
            onStartTest={startTest}
            accessLink={accessLink}
            loading={loading}
          />
        )
      case 2:
        return (
          <Questionary
            questions={test?.questions}
            onContinue={nextStep}
            onSaveAnswers={saveAnswers}
            loading={loading}
          />
        )
      case 3:
        return (
          <CardSortingTest
            testType={test?.type}
            onBack={prevStep}
            onContinue={nextStep}
            onCompleteTest={completeTest}
          />
        )
      case 4:
        return <Congratulation />
    }
  }

  return (
    <section className="w-full flex flex-col ">
      <header className="w-full py-5 px-3 bg-gray-100 flex justify-between border-b-1 mb-10">
        <h1 className="text-black text-3xl font-bold cursor-pointer">
          KatSort
        </h1>
      </header>
      <main className="w-full h-full">
        {loading ? (
          <Spinner />
        ) : test?.isActive ? (
          renderStep()
        ) : (
          <span className="flex flex-col items-center gap-10">
            <span className="flex flex-col items-center">
              <p className="text-gray-600 text-lg ">
                No es posible acceder al test
              </p>
            </span>
            <Button color="primary" onClick={() => navigate('/')}>
              Volver al inicio
            </Button>
          </span>
        )}
      </main>
    </section>
  )
}
