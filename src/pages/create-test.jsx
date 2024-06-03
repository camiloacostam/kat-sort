// Card Sorting Test Features
import { CreateTestForm } from '../features/card-sorting-test'
// Next Ui Components
import { Button } from '@nextui-org/react'
// UI Components
import { Aside } from '../features/ui'
// Hooks
import useTest from '../features/card-sorting-test/use-test'

export default function CreateTestPage() {
  const { questions, addQuestion, removeQuestion, setQuestions } = useTest()

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      <Aside />
      <main className="flex-grow bg-gray-100 p-6">
        <section id="crearte-test-header">
          <span>
            <h1 className="text-2xl font-semibold mb-4">Crear Test</h1>
          </span>
          <span></span>
        </section>
        <section id="create-test-form">
          <CreateTestForm
            questions={questions}
            addQuestion={addQuestion}
            setQuestions={setQuestions}
            removeQuestion={removeQuestion}
          />
        </section>
      </main>
    </div>
  )
}
