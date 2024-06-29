import { useState } from "react";
import propTypes from "prop-types";
// React DnD
import { DragDropContext } from "react-beautiful-dnd";
import Column from "../../ui/column";

export default function CardSortingTest({ initialSort = [] }) {
  const [columns, setColumns] = useState([
    {
      id: "column-cards",
      category: "Cartas",
      cards: [
        "Carta prueba 1",
        "Carta prueba 2",
        "Carta prueba 3",
        "Carta prueba 4",
      ],
      _id: "667dc8b4d4a1735506a3aae9",
    },
    {
      id: "column-0",
      category: "Categoria 1",
      cards: [],
      _id: "667dc8b4d4a1735506a3aaea",
    },
    {
      id: "column-1",
      category: "Categoria 2",
      cards: [],
      _id: "667dc8b4d4a1735506a3aaeb",
    },
    {
      id: "column-2",
      category: "Categoria 3",
      cards: [],
      _id: "667dc8b4d4a1735506a3aaec",
    },
  ]);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    const start = columns.find((column) => column.id === source.droppableId);
    const finish = columns.find(
      (column) => column.id === destination.droppableId
    );

    if (start === finish) {
      const newCards = Array.from(start.cards);
      newCards.splice(source.index, 1);
      newCards.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        cardIds: newCards,
      };

      const newColumns = columns.map((column) =>
        column.id === newColumn.id ? newColumn : column
      );
      setColumns(newColumns);
      return;
    }
    const startCardIds = Array.from(start.cards);
    startCardIds.splice(source.index, 1);
    const newStart = {
      ...start,
      cardIds: startCardIds,
    };

    const finishCardIds = Array.from(finish.cards);
    finishCardIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      cardIds: finishCardIds,
    };

    const newColumns = columns.map((column) => {
      if (column.id === newStart.id) return newStart;
      if (column.id === newFinish.id) return newFinish;
      return column;
    });

    setColumns(newColumns);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="px-4">
        <h1 className="text-3xl -font-bold mb-4">Prueba de card sorting</h1>
        <div style={{ display: "flex" }}>
          {columns.map((column, index) => {
            return (
              <Column
                key={`column-${index}`}
                column={column}
                cards={column.cards}
              />
            );
          })}
        </div>
      </div>
    </DragDropContext>
  );
}

CardSortingTest.propTypes = {
  initialSort: propTypes.array.isRequired,
};
