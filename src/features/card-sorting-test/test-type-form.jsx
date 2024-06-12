import { useForm, Controller } from "react-hook-form";
import PropTypes from "prop-types";
// Form validation
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// Next UI Components
import { RadioGroup, Radio, Button } from "@nextui-org/react";

const schema = yup.object().shape({
  type: yup.string().required("Selecciona una opción"),
});

export default function TestTypeForm({ onSubmitType }) {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      testType: "",
    },
  });

  const onSubmit = (data) => {
    onSubmitType(data.type);
  };

  return (
    <form className="flex gap-3 items-center" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="testType"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <RadioGroup {...field} orientation="horizontal">
              <Radio value="abierto">Abierto</Radio>
              <Radio value="cerrado">Cerrado</Radio>
              <Radio value="mixto">Mixto</Radio>
            </RadioGroup>
            {error && <p className="text-red-500 text-sm">{error.message}</p>}
          </>
        )}
      />
      <Button color="primary" type="submit">
        Guardar Tipo
      </Button>
    </form>
  );
}

TestTypeForm.propTypes = {
  onSubmitType: PropTypes.func.isRequired,
};
