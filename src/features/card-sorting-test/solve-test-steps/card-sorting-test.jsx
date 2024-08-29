import { useState } from 'react'
import propTypes from 'prop-types'
import AddCategoryForm from './add-category-form'
// React DnD
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import TestBoard from '../test-board'
import { Button } from '@nextui-org/react'

export default function CardSortingTest({
  initialSort,
  testType,
  onContinue,
  onBack,
  onCompleteTest
}) {
  const [columns, setColumns] = useState(initialSort || [])

  const handleCompleteTest = () => {
    onCompleteTest(columns).then(() => {
      onContinue()
    })
  }

  const addColumns = (newCategory) => {
    const { category } = newCategory
    const newColumns = [
      ...columns,
      {
        id: `column-${columns.length + 1}`,
        category: category,
        cards: []
      }
    ]
    setColumns(newColumns)
  }

  console.log(initialSort)
  return (
    <div className="px-20">
      <span className="flex justify-between flex-row ">
        <div>
          <h1 className="text-4xl font-bold">Sorteo de Cartas</h1>
          <p className="text-md text-gray-500">
            Arrastra las cartas a la categoría que consideres que
            correspondiente
          </p>
        </div>
        <div className="flex flex-row-reverse gap-5">
          <Button
            onClick={handleCompleteTest}
            color="primary"
            type="submit"
            size="lg"
          >
            Guardar y Continuar
          </Button>
          <Button color="primary" size="lg" onClick={onBack}>
            Volver atrás
          </Button>
        </div>
      </span>
      {(testType === 'abierto' || testType === 'mixto') && (
        <div className="max-w-[50%] mt-5">
          <AddCategoryForm onAddCategory={addColumns} />
        </div>
      )}
      <span className="px-3 max-w-[90vw] overflow-auto">
        <DndProvider backend={HTML5Backend}>
          <TestBoard columns={columns} setColumns={setColumns} />
        </DndProvider>
      </span>
    </div>
  )
}

CardSortingTest.propTypes = {
  initialSort: propTypes.array.isRequired,
  testType: propTypes.string.isRequired,
  onContinue: propTypes.func.isRequired,
  onBack: propTypes.func.isRequired,
  onCompleteTest: propTypes.func.isRequired
}
