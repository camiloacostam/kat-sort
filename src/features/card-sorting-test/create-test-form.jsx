//Next UI Components
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react'
// Components
import DynamicQuestionaryForm from './dynamic-questionary-form'
import DynamicItemListForm from './dynamic-item-list-form'
// Hooks
import useTest from './use-test'

export default function CreateTestForm({
  questions,
  addQuestion,
  removeQuestion
}) {
  const { cards, addCard, removeCard, columns, addColumn, removeColumn } =
    useTest()

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div>
        <Card className="">
          <CardHeader>
            <span>
              <h1 className="font-bold text-2xl">Cuestionario</h1>
              <p>
                Agrega tantas preguntas como sean necesarias para la prueba.
              </p>
            </span>
          </CardHeader>
          <CardBody>
            <DynamicQuestionaryForm
              questions={questions}
              onAddQuestion={addQuestion}
              onRemoveQuestion={removeQuestion}
            />
          </CardBody>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader>
            <span>
              <h1 className="font-bold text-2xl">Cartas</h1>
              <p>Crea las cartas iniciales para la prueba.</p>
            </span>
          </CardHeader>
          <CardBody>
            <DynamicItemListForm
              items={cards}
              onAddItem={addCard}
              onRemoveItem={removeCard}
            />
          </CardBody>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader>
            <span>
              <h1 className="font-bold text-2xl">Categorías</h1>
              <p>Crea las categorías iniciales para la prueba.</p>
            </span>
          </CardHeader>
          <CardBody>
            <DynamicItemListForm
              items={columns}
              onAddItem={addColumn}
              onRemoveItem={removeColumn}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
