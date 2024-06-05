import { useEffect } from 'react'
import propTypes from 'prop-types'
//Next Ui Components
import { Button, Input, Spacer, input } from '@nextui-org/react'
//Icons
import { RemoveCircleOutline } from '../ui/icons'
//Utilities
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

const questionSchema = yup.object().shape({
  question: yup.string().required('Este campo es requerido')
})

export default function DynamicQuestionaryForm({
  questions,
  setQuestions,
  addQuestion,
  removeQuestion,
  questionListHeaderLabel,
  inputLabel
}) {
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(questionSchema),
    defaultValues: { questions }
  })

  // Función para manejar el envío del formulario
  const onSubmit = (data) => {
    addQuestion(data.question)
    reset({ question: '' })
  }

  // Función para manejar la eliminación de una pregunta
  const handleRemoveQuestion = (index) => {
    removeQuestion(index) // Actualiza el estado del hook
  }

  return (
    <>
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
      <Spacer y={2} />
      <span>
        {questions?.length > 0 && (
          <>
            <h2 className="font-bold text-2xl mb-2">
              {questionListHeaderLabel}
            </h2>
            <ul>
              {questions.map((question, index) => (
                <li
                  className="flex items-center justify-between gap-2"
                  key={index}
                >
                  {question}
                  <RemoveCircleOutline
                    className="cursor-pointer text-red-500 text-4xl"
                    onClick={() => handleRemoveQuestion(index)}
                  />
                </li>
              ))}
            </ul>
          </>
        )}
      </span>
    </>
  )
}

DynamicQuestionaryForm.propTypes = {
  questions: propTypes.array.isRequired,
  addQuestion: propTypes.func.isRequired,
  setQuestions: propTypes.func.isRequired,
  removeQuestion: propTypes.func.isRequired,
  updateQuestion: propTypes.func.isRequired,
  questionListHeaderLabel: propTypes.string.isRequired,
  inputLabel: propTypes.string.isRequired
}
