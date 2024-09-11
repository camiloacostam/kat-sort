import propTypes from 'prop-types'

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell
} from '@nextui-org/react'

export default function CommentsTable() {
  return (
    <Table aria-label="Tabla de comentarios">
      <TableHeader>
        <TableColumn>Categoría</TableColumn>
      </TableHeader>
      <TableBody
        emptyContent={'No se han encontrados comentarios registrados aun.'}
      ></TableBody>
    </Table>
  )
}
