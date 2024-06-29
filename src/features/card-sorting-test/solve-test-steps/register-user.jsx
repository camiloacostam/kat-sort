import propTypes from "prop-types";
//Next Ui Components
import { Card, CardBody, Input, Button, Spinner } from "@nextui-org/react";
// Form validation
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const schema = yup.object().shape({
  email: yup.string().email().required("Este campo es requerido"),
});

export default function RegisterUserStep({
  onContinue,
  onStartTest,
  accessLink,
  loading,
}) {
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

  const onSubmit = (data) => {
    try {
      onStartTest(accessLink, data.email).then(() => {
        onContinue();
      });
    } catch (err) {
      toast.error("Ha ocurrido un error al intentar iniciar la prueba");
    }
  };

  return (
    <span className="flex flex-col w-full justify-center align-top items-center gap-7 p-10">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Registro de usuario:
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl mx-auto ">
          Antes de comenzar es importantes que nos permitas conocerte un poco,
          por eso necesitamos que te registres unicamente con tu correo para
          poder darle inicio a la prueba, Ten en cuenta ademas que una vez
          iniciada la prueba no puedes refrescar la pagina o cerrar el navegador
          dado que se dará por terminado el test y no podrás retomarlo, debiendo
          iniciar uno nuevo en caso de que desees completarlo:
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
        {(loading && <Spinner />) || (
          <div className="flex flex-row-reverse items-start justify-start">
            <Button color="primary" type="submit" size="lg">
              Registrar y Continuar
            </Button>
          </div>
        )}
      </form>
    </span>
  );
}

RegisterUserStep.propTypes = {
  onContinue: propTypes.func.isRequired,
  onStartTest: propTypes.func.isRequired,
  accessLink: propTypes.string.isRequired,
  loading: propTypes.bool.isRequired,
};
