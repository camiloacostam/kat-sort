import { useState } from 'react'
import propTypes from 'prop-types'
//Router
import { useNavigate } from 'react-router-dom'
//date fns
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
//next UI Components
import { Card, CardBody, CardHeader, Button } from '@nextui-org/react'
//notifications
import { toast } from 'sonner'
import EditTestNameForm from './test-detail/edit-test-name-form'

export default function TestInfoCard({ test, onEditTest }) {
  const [isEditing, setIsEditing] = useState(false)
  const navigate = useNavigate()

  const copyTestLink = () => {
    const currentUrl = window.location.href
    navigator.clipboard
      .writeText(`${currentUrl}prueba/${test?.accessLink}`)
      .then(() => {
        toast.success('Link de la prueba copiado correctamente')
      })
      .catch(() => {
        toast.error('No se pudo copiar el link de la prueba')
      })
  }

  return (
    <Card className="p-4 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <CardHeader className="">
        <div className="grid gap-1  ">
          <>
            {isEditing ? (
              <EditTestNameForm
                onCancelEdit={() => setIsEditing(false)}
                currentName={test?.name}
                onSave={(newName) => onEditTest(test?._id, newName?.name)}
              />
            ) : (
              <span className="flex  flex-col gap-5 md:flex-row">
                <h1 className="text-3xl font-bold">{test?.name || ''}</h1>
                <Button color="primary" onClick={() => setIsEditing(true)}>
                  Editar
                </Button>
              </span>
            )}
          </>
          <p className="capitalize text-gray-500 text-md">
            Fecha de creación:{' '}
            {format(test?.createdAt, "MMMM, dd 'del' yyyy", { locale: es })}
          </p>
        </div>
      </CardHeader>
      <CardBody className="gap-2 flex flex-row">
        <Button color="primary" onClick={copyTestLink}>
          Copiar Link de la prueba
        </Button>
        <Button
          color="primary"
          size="md"
          onClick={() => navigate(`/prueba/detalle/${test?._id}`)}
        >
          Ver detalle de la prueba
        </Button>
      </CardBody>
    </Card>
  )
}

TestInfoCard.propTypes = {
  test: propTypes.object.isRequired,
  onEditTest: propTypes.func.isRequired
}
