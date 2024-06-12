// Card Sorting Test Features
import {
  TestTypeForm,
  TestNameForm,
  TestQuestionaryForm,
} from "../features/card-sorting-test";
// Next Ui Components
import { Button, Card, CardHeader, CardBody } from "@nextui-org/react";
// UI Components
import { Aside } from "../features/ui";
// Hooks
import useTest from "../features/card-sorting-test/use-test";
import CreateTestForm from "../features/card-sorting-test/create-test-form";

export default function CreateTestPage() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      <Aside />
      <main className="flex-grow bg-gray-100 p-6 ">
        <section id="crearte-test-header">
          <span>
            <h1 className="text-2xl font-semibold mb-1">Crear Test</h1>
            <p className="text-gray-500 mb-4">
              A continuación encontrar los formularios y campos necesarios para
              crear una prueba de Card Sorting.
            </p>
          </span>
        </section>
        <section className="flex flex-col gap-3" id="create-test-form">
          <Card>
            <CardHeader className="flex flex-row justify-between items-start">
              <span>
                <h1 className="font-bold text-2xl">Nombre de la Prueba</h1>
              </span>
              <span>
                <TestNameForm onSubmitName={(data) => console.log({ data })} />
              </span>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="flex flex-row justify-between items-end p-4">
              <span>
                <h1 className="font-bold text-2xl">Typo de Prueba</h1>
                <p className="text-gray-500">
                  Seleccione el tipo de prueba que desea crear.
                </p>
              </span>
              <TestTypeForm onSubmitType={(data) => console.log({ data })} />
            </CardHeader>
          </Card>
          <section className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <Card className="">
                <CardHeader>
                  <span>
                    <h1 className="font-bold text-2xl">Cuestionario</h1>
                    <p className="text-gray-500">
                      En el siguiente formulario podrás agregar tantas preguntas
                      como considere necesarias para la prueba de Card sorting.
                    </p>
                  </span>
                </CardHeader>
                <CardBody>
                  <TestQuestionaryForm
                    onSubmitQuestionary={() => {}}
                    inputLabel="Pregunta"
                  />
                </CardBody>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <span>
                    <h1 className="font-bold text-2xl">Cartas</h1>
                    <p className="text-gray-500">
                      En el siguiente formulario podrás agregar tantas cartas
                      como considere necesarias para la prueba de Card sorting.
                    </p>
                  </span>
                </CardHeader>
                <CardBody>
                  <TestQuestionaryForm
                    onSubmitQuestionary={() => {}}
                    inputLabel="Carta"
                  />
                </CardBody>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <span>
                    <h1 className="font-bold text-2xl">Categorías</h1>
                    <p className="text-gray-500">
                      En el siguiente formulario podrás agregar tantas
                      categorías como considere necesarias para la prueba de
                      Card sorting.
                    </p>
                  </span>
                </CardHeader>
                <CardBody>
                  <TestQuestionaryForm
                    onSubmitQuestionary={() => {}}
                    inputLabel="Categoría"
                  />
                </CardBody>
              </Card>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
