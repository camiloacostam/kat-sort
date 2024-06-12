import propTypes from "prop-types";
import { useForm, Controller, get } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Input,
  Button,
  Card,
  CardHeader,
  RadioGroup,
  Radio,
  CardBody,
} from "@nextui-org/react";

const schema = yup.object().shape({
  testName: yup.string().required("Este campo es requerido"),
  testType: yup.string().required("Selecciona una opción"),
  testQuestions: yup.array().min(1, "Agrega al menos una pregunta"),
  testCards: yup.array().min(1, "Agrega al menos una carta"),
  testColumns: yup.array().min(1, "Agrega al menos una categoría"),
});

export default function CreateTestForm({ onSubmitForm }) {
  const {
    register,
    handleSubmit,
    resetField,
    setValue,
    getValues,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      testName: "",
      testType: "",
      testQuestions: [],
      testCards: [],
      testColumns: [],
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    // onSubmitForm(data);
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader className="flex flex-row justify-between items-start">
          <span>
            <h1 className="font-bold text-2xl">Nombre de la Prueba</h1>
          </span>
          <span>
            <Input
              {...register("testName")}
              fullWidth
              errorMessage={errors?.testName?.message}
              isInvalid={!!errors.testName}
              className="w-96"
              label="Nombre de la Prueba"
            />
          </span>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="flex flex-row justify-between ">
          <span>
            <h1 className="font-bold text-2xl">Typo de Prueba</h1>
            <p className="text-gray-500">
              Seleccione el tipo de prueba que desea crear.
            </p>
          </span>
          <span className="mx-5">
            <RadioGroup
              {...register("testType")}
              isInvalid={!!errors?.testType}
              orientation="horizontal"
            >
              <Radio value="mixto">Mixto</Radio>
              <Radio value="abierto">Abierto</Radio>
              <Radio value="cerrado">Cerrado</Radio>
            </RadioGroup>
            {errors && (
              <p className="text-red-500 text-sm">
                {errors?.testType?.message}
              </p>
            )}
          </span>
        </CardHeader>
      </Card>
      <section className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1">
          <Card>
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
              <div className="flex flex-col  gap-1">
                <span className="flex items-center gap-1">
                  <Input
                    {...register("testQuestions")}
                    label="Pregunta"
                    type="text"
                    isInvalid={!!errors?.testQuestions}
                    errorMessage={errors?.testQuestions?.message}
                    color={errors?.testQuestions ? "danger" : "default"}
                  />
                  <Button color="primary" type="submit" size="lg">
                    Agregar
                  </Button>
                </span>
              </div>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <span>
                <h1 className="font-bold text-2xl">Cartas</h1>
                <p className="text-gray-500">
                  En el siguiente formulario podrás agregar tantas cartas como
                  considere necesarias para la prueba de Card sorting.
                </p>
              </span>
            </CardHeader>
            <CardBody>
              <div className="flex flex-col  gap-1">
                <span className="flex items-center gap-1">
                  <Input
                    {...register("testCards")}
                    label="Pregunta"
                    type="text"
                    isInvalid={!!errors?.testCards}
                    errorMessage={errors?.testCards?.message}
                    color={errors?.testCards ? "danger" : "default"}
                  />
                  <Button color="primary" type="submit" size="lg">
                    Agregar
                  </Button>
                </span>
              </div>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <span>
                <h1 className="font-bold text-2xl">Categorías</h1>
                <p className="text-gray-500">
                  En el siguiente formulario podrás agregar tantas categorías
                  como considere necesarias para la prueba de Card sorting.
                </p>
              </span>
            </CardHeader>
            <CardBody>
              <div className="flex flex-col  gap-1">
                <span className="flex items-center gap-1">
                  <Input
                    {...register("testColumns")}
                    label="Categoría"
                    type="text"
                    isInvalid={!!errors?.testColumns}
                    errorMessage={errors?.testColumns?.message}
                    color={errors?.testColumns ? "danger" : "default"}
                  />
                  <Button color="primary" size="lg" type="submit">
                    Agregar
                  </Button>
                </span>
              </div>
              {/* <div>
                <li>
                  {register("testColumns") &&
                    register("testColumns").map((column, index) => (
                      <ul key={index}>{column}</ul>
                    ))}
                </li>
              </div> */}
            </CardBody>
          </Card>
        </div>
      </section>
    </form>
  );
}

CreateTestForm.propTypes = {
  onSubmitForm: propTypes.func.isRequired,
};
