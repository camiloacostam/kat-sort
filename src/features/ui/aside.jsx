import { Link } from 'react-router-dom'

export default function Aside() {
  return (
    <aside className="bg-gray-800 text-white w-full md:w-64 min-h-screen px-4 py-6 flex flex-col justify-between md:static">
      <div>
        <Link
          className="flex items-center gap-2 text-xl font-semibold mb-6"
          to="/"
        >
          {/* <AppleIcon className="w-8 h-8" /> */}
          <span className="text-3xl font-bold">Kat Sort</span>
        </Link>
        <div className="space-y-4">
          <Link
            className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-700"
            to="/"
          >
            {/* <LayoutDashboardIcon className="w-6 h-6" /> */}
            <span>Mis Pruebas</span>
          </Link>
          <Link
            className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-700"
            to="/Crear-prueba"
          >
            {/* <CreditCardIcon className="w-6 h-6" /> */}
            <span>Crear Prueba</span>
          </Link>
          {/* <Link
            className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-700"
            to="#"
          >
            <SettingsIcon className="w-6 h-6" />
            <span>Settings</span>
          </Link> */}
        </div>
      </div>
      <Link
        className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-700 mb-6"
        to="#"
      >
        {/* <LogOutIcon className="w-6 h-6" /> */}
        <span>Logout</span>
      </Link>
    </aside>
  )
}
