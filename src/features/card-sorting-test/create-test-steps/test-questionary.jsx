import proptypes from "prop-types";
// Next ui Components
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
  Input,
  Divider,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
// Notifications
import { toast } from "sonner";
// Form validation
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { DeleteIcon } from "../../ui/icons/remove";

const schema = yup.object().shape({
  question: yup.string().required("Este campo es requerido"),
});

export default function TestQuestionary({
  onContinue,
  onBack,
  questions,
  setTestInfo,
}) {
  const {
    register,
    handleSubmit,

    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      question: "",
    },
  });

  const onSubmit = (data) => {
    if (questions.length > 0) {
      setTestInfo((prev) => ({
        ...prev,
        questions: [...prev.questions, data.question],
      }));
    } else {
      setTestInfo((prev) => ({
        ...prev,
        questions: [data.question],
      }));
    }
    reset();
    toast.success("Pregunta agregada correctamente");
  };

  const onRemoveQuestion = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setTestInfo((prev) => ({
      ...prev,
      questions: newQuestions,
    }));
    toast.success("Pregunta eliminada correctamente");
  };

  return (
    <div className="flex flex-col justify-center gap-4 w-full md:flex-row ">
      <span className="w-[50%]">
        <Card className="p-2">
          <CardHeader>
            <span>
              <h1 className="font-bold text-2xl">Cuestionario</h1>
              <p className="text-gray-500">
                En el siguiente formulario podrás agregar tantas preguntas como
                considere necesarias para la prueba de Card sorting.
              </p>
            </span>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col  gap-1">
                <span className="flex items-start gap-2">
                  <Input
                    {...register("question")}
                    label="Pregunta"
                    type="text"
                    isInvalid={!!errors?.question}
                    errorMessage={errors?.question?.message}
                    color={errors?.question ? "danger" : "default"}
                  />
                  <Button color="primary" type="submit" size="lg">
                    Agregar
                  </Button>
                </span>
              </div>
            </form>
          </CardBody>
          <Divider />
          <CardFooter className="flex gap-7 flex-row-reverse">
            <Button
              disabled={questions && questions?.length === 0}
              onClick={onContinue}
              color={
                questions && questions?.length === 0 ? "default" : "primary"
              }
              size="lg"
            >
              Siguiente paso
            </Button>
            <Button onClick={onBack} color="primary" size="lg">
              Volver atrás
            </Button>
          </CardFooter>
        </Card>
      </span>
      <Card className="p-2 w-[40%]">
        <CardHeader>
          <h1 className="font-bold text-2xl">Preguntas Creadas</h1>
        </CardHeader>
        <CardBody>
          <Table aria-label="Example empty table">
            <TableHeader>
              <TableColumn>PREGUNTAS</TableColumn>
              <TableColumn>ACCIONES</TableColumn>
            </TableHeader>
            <TableBody emptyContent={"No hay preguntas disponibles."}>
              {questions.length > 0 &&
                questions.map((question, index) => (
                  <TableRow key={index}>
                    <TableCell>{question}</TableCell>
                    <TableCell className="relative flex items-center gap-2">
                      <span className="text-lg text-danger cursor-pointer active:opacity-50">
                        <DeleteIcon onClick={() => onRemoveQuestion(index)} />
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}

TestQuestionary.propTypes = {
  onContinue: proptypes.func.isRequired,
  onBack: proptypes.func.isRequired,
  questions: proptypes.array.isRequired,
  setTestInfo: proptypes.func.isRequired,
};
