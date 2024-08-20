import * as XLSX from 'xlsx'
import { saveAs } from 'file-saver'
import { Button } from '@nextui-org/react'

export default function DownloadExcelButton({ data }) {
  const downloadExcel = () => {
    const generalOverviewWorksheet = XLSX.utils.json_to_sheet([
      {
        cartas: data?.testDetail.cards.toString(),
        categorias: data?.testDetail.categories.toString(),
        nombre: data?.testDetail.name,
        categoriasCreadas: data?.testDetail.numberOfCreatedCategories,
        portcentajeDePruebasCompletadas: data?.testDetail.percentageOfCompleted,
        totalDeSoluciones: data?.testDetail.totalOfSolutions
      }
    ])

    // Crear un libro de trabajo y añadir la hoja de trabajo
    const reportePrueba = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(
      reportePrueba,
      generalOverviewWorksheet,
      'Data'
    )

    // Generar el archivo Excel en formato binario
    const excelBuffer = XLSX.write(reportePrueba, {
      bookType: 'xlsx',
      type: 'array'
    })

    // Crear un Blob y guardarlo con file-saver
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' })
    saveAs(blob, 'resultadosPrueba.xlsx')
  }

  return (
    <Button color="primary" size="lg" onClick={downloadExcel}>
      Descargar Reporte
    </Button>
  )
}
