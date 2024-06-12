import propTypes from "prop-types";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input, Button } from "@nextui-org/react";

const schema = yup.object().shape({
  name: yup.string().required("Este campo es requerido"),
});

const TestNameForm = ({ onSubmitName }) => {
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (data) => {
    onSubmitName(data.name);
    reset(); // Limpiar el campo de entrada
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-3 items-start">
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <div className="flex flex-col gap-1">
            <Input
              {...field}
              clearable
              bordered
              fullWidth
              placeholder="Nombre de la prueba"
              errorMessage={error?.message}
              isInvalid={!!error}
            />
          </div>
        )}
      />
      <Button color="primary" type="submit">
        Guardar Nombre
      </Button>
    </form>
  );
};

export default TestNameForm;

TestNameForm.propTypes = {
  onSubmitName: propTypes.func.isRequired,
};
