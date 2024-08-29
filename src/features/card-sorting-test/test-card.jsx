import propTypes from 'prop-types'
import { useDrag } from 'react-dnd'

const Card = ({ card, columnId }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    item: { card, columnId },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  })

  return (
    <div
      ref={drag}
      style={{
        backgroundColor: isDragging ? 'darkGrey' : 'white'
      }}
      className="mb-2 bg-gray-100 border-1 border-gray-300 rounded-md shadow-lg p-3 font-semibold text-md"
    >
      {card}
    </div>
  )
}

Card.propTypes = {
  card: propTypes.string.isRequired,
  columnId: propTypes.string.isRequired
}

export default Card
