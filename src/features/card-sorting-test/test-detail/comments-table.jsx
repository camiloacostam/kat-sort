import propTypes from 'prop-types'

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Card,
  CardBody
} from '@nextui-org/react'

export default function CommentsTable({ comments }) {
  return (
    <Table aria-label="Tabla de comentarios">
      <TableHeader>
        <TableColumn>Categoría</TableColumn>
      </TableHeader>
      <TableBody
        emptyContent={'No se han encontrados comentarios registrados aun.'}
      >
        {comments &&
          comments?.map((comment, index) => (
            <TableRow key={index}>
              <TableCell>
                <p>{comment?.category}</p>
                <Card>
                  <CardBody>
                    {comment?.comments.length > 0 ? (
                      comment?.comments.map((comment, index) => (
                        <p key={index}>{comment}</p>
                      ))
                    ) : (
                      <p className="text-gray-500">
                        No se registran comentarios para esta categoría
                      </p>
                    )}
                  </CardBody>
                </Card>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  )
}
