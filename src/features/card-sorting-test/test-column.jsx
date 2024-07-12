import propTypes from "prop-types";
import { useDrop } from "react-dnd";
import Card from "./test-card";

const Column = ({ column, moveCard }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "CARD",
    drop: (item) => moveCard(item.card, item.columnId, column.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{ backgroundColor: isOver ? "lightgrey" : "" }}
      className="bg-gray-50 border-1 border-gray-300 rounded-md shadow-lg min-h-[70vh] w-[220px] p-3"
    >
      <h2 className="text-xl font-bold mb-2">{column.category}</h2>
      {column.cards.map((card) => (
        <Card key={card} card={card} columnId={column.id} />
      ))}
    </div>
  );
};

Column.propTypes = {
  column: propTypes.object.isRequired,
  moveCard: propTypes.func.isRequired,
};

export default Column;
