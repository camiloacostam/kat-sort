import propTypes from "prop-types";
//Form validation
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
//next UI Components
import { Card, CardBody, Input, Button, Spinner } from "@nextui-org/react";

export default function Questionary({
  questions = [],
  onContinue,
  onSaveAnswers,
}) {
  const shape = {};
  questions.forEach((_, index) => {
    shape[`question_${index}`] = yup
      .string()
      .required("Este campo es obligatorio");
  });

  const schema = yup.object().shape(shape);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <span className="flex flex-col gap-5 items-center">
      <div className=" w-[30%] flex flex-col gap-5 items-start text-start">
        <h1 className="text-start text-3xl font-bold">Cuestionario: </h1>
      </div>
      <form
        className="w-[30%] flex flex-col gap-3 "
        onSubmit={handleSubmit(onSubmit)}
      >
        {questions.map((question, index) => (
          <Card key={index} className="">
            <CardBody>
              <p className="text-sm text-gray-600 mb-0">{question}:</p>
              <Input
                {...register(`question_${index}`)}
                type="text"
                size="lg"
                width="100%"
                isInvalid={!!errors?.[`question_${index}`]}
                errorMessage={errors?.[`question_${index}`]?.message}
                color={errors?.[`question_${index}`] ? "danger" : "default"}
              />
            </CardBody>
          </Card>
        ))}
        <div className="flex flex-row-reverse items-start justify-start">
          <Button color="primary" type="submit" size="lg">
            Guardar y Continuar
          </Button>
        </div>
      </form>
    </span>
  );
}

Questionary.propTypes = {
  questions: propTypes.array.isRequired,
  onContinue: propTypes.func.isRequired,
  onSaveAnswers: propTypes.func.isRequired,
};
