import propsTypes from "prop-types";
//Next Ui Components
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Divider,
  Button,
} from "@nextui-org/react";

export default function TestInstructions({ testName, onContinue }) {
  return (
    <span className="flex flex-col md:flex-row w-full h-[80vh] justify-center align-top items-center gap-10 p-10">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Bienvenido a KatSort
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-lg mx-auto mb-8">
          Estas a punto de realizar el test de Card Sorting para el test:{" "}
          <strong>{testName}</strong>
        </p>
      </div>
      <Card className="p-3">
        <CardHeader>
          <h1 className="text-5xl font-semibold mb-2">Instrucciones:</h1>
        </CardHeader>
        <CardBody>
          <ul className="list-disc list-inside">
            <li>
              En la columna de la izquierda encontraras las cartas que se han
              creado para este test
            </li>
            <li>
              El objetivo es que clasifiques las cartas en las categorías que
              tengan sentido para ti
            </li>
            <li>
              No hay respuestas correctas o incorrectas, simplemente haz lo que
              te resulte más natural.
            </li>
          </ul>
        </CardBody>
        <Divider />
        <CardFooter className="flex flex-row-reverse">
          <Button size="lg" color="primary" onClick={onContinue}>
            Comenzar
          </Button>
        </CardFooter>
      </Card>
    </span>
  );
}

TestInstructions.propsTypes = {
  testName: propsTypes.string.isRequired,
  onContinue: propsTypes.func.isRequired,
};
