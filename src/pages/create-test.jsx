// Card Sorting Test Features
import {
  GeneralTestInfo,
  TestQuestionary,
  TestCards,
  TestCategories,
  TestSummary
} from '../features/card-sorting-test/create-test-steps'
//Next Ui Components
import { Breadcrumbs, BreadcrumbItem, Button } from '@nextui-org/react'
// Hooks
import useStepForm from '../features/card-sorting-test/use-form-steps'
import useTest from '../features/card-sorting-test/use-test'

const FORM_STEPS = [
  'Información general',
  'Cuestionario',
  'Cartas',
  'Categorías',
  'Resumen de la prueba'
]

export default function CreateTestPage() {
  const { step, nextStep, prevStep } = useStepForm()
  const { testSummary, setTestSummary, createTest, loading } = useTest()

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <GeneralTestInfo
            onContinue={nextStep}
            testInfo={testSummary}
            setTestInfo={setTestSummary}
          />
        )
      case 1:
        return (
          <TestQuestionary
            onContinue={nextStep}
            onBack={prevStep}
            questions={testSummary?.questions || []}
            setTestInfo={setTestSummary}
          />
        )
      case 2:
        return (
          <TestCards
            onContinue={nextStep}
            onBack={prevStep}
            cards={testSummary?.cards || []}
            setTestInfo={setTestSummary}
          />
        )
      case 3:
        return testSummary?.type === 'abierto' ? (
          <span className="flex flex-col items-center gap-10">
            <span className="flex flex-col items-center">
              <p className="text-gray-600 text-lg ">
                Se ha seleccionado un tipo de Test <strong>abierto</strong>, por
                lo que no es necesario crear categorías.
              </p>
              <p className="text-gray-600 text-lg ">
                Puede Continuar con el siguiente paso en la creación de la
                prueba.
              </p>
            </span>
            <Button color="primary" onClick={nextStep}>
              Continuar al siguiente paso
            </Button>
          </span>
        ) : (
          <TestCategories
            onContinue={nextStep}
            onBack={prevStep}
            categories={testSummary?.categories || []}
            setTestInfo={setTestSummary}
          />
        )

      case 4:
        return (
          <TestSummary
            testSummary={testSummary}
            onBack={prevStep}
            onCreateTest={createTest}
            loading={loading}
          />
        )
      default:
        return (
          <TestQuestionary
            onContinue={nextStep}
            onBack={prevStep}
            questions={testSummary?.questions || []}
            setTestInfo={setTestSummary}
          />
        )
    }
  }

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      <main className="flex-grow  bg-gray-100 p-6 px-20 ">
        <section className="mb-10" id="crearte-test-header">
          <span>
            <h1 className="text-2xl font-semibold mb-1">Crear Test</h1>
            <p className="text-gray-500 mb-4">
              Complete el formulario para crear una nueva prueba, recuerde que
              puede volver al paso anterior en cualquier momento, en caso de
              haber realizado algún cambio debe guardar la información antes de
              continuar.
            </p>
          </span>
        </section>
        <section
          className="flex flex-col gap-10 justify-center items-center w-full"
          id="create-test-form"
        >
          <Breadcrumbs color="primary" size="lg">
            {FORM_STEPS.map((formStep, index) => (
              <BreadcrumbItem isCurrent={step === index} key={index}>
                {formStep}
              </BreadcrumbItem>
            ))}
          </Breadcrumbs>

          <div className=" flex w-full items-center justify-center">
            {' '}
            {renderStep()}
          </div>
        </section>
      </main>
    </div>
  )
}
