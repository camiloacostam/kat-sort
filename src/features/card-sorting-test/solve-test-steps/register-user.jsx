import propTypes from "prop-types";
//Next Ui Components
import {
  Card,
  CardBody,
  Input,
  CardFooter,
  Divider,
  Button,
} from "@nextui-org/react";
// Form validation
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup.object().shape({
  email: yup.string().email().required("Este campo es requerido"),
});

export default function RegisterUserStep({ onContinue, onStartTest }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data) => {};

  return (
    <span className="flex flex-col w-full justify-center align-top items-center gap-7 p-10">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Registro de usuario:
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-lg mx-auto ">
          Antes de comenzar es importantes que nos permitas conocerte un poco,
          por eso necesitamos que te registres unicamente con tu correo para
          poder darle inicio a la prueba:{" "}
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[30%] flex flex-col gap-3 "
      >
        <Card>
          <CardBody>
            <Input
              {...register("email")}
              label="Correo Electrónico"
              type="text"
              size="lg"
              width="100%"
              isInvalid={!!errors?.email}
              errorMessage={errors?.email?.message}
              color={errors?.email ? "danger" : "default"}
            />
          </CardBody>
        </Card>
        <div className="flex flex-row-reverse items-start justify-start">
          <Button color="primary" type="submit" size="lg">
            Registrar y Continuar
          </Button>
        </div>
      </form>
    </span>
  );
}

RegisterUserStep.propTypes = {
  onContinue: propTypes.func.isRequired,
};
