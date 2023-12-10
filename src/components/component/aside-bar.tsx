import Link from "next/link";
import { LayoutDashboardIcon } from "./icons/layout-dashboard-icon";
import { CreditCardIcon } from "./icons/credit-card-icon";
import { SettingsIcon } from "./icons/settings-icon";
import { LogOutIcon } from "./icons/log-out-icon";

export function Aside() {
  return (
    <nav className="bg-gray-800 text-white w-full md:w-64 min-h-screen px-4 py-6 flex flex-col justify-between md:static">
      <div>
        <Link
          className="flex items-center gap-2 text-xl font-semibold mb-6"
          href="/dashboard"
        >
          <span>KatSort</span>
        </Link>
        <div className="space-y-4">
          <Link
            className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-700"
            href="#"
          >
            <LayoutDashboardIcon className="w-6 h-6" />
            <span>Dashboard</span>
          </Link>
          <Link
            className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-700"
            href="#"
          >
            <CreditCardIcon className="w-6 h-6" />
            <span>My Cards</span>
          </Link>
          <Link
            className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-700"
            href="#"
          >
            <SettingsIcon className="w-6 h-6" />
            <span>Settings</span>
          </Link>
        </div>
      </div>
      <Link
        className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-700 mb-6"
        href="/"
      >
        <LogOutIcon className="w-6 h-6" />
        <span>Logout</span>
      </Link>
    </nav>
  );
}
