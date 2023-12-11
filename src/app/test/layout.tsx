import { Breadcrumb } from "@/components/component/breadcrumb";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="flex w-full justify-center">
        <nav className="bg-gray-800 text-white w-full px-4 py-6 flex flex-col justify-between md:static">
          <Link
            className="flex items-center gap-2 text-xl font-semibold "
            href="/"
          >
            <span>KatSort</span>
          </Link>
        </nav>
      </header>
      <main className="flex-grow h-full bg-gray-100 p-6 ">
        <div className="flex w-full  justify-center">
          <Breadcrumb />
        </div>
        {children}
      </main>
    </div>
  );
}
