import propTypes from 'prop-types'

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell
} from '@nextui-org/react'

export default function CategoriesAnalysis({ categoriesAnalysis }) {
  return (
    <Table aria-label="Tabla de participantes en la prueba">
      <TableHeader>
        <TableColumn>Categoría</TableColumn>
        <TableColumn>Contenido</TableColumn>
        <TableColumn>Cartas</TableColumn>
      </TableHeader>
      <TableBody
        emptyContent={'No se han encontrado registro de resultados aun.'}
      >
        {categoriesAnalysis.map((categoryAnalysis, index) => (
          <TableRow key={index}>
            <TableCell>{categoryAnalysis?.category || ''}</TableCell>
            <TableCell>
              {`${categoryAnalysis?.contains} Cartas diferentes` || ''}
            </TableCell>
            <TableCell>
              <Table aria-label="Tabla de analisis de cartas en categorias">
                <TableHeader>
                  <TableColumn>Carta</TableColumn>
                  <TableColumn>Frecuencia</TableColumn>
                </TableHeader>
                <TableBody>
                  {categoryAnalysis?.cards.map((cardData, index) => (
                    <TableRow key={index}>
                      <TableCell>{cardData?.card || ''}</TableCell>
                      <TableCell>
                        {`${cardData?.frequency} veces` || ''}
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

CategoriesAnalysis.propTypes = {
  categoriesAnalysis: propTypes.array.isRequired
}
