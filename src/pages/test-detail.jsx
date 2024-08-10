import { useEffect } from 'react'
//React Router
import { useParams } from 'react-router-dom'
//Next Ui
import { Tabs, Tab, Card, CardBody, Spinner } from '@nextui-org/react'
//custom hooks
import { useTest } from '../features/card-sorting-test'
//Containers
import {
  TestOverview,
  ParticipantsTable,
  QuestionaryTable,
  Dendrogram,
  CardsAnalysis,
  CategoriesAnalysis,
  SimilarityMatrix
} from '../features/card-sorting-test/test-detail'

export default function TestDetailPage() {
  const { testId } = useParams()
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
      // calculateDendrogram(res?.sorts)
      getTestResultsAnalysis(testId)
    })
  }, [testId])

  return (
    <main className="p-10">
      {loading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <>
          <header className="mb-4">
            <p className="text-gray-500 text-sm font-semibold">
              Detalles de la prueba:
            </p>
            <h1 className="text-3xl font-bold">{testDetail?.name}</h1>
          </header>
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
                    {/* <Dendrogram data={dendrogram} /> */}
                  </Tab>
                  <Tab title="Matriz de Similitud">
                    <SimilarityMatrix
                      similarityMatrix={resultsAnalysis?.similarityMatrix || []}
                    />
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
