import propTypes from "prop-types";
import { Droppable, Draggable } from "react-beautiful-dnd";

const Column = ({ column, cards }) => {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 200px)",
        maxWidth: "100vw",
        margin: "0 8px",
        border: "1px solid lightgrey",
        borderRadius: "4px",
        width: "220px",
        overflowX: "auto",
      }}
      className="bg-gray-100"
    >
      <h3 className="p-2 font-semibold text-lg">{column.category}</h3>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            className="p-2  min-h-28"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {cards.map((card, index) => (
              <Draggable key={index} draggableId={card} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      ...provided.draggableProps.style,
                    }}
                    className="user-select-none bg-white border-1 border-gray-200 rounded-md p-4 mb-2"
                  >
                    {card}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;

Column.propTypes = {
  column: propTypes.object.isRequired,
  cards: propTypes.array.isRequired,
};
