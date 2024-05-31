//Next Ui Components
import { Button, Input } from '@nextui-org/react'
//Icons
import { RemoveCircleOutline } from '../ui/icons'
//Utilities
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

const questionSchema = yup.object().shape({
  question: yup
    .array()
    .of(
      yup.string().required('Debe diligenciar la pregunta antes de continuar')
    )
})

export default function DynamicQuestionaryForm({
  questions = ['pregunta 1'],
  onAddQuestion,
  onRemoveQuestion
}) {
  const {} = useForm({
    resolver: yupResolver(questionSchema),
    defaultValues: { questions: [{ question: '' }] }
  })

  const handleAddQuestion = (event) => {
    event.preventDefault()
    onAddQuestion()
  }

  const handleRemoveQuestion = (questionId) => {
    onRemoveQuestion(questionId)
  }

  return (
    <form onSubmit={handleAddQuestion}>
      <div className="flex justify-end mb-4  space-y-1.5">
        <Button color="primary" type="submit">
          Agregar Pregunta
        </Button>
      </div>
      <div className=" flex flex-col gap-3">
        {questions &&
          questions?.map((question, index) => (
            <div key={index} className="flex justify-center items-center gap-4">
              <Input
                id="question"
                value={question}
                label={`Pregunta ${index + 1}`}
                type="text"
              />
              <RemoveCircleOutline
                className="cursor-pointer text-blue-600 text-4xl"
                onClick={() => handleRemoveQuestion(index)}
              />
            </div>
          ))}
      </div>
    </form>
  )
}
