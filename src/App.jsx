import './App.css'
import { Routes, Route } from 'react-router-dom'
//Pages
import {
  ErrorNotFoundPage,
  Login,
  SignUp,
  DashboardPage,
  CreateTestPage,
  TestPage,
  TestDetailPage
} from './pages'
// Features
import { ProtectedRoute } from './features/routes'
// context
import { ColumnProvider } from './features/context'

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="*" element={<ErrorNotFoundPage />} />
          <Route
            path="/prueba/:accessLink"
            element={
              <ColumnProvider>
                <TestPage />
              </ColumnProvider>
            }
          />
          {/* Public Routes*/}
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<SignUp />} />
          {/* Protected Routes*/}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/crear-prueba" element={<CreateTestPage />} />
            <Route
              path="/prueba/detalle/:testId"
              element={<TestDetailPage />}
            />
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App
