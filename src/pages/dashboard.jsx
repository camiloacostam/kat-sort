import { Aside } from '../features/ui/'

export default function DashboardPage() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      <Aside />
      <main className="flex-grow bg-gray-100 p-6">
        <h1 className="text-2xl font-semibold mb-4">Mis Test</h1>
      </main>
    </div>
  )
}
