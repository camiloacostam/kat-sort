import propTypes from "prop-types";
import { Card, CardBody } from "@nextui-org/react";

export default function TestOverview({ test }) {
  return (
    <>
      <section className="flex flex-col md:flex-row gap-3 mb-10">
        <Card className="min-h-32 min-w-60">
          <CardBody>
            <p className="text-gray-500 text-sm font-semibold">
              Total de pruebas realizadas:
            </p>
            <div className="flex items-center justify-center w-full h-full">
              <h1 className="text-4xl font-bold ">
                {test?.totalOfSolutions || 0}
              </h1>
            </div>
          </CardBody>
        </Card>
        <Card className="min-h-32 min-w-60">
          <CardBody>
            <p className="text-gray-500 text-sm font-semibold">
              # de pruebas completas:
            </p>
            <div className="flex items-center justify-center w-full h-full">
              <h1 className="text-4xl font-bold ">
                {test?.totalOfCompleted || 0}
              </h1>
            </div>
          </CardBody>
        </Card>
        <Card className="min-h-32 min-w-60">
          <CardBody>
            <p className="text-gray-500 text-sm font-semibold">
              % de pruebas completas:
            </p>
            <div className="flex items-center justify-center w-full h-full">
              <h1 className="text-4xl font-bold ">
                {test?.percentageOfCompleted || 0}%
              </h1>
            </div>
          </CardBody>
        </Card>
        <Card className="min-h-32 min-w-60">
          <CardBody>
            <p className="text-gray-500 text-sm font-semibold">
              Tiempo promedio de la prueba:
            </p>
            <div className="flex items-center justify-center w-full h-full">
              <h1 className="text-4xl font-bold ">
                {test?.averageTimeOfCompleted || 0} min
              </h1>
            </div>
          </CardBody>
        </Card>
        <Card className="min-h-32 min-w-60">
          <CardBody>
            <p className="text-gray-500 text-sm font-semibold">
              Numero de categorías creadas:
            </p>
            <div className="flex items-center justify-center w-full h-full">
              <h1 className="text-4xl font-bold ">
                {test?.numberOfCreatedCategories || 0}
              </h1>
            </div>
          </CardBody>
        </Card>
      </section>
      <section className="flex flex-col md:flex-row w-full gap-3 ">
        <span className="min-w-[50%]">
          <Card>
            <CardBody>
              <p className="text-gray-500 text-sm font-semibold">Cartas:</p>
              <ul className="list-disc list-inside px-3">
                {test?.cards?.map((card, index) => (
                  <li type="cicle" key={index}>
                    {card}
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </span>
        <span className="min-w-[50%]">
          <Card>
            <CardBody>
              <p className="text-gray-500 text-sm font-semibold">Categorías:</p>
              <ul className="list-disc list-inside px-3">
                {test?.categories?.map((category, index) => (
                  <li type="cicle" key={index}>
                    {category}
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </span>
      </section>
    </>
  );
}

TestOverview.propTypes = {
  test: propTypes.object.isRequired,
};
