import { useState } from 'react'
import propTypes from 'prop-types'
import AddCategoryForm from './add-category-form'
// React DnD
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import TestBoard from '../test-board'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure
} from '@nextui-org/react'
// UI Components
import { CommentModal } from '../../ui'
// Context
import { useColumns } from '../../context'

export default function CardSortingTest({
  testType,
  onContinue,
  onBack,
  onCompleteTest
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const {
    isCommentModalOpen,
    onOpenCommentModalChange,
    columns,
    setColumns,
    addColumns,
    addCommentToColumn,
    selectedColumn
  } = useColumns()

  const handleCompleteTest = () => {
    onCompleteTest(columns).then(() => {
      onContinue()
    })
  }

  return (
    <>
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
            <Button color="primary" size="lg" onClick={onOpen}>
              Ver instrucciones
            </Button>
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
      <CommentModal
        isOpen={isCommentModalOpen}
        onOpenChange={onOpenCommentModalChange}
        onComment={addCommentToColumn}
        comment={selectedColumn?.comment}
      />
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Instrucciones:</ModalHeader>
              <ModalBody>
                <ul className=" list-inside text-justify ">
                  <li>
                    <strong>1.</strong> En la columna de la izquierda
                    encontraras las cartas que se han creado para este test
                  </li>
                  <li>
                    <strong>2.</strong> El objetivo es que clasifiques las
                    cartas en las categorías que tengan sentido para ti
                  </li>
                  <li>
                    <strong>3.</strong> No hay respuestas correctas o
                    incorrectas, simplemente haz lo que te resulte más natural.
                  </li>
                </ul>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

CardSortingTest.propTypes = {
  testType: propTypes.string.isRequired,
  onContinue: propTypes.func.isRequired,
  onBack: propTypes.func.isRequired,
  onCompleteTest: propTypes.func.isRequired
}
