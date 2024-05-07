import { Link } from "react-router-dom";
import { Button } from "../features/ui";

export default function ErrorNotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center   px-4 sm:px-6 lg:px-8">
      <div className="space-y-4 text-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 ">
          404
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 ">
          Lo sentimos, la página que buscas no existe.
        </p>
        <Button
          label={
            <Link className="text-white" to="/">
              Volver al inicio
            </Link>
          }
        />
      </div>
    </div>
  );
}
