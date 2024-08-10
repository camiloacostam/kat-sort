import propTypes from 'prop-types'

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell
} from '@nextui-org/react'

export default function QuestionaryTable({ questionary }) {
  return (
    <Table aria-label="Tabla de preguntas del cuestionario en la prueba">
      <TableHeader>
        <TableColumn>Preguntas</TableColumn>
      </TableHeader>
      <TableBody emptyContent={'No se han registrado cuestionarios aun.'}>
        {questionary.map((question, index) => (
          <TableRow key={index}>
            <TableCell>
              <p className="mb-2">{question?.question || ''}</p>
              <Table aria-label="Tabla de respuestas a las preguntas del cuestionario en la prueba">
                <TableHeader>
                  <TableColumn>Respuestas</TableColumn>
                </TableHeader>
                <TableBody>
                  {question?.answers.map((answer, index) => (
                    <TableRow key={index}>
                      <TableCell>{answer}</TableCell>
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

QuestionaryTable.propTypes = {
  questionary: propTypes.array.isRequired
}
