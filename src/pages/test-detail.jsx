import { useEffect } from 'react'
//React Router
import { useParams } from 'react-router-dom'
//Next Ui
import {
  Tabs,
  Tab,
  Spinner,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from '@nextui-org/react'
//custom hooks
import { useTest } from '../features/card-sorting-test'
//Containers
import {
  TestOverview,
  ParticipantsTable,
  QuestionaryTable,
  CommentsTable,
  Dendrogram,
  CardsAnalysis,
  CategoriesAnalysis,
  SimilarityMatrix,
  DownloadExcelButton
} from '../features/card-sorting-test/test-detail'
import { toast } from 'sonner'

export default function TestDetailPage() {
  const { testId } = useParams()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const {
    getTestDetail,
    testDetail,
    loading,
    calculateDendrogram,
    dendrogram,
    getTestResultsAnalysis,
    resultsAnalysis
  } = useTest()

  useEffect(() => {
    getTestDetail(testId).then(() => {
      calculateDendrogram(testId)
      getTestResultsAnalysis(testId)
    })
  }, [testId])

  const copyTestLink = () => {
    const currentUrl = window.location.origin
    navigator.clipboard
      .writeText(`${currentUrl}/prueba/${testDetail?.accessLink}`)
      .then(() => {
        toast.success('Link de la prueba copiado correctamente')
      })
      .catch(() => {
        toast.error('No se pudo copiar el link de la prueba')
      })
  }

  return (
    <main className="p-10">
      {loading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className="py-3">
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    <p className="text-red-600">
                      Esta Seguro Desea Eliminar la prueba {testDetail?.name}?
                    </p>
                  </ModalHeader>
                  <ModalBody>
                    <p>
                      Esta a punto de eliminar la prueba {testDetail?.name}, una
                      vez se elimine no podrá volver a acceder a la prueba ni a
                      los resultados asociados a esta.{' '}
                    </p>
                    <p>Desea continuar ?</p>
                  </ModalBody>
                  <ModalFooter>
                    <Button variant="light" onPress={onClose}>
                      Volver
                    </Button>
                    <Button color="danger" onPress={() => {}}>
                      Eliminar
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
          <header className="mb-4 flex flex-row gap-6 justify-between ">
            <span>
              <p className="text-gray-500 text-sm font-semibold">
                Detalles de la prueba:
              </p>
              <h1 className="text-3xl font-bold">{testDetail?.name}</h1>
            </span>
            <span className="flex gap-3">
              <Button color="primary" onClick={copyTestLink}>
                Copiar Link de la prueba
              </Button>
              <Button color="danger" onPress={onOpen}>
                Eliminar Prueba
              </Button>
            </span>
          </header>
          <section className="my-3">
            <DownloadExcelButton data={{ testDetail, resultsAnalysis }} />
          </section>
          <section>
            <Tabs aria-label="Options" size="lg" color="primary">
              <Tab title="Vista General" key="overview">
                <TestOverview test={testDetail} />
              </Tab>
              <Tab title="Participantes" key="participants">
                <ParticipantsTable
                  participants={testDetail?.participants || []}
                />
              </Tab>
              <Tab title="Análisis de resultados" key="analysis">
                <Tabs aria-label="Análisis de resultados">
                  <Tab title="Cartas">
                    <CardsAnalysis
                      cardsAnalysis={resultsAnalysis?.cardsAnalysis || []}
                    />
                  </Tab>
                  <Tab title="Categorías">
                    <CategoriesAnalysis
                      categoriesAnalysis={
                        resultsAnalysis?.categoriesAnalysis || []
                      }
                    />
                  </Tab>
                  <Tab title="Dendrograma">
                    <Dendrogram dendrogramData={dendrogram?.dendrogram || {}} />
                  </Tab>
                  <Tab title="Matriz de Similitud">
                    <SimilarityMatrix
                      similarityMatrix={resultsAnalysis?.similarityMatrix || []}
                    />
                  </Tab>
                  <Tab title="Comentarios">
                    <CommentsTable />
                  </Tab>
                </Tabs>
              </Tab>
              <Tab title="Cuestionario" key="questionary">
                <QuestionaryTable questionary={testDetail?.questions || []} />
              </Tab>
            </Tabs>
          </section>
        </>
      )}
    </main>
  )
}
