import propTypes from 'prop-types'

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell
} from '@nextui-org/react'

export default function CardsAnalysis({ cardsAnalysis }) {
  return (
    <Table aria-label="Tabla de participantes en la prueba">
      <TableHeader>
        <TableColumn>Card</TableColumn>
        <TableColumn>Sorteado en</TableColumn>
        <TableColumn>Categorías asignadas</TableColumn>
        <TableColumn>Frecuencia de asignación</TableColumn>
      </TableHeader>
      <TableBody
        emptyContent={'No se han encontrado registro de resultados aun.'}
      >
        {cardsAnalysis.map((cardAnalysis, index) => (
          <TableRow key={index}>
            <TableCell>{cardAnalysis?.card || ''}</TableCell>
            <TableCell>
              {`${cardAnalysis?.sortedInto} Categorías ` || ''}
            </TableCell>
            <TableCell>
              <Table aria-label="Categorías en las que se sorteo la carta">
                <TableHeader>
                  <TableColumn>Categoría</TableColumn>
                </TableHeader>
                <TableBody>
                  {cardAnalysis?.categories.map((category, index) => (
                    <TableRow key={index}>
                      <TableCell>{category?.category || ''}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableCell>
            <TableCell>
              <Table aria-label="frecuencia en la se sorteo la carta en la categoría">
                <TableHeader>
                  <TableColumn>Frecuencia</TableColumn>
                </TableHeader>
                <TableBody>
                  {cardAnalysis?.categories.map((category, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        {`${category?.frequency} veces` || ''}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

CardsAnalysis.propTypes = {
  cardsAnalysis: propTypes.array.isRequired
}
