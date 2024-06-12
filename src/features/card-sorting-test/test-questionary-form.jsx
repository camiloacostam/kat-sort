import propTypes from "prop-types";
//Next Ui Components
import { Button, Input, Spacer } from "@nextui-org/react";
//Utilities
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

const questionSchema = yup.object().shape({
  question: yup.string().required("Este campo es requerido"),
});

export default function TestQuestionaryForm({
  onSubmitQuestionary,
  inputLabel,
}) {
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(questionSchema),
    defaultValues: { question: "" },
  });

  const onSubmit = (data) => {
    onSubmitQuestionary(data.question);
    reset({ question: "" });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="question"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <div className="flex flex-col  gap-1">
            <span className="flex items-center gap-1">
              <Input
                {...field}
                label={inputLabel}
                type="text"
                isInvalid={!!error}
              />

              <Spacer y={1.5} />
              <Button color="primary" type="submit" size="lg">
                Agregar
              </Button>
            </span>
            {error && <p className="text-red-500 text-sm">{error.message}</p>}
          </div>
        )}
      />
    </form>
  );
}

TestQuestionaryForm.propTypes = {
  onSubmitQuestionary: propTypes.func.isRequired,
  inputLabel: propTypes.string.isRequired,
};
