import PropTypes from 'prop-types'
//Next UI Components
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react'
// Components
import DynamicQuestionaryForm from './dynamic-questionary-form'

export default function CreateTestForm({
  questions,
  addQuestion,
  removeQuestion,
  setQuestions,
  updateQuestion,
  cards,
  addCard,
  removeCard,
  setCards,
  updateCard,
  columns,
  addColumn,
  removeColumn,
  setColumns,
  updateColumn
}) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      <div className="col-span-1">
        <Card className="">
          <CardHeader>
            <span>
              <h1 className="font-bold text-2xl">Cuestionario</h1>
              <p className="text-gray-500">
                En el siguiente formulario podrás agregar tantas preguntas como
                considere necesarias para la prueba de Card sorting.
              </p>
            </span>
          </CardHeader>
          <CardBody>
            <DynamicQuestionaryForm
              questions={questions}
              addQuestion={addQuestion}
              removeQuestion={removeQuestion}
              setQuestions={setQuestions}
              updateQuestion={updateQuestion}
              questionListHeaderLabel="Preguntas Guardadas"
              inputLabel="Pregunta"
            />
          </CardBody>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader>
            <span>
              <h1 className="font-bold text-2xl">Cartas</h1>
              <p className="text-gray-500">
                En el siguiente formulario podrás agregar tantas cartas como
                considere necesarias para la prueba de Card sorting.
              </p>
            </span>
          </CardHeader>
          <CardBody>
            <DynamicQuestionaryForm
              questions={cards}
              addQuestion={addCard}
              removeQuestion={removeCard}
              setQuestions={setCards}
              updateQuestion={updateCard}
              questionListHeaderLabel="Cartas Creadas"
              inputLabel="Carta"
            />
          </CardBody>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader>
            <span>
              <h1 className="font-bold text-2xl">Categorías</h1>
              <p className="text-gray-500">
                En el siguiente formulario podrás agregar tantas categorías como
                considere necesarias para la prueba de Card sorting.
              </p>
            </span>
          </CardHeader>
          <CardBody>
            <DynamicQuestionaryForm
              items={columns}
              addItem={addColumn}
              removeItem={removeColumn}
              setItems={setColumns}
              updateItem={updateColumn}
              itemListHeaderLabel="Categorías Creadas"
              inputLabel="Categoría"
            />
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

CreateTestForm.propTypes = {
  questions: PropTypes.array.isRequired,
  addQuestion: PropTypes.func.isRequired,
  removeQuestion: PropTypes.func.isRequired,
  setQuestions: PropTypes.func.isRequired,
  updateQuestion: PropTypes.func.isRequired,
  cards: PropTypes.array.isRequired,
  addCard: PropTypes.func.isRequired,
  removeCard: PropTypes.func.isRequired,
  setCards: PropTypes.func.isRequired,
  updateCard: PropTypes.func.isRequired,
  columns: PropTypes.array.isRequired,
  addColumn: PropTypes.func.isRequired,
  removeColumn: PropTypes.func.isRequired,
  setColumns: PropTypes.func.isRequired,
  updateColumn: PropTypes.func.isRequired
}
