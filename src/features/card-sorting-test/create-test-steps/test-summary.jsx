import propTypes from "prop-types";
// Next UI Components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Spinner,
} from "@nextui-org/react";
// React Router
import { useNavigate } from "react-router-dom";

export default function TestSummary({
  onBack,
  testSummary,
  onCreateTest,
  loading,
}) {
  const navigate = useNavigate();

  const handleCreateTest = () => {
    onCreateTest().then(() => {
      navigate("/");
    });
  };

  return (
    <Card className="py-1 min-w-[30%]">
      <CardHeader className="flex flex-col  items-start">
        <p className="text-sm text-gray-600 mb-0">Nombre de la prueba:</p>
        <h2 className="font-bold text-3xl">{testSummary.name}</h2>
      </CardHeader>
      <Divider />
      <CardBody>
        <section id="summaryHeader" className="flex flex-col  items-start mb-3">
          <p className="text-sm text-gray-600 mb-0">Tipo de prueba:</p>
          <p className="capitalize">{testSummary.type}</p>
        </section>

        <section id="testQuestions" className="mb-3">
          <p className=" font-bold text-lg">Preguntas:</p>
          <ul className="capitalize ">
            {testSummary.questions.map((question, index) => (
              <li type="cicle" key={index}>
                {question}
              </li>
            ))}
          </ul>
        </section>
        <section id="test" className="mb-3 flex gap-8">
          <div>
            <p className=" font-bold text-lg">Categorías:</p>
            <ul className="capitalize ">
              {testSummary.categories.map((category, index) => (
                <li type="cicle" key={index}>
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className=" font-bold text-lg">Cartas:</p>
            <ul className="capitalize ">
              {testSummary.cards.map((card, index) => (
                <li type="cicle" key={index}>
                  {card}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </CardBody>
      <Divider />
      <CardFooter className="flex gap-7 flex-row-reverse">
        {loading ? (
          <Spinner color="primary" />
        ) : (
          <>
            <Button
              onClick={handleCreateTest}
              color="primary"
              size="lg"
              loading={loading}
            >
              Crear Test
            </Button>
            <Button
              onClick={onBack}
              color="primary"
              size="lg"
              loading={loading}
            >
              Volver atrás
            </Button>{" "}
          </>
        )}
      </CardFooter>
    </Card>
  );
}

TestSummary.propTypes = {
  onCreateTest: propTypes.func.isRequired,
  onBack: propTypes.func.isRequired,
  testSummary: propTypes.object.isRequired,
  loading: propTypes.bool.isRequired,
};
