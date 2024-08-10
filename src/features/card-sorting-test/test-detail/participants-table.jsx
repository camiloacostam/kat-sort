import propTypes from 'prop-types'

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Badge
} from '@nextui-org/react'

export default function ParticipantsTable({ participants }) {
  return (
    <Table aria-label="Tabla de participantes en la prueba">
      <TableHeader>
        <TableColumn>Correo Electrónico</TableColumn>
        <TableColumn>Estado de la Prueba</TableColumn>
        <TableColumn>Tiempo de realización</TableColumn>
        <TableColumn>% de sorteo de cartas</TableColumn>
        <TableColumn>Categorías creadas</TableColumn>
      </TableHeader>
      <TableBody emptyContent={'No se han registrado participantes aun.'}>
        {participants.map((participant, index) => (
          <TableRow key={index}>
            <TableCell>{participant?.email || ''}</TableCell>
            <TableCell>
              <Badge
                content={
                  participant?.status === 'completed'
                    ? 'Completado'
                    : 'No completado'
                }
                color={
                  participant?.status === 'completed' ? 'primary' : 'danger'
                }
              />
            </TableCell>
            <TableCell>{`${participant?.timeTaken || 0} min`} </TableCell>
            <TableCell>{participant?.movedCardsPercentage || 0}%</TableCell>
            <TableCell>{participant?.numberOfCreatedCategories || 0}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

ParticipantsTable.propTypes = {
  participants: propTypes.array.isRequired
}
