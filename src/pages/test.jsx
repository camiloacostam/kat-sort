import { useEffect } from "react";
//Router
import { useParams } from "react-router-dom";
// Test utilities
import { useStepForm, useSolveTest } from "../features/card-sorting-test";
// Next ui components
import { Spinner } from "@nextui-org/react";
// Test Containers
import {
  TestInstructions,
  RegisterUser,
  Questionary,
  CardSortingTest,
} from "../features/card-sorting-test/solve-test-steps";

export default function TestPage() {
  const { accessLink } = useParams();
  const { step, nextStep, prevStep } = useStepForm();
  const { test, solution, startTest, getTest, loading } = useSolveTest();

  useEffect(() => {
    getTest(accessLink);
  }, [accessLink]);

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <TestInstructions testName={test?.name || ""} onContinue={nextStep} />
        );
      case 1:
        return (
          <RegisterUser
            onContinue={nextStep}
            onStartTest={startTest}
            accessLink={accessLink}
            loading={loading}
          />
        );
      case 2:
        return (
          <CardSortingTest initialSort={solution?.sort} />
          // <Questionary
          //   questions={test?.questions}
          //   onContinue={nextStep}
          //   onSaveAnswers={() => {}}
          // />
        );
      case 3:
        <>
          <h1></h1>
        </>;
    }
  };

  console.log(solution);
  return (
    <section className="w-full flex flex-col ">
      <header className="w-full py-5 px-3 bg-gray-100 flex justify-between border-b-1 mb-10">
        <h1 className="text-black text-3xl font-bold cursor-pointer">
          KatSort
        </h1>
      </header>
      <main className="w-full h-full">
        {loading ? <Spinner /> : renderStep()}
      </main>
    </section>
  );
}
