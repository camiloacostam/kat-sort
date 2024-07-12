import { useState } from "react";
import propTypes from "prop-types";
//UI Components
import Column from "./test-column";

export default function TestBoard({ columns = [], setColumns }) {
  const moveCard = (card, fromColumnId, toColumnId) => {
    if (fromColumnId === toColumnId) {
      return;
    }

    setColumns((prevColumns) => {
      const updatedColumns = prevColumns.map((column) => {
        if (column.id === fromColumnId) {
          return {
            ...column,
            cards: column.cards.filter((c) => c !== card),
          };
        } else if (column.id === toColumnId) {
          return {
            ...column,
            cards: [...column.cards, card],
          };
        }
        return column;
      });
      return updatedColumns;
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      {columns.map((column) => (
        <Column key={column.id} column={column} moveCard={moveCard} />
      ))}
    </div>
  );
}

TestBoard.propTypes = {
  columns: propTypes.array.isRequired,
  setColumns: propTypes.func.isRequired,
};
