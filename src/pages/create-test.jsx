// Card Sorting Test Features
import { CreateTestForm } from '../features/card-sorting-test'
// Next Ui Components
import { Button } from '@nextui-org/react'
// UI Components
import { Aside } from '../features/ui'
// Hooks
import useTest from '../features/card-sorting-test/use-test'

export default function CreateTestPage() {
  const {
    questions,
    addQuestion,
    removeQuestion,
    setQuestions,
    updateQuestion,
    cards,
    addCard,
    removeCard,
    updateCard,
    setCards,
    columns,
    addColumn,
    removeColumn,
    setColumns,
    updateColumn
  } = useTest()

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      <Aside />
      <main className="flex-grow bg-gray-100 p-6">
        <section id="crearte-test-header">
          <span>
            <h1 className="text-2xl font-semibold mb-1">Crear Test</h1>
            <p className="text-gray-500 mb-4">
              A continuación encontrar los formularios y campos necesarios para
              crear una prueba de Card Sorting.
            </p>
          </span>
        </section>
        <section id="create-test-form">
          <CreateTestForm
            questions={questions}
            addQuestion={addQuestion}
            setQuestions={setQuestions}
            removeQuestion={removeQuestion}
            updateQuestion={updateQuestion}
            cards={cards}
            addCard={addCard}
            removeCard={removeCard}
            setCards={setCards}
            updateCard={updateCard}
            columns={columns}
            addColumn={addColumn}
            removeColumn={removeColumn}
            setColumns={setColumns}
            updateColumn={updateColumn}
          />
        </section>
      </main>
    </div>
  )
}
