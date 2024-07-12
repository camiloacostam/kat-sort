import { useState } from "react";
import propTypes from "prop-types";
// React DnD
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TestBoard from "../test-board";
import { Button } from "@nextui-org/react";

export default function CardSortingTest({
  initialSort,
  onContinue,
  onBack,
  onCompleteTest,
}) {
  const [columns, setColumns] = useState(initialSort || []);

  const handleCompleteTest = () => {
    onCompleteTest(columns).then(() => {
      onContinue();
    });
  };

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
      <span className="px-3">
        <DndProvider backend={HTML5Backend}>
          <TestBoard columns={columns} setColumns={setColumns} />
        </DndProvider>
      </span>
    </div>
  );
}

CardSortingTest.propTypes = {
  initialSort: propTypes.array.isRequired,
  onContinue: propTypes.func.isRequired,
  onBack: propTypes.func.isRequired,
  onCompleteTest: propTypes.func.isRequired,
};
