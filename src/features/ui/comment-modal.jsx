import { useEffect } from 'react'
// Next UI imports
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Textarea,
  Button
} from '@nextui-org/react'
// Form validation
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
// Notifications
import { toast } from 'sonner'

const schema = yup.object().shape({
  comment: yup.string().required('Este campo es requerido')
})

export default function CommentModal({
  isOpen,
  onOpenChange,
  onComment,
  comment
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      comment: ''
    }
  })

  const onSubmitComment = (comment) => {
    onComment(comment?.comment || '')
    reset()
    onOpenChange()
    toast.success('Comentario agregado correctamente')
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <form onSubmit={handleSubmit(onSubmitComment)}>
              <ModalHeader>Comentar Categoría:</ModalHeader>
              <ModalBody>
                <Textarea
                  {...register('comment')}
                  label="Comentario"
                  placeholder="Escribe tu comentario"
                  classNames={{
                    input: 'resize-y min-h-[100px]'
                  }}
                  isInvalid={!!errors?.comment}
                  errorMessage={errors?.comment?.message}
                />

                <div>
                  <h4 className="font-bold">Comentario: </h4>
                  <p>
                    {comment ? comment : 'No se ha realizado Comentario aun'}
                  </p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" type="submit">
                  Comentar
                </Button>
                <Button color="error" onClick={onClose}>
                  Cancelar
                </Button>
              </ModalFooter>
            </form>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
