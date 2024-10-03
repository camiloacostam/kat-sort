import propTypes from 'prop-types'
import { Button } from '@nextui-org/react'
import { useDrop } from 'react-dnd'
import Card from './test-card'
import { useColumns } from '../context'

const Column = ({ column, moveCard }) => {
  const { onOpenCommentModal, setSelectedColumn, deleteColumn } = useColumns()

  const [{ isOver }, drop] = useDrop({
    accept: 'CARD',
    drop: (item) => moveCard(item.card, item.columnId, column.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  })

  return (
    <div
      ref={drop}
      style={{ backgroundColor: isOver ? 'lightgrey' : '' }}
      className="bg-gray-50 border-1 border-gray-300 rounded-md shadow-lg h-[70vh]  min-w-[250px] p-3 overflow-y-auto py-3"
    >
      <span>
        <h2 className="text-xl font-bold mb-2 ">{column.category}</h2>
        <div className="flex flex-row gap-2 mb-6">
          {column?.id !== 'column-cards' && (
            <Button
              color="primary"
              onClick={() => {
                onOpenCommentModal()
                setSelectedColumn(column)
              }}
            >
              Comentar Categoría
            </Button>
          )}
          {column.isErasable && (
            <Button color="danger" onClick={() => deleteColumn(column?.id)}>
              Eliminar
            </Button>
          )}
        </div>
      </span>
      {column.cards.map((card) => (
        <Card key={card} card={card} columnId={column.id} />
      ))}
    </div>
  )
}

Column.propTypes = {
  column: propTypes.object.isRequired,
  moveCard: propTypes.func.isRequired
}

export default Column
