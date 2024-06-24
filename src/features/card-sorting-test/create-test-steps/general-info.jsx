import propTypes from "prop-types";
// Next UI Components
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
  Input,
  RadioGroup,
  Radio,
  Divider,
} from "@nextui-org/react";
// Notifications
import { toast } from "sonner";
// Form validation
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup.object().shape({
  testName: yup.string().required("Este campo es requerido"),
  testType: yup.string().required("Selecciona una opción"),
});

export default function GeneralTestInfo({ testInfo, onContinue, setTestInfo }) {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      testName: testInfo?.name || "",
      testType: testInfo?.type || "",
    },
  });

  const onSubmit = (data) => {
    setTestInfo((prev) => ({
      ...prev,
      name: data.testName,
      type: data.testType,
    }));
    toast.success("Información guardada correctamente");
  };

  return (
    <>
      <Card className="p-2 w-[40%]">
        <CardHeader className="flex flex-row justify-between items-start">
          <section>
            <h1 className="font-bold text-2xl">
              {" "}
              Información General de la prueba{" "}
            </h1>
            <p></p>
          </section>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
          <CardBody className="flex flex-col gap-4">
            <Input
              {...register("testName")}
              fullWidth
              errorMessage={errors?.testName?.message}
              isInvalid={!!errors.testName}
              label="Nombre de la Prueba"
              size="lg"
            />
            <RadioGroup
              {...register("testType")}
              isInvalid={!!errors?.testType}
              orientation="horizontal"
              label="Tipo de Prueba"
              errorMessage={errors?.testType?.message}
              defaultValue={testInfo?.type || ""}
            >
              <Radio {...register("testType")} value="abierto">
                Abierto
              </Radio>
              <Radio {...register("testType")} value="cerrado">
                Cerrado
              </Radio>
              <Radio {...register("testType")} value="mixto">
                Mixto
              </Radio>
            </RadioGroup>
          </CardBody>
          <Divider />
          <CardFooter className="flex gap-7 flex-row-reverse">
            <Button
              disabled={!testInfo?.name && !testInfo?.type}
              onClick={onContinue}
              color={!testInfo?.name && !testInfo?.type ? "default" : "primary"}
              size="lg"
            >
              Siguiente paso
            </Button>
            <Button color="primary" size="lg" type="submit">
              Guardar Información
            </Button>
          </CardFooter>
        </form>
      </Card>
    </>
  );
}

GeneralTestInfo.propTypes = {
  testInfo: propTypes.object.isRequired,
  onContinue: propTypes.func.isRequired,
  setTestInfo: propTypes.func.isRequired,
};
