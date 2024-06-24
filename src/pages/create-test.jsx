// Card Sorting Test Features
import {
  GeneralTestInfo,
  TestQuestionary,
  TestCards,
  TestCategories,
  TestSummary,
} from "../features/card-sorting-test/create-test-steps";
//Next Ui Components
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
// UI Components
import { Aside } from "../features/ui";
// Hooks
import useStepForm from "../features/card-sorting-test/use-form-steps";
import useTest from "../features/card-sorting-test/use-test";

const FORM_STEPS = [
  "Información general",
  "Cuestionario",
  "Cartas",
  "Categorías",
  "Resumen de la prueba",
];

export default function CreateTestPage() {
  const { step, nextStep, prevStep } = useStepForm();
  const { testSummary, setTestSummary, createTest, loading } = useTest();

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <GeneralTestInfo
            onContinue={nextStep}
            testInfo={testSummary}
            setTestInfo={setTestSummary}
          />
        );
      case 1:
        return (
          <TestQuestionary
            onContinue={nextStep}
            onBack={prevStep}
            questions={testSummary?.questions || []}
            setTestInfo={setTestSummary}
          />
        );
      case 2:
        return (
          <TestCards
            onContinue={nextStep}
            onBack={prevStep}
            cards={testSummary?.cards || []}
            setTestInfo={setTestSummary}
          />
        );
      case 3:
        return (
          <TestCategories
            onContinue={nextStep}
            onBack={prevStep}
            categories={testSummary?.categories || []}
            setTestInfo={setTestSummary}
          />
        );
      case 4:
        return (
          <TestSummary
            testSummary={testSummary}
            onBack={prevStep}
            onCreateTest={createTest}
            loading={loading}
          />
        );
      default:
        return (
          <TestQuestionary
            onContinue={nextStep}
            onBack={prevStep}
            questions={testSummary?.questions || []}
            setTestInfo={setTestSummary}
          />
        );
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      <main className="flex-grow  bg-gray-100 p-6 px-20 ">
        <section className="mb-10" id="crearte-test-header">
          <span>
            <h1 className="text-2xl font-semibold mb-1">Crear Test</h1>
            <p className="text-gray-500 mb-4">
              A continuación debe seguir los pasos y completar los formularios y
              campos necesarios para crear una prueba de Card Sorting.
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
            {" "}
            {renderStep()}
          </div>
        </section>
      </main>
    </div>
  );
}
