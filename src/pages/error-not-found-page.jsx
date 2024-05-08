// Router
import { useNavigate } from "react-router-dom";
//Next Ui Components
import { Button } from "@nextui-org/react";

export default function ErrorNotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center   px-4 sm:px-6 lg:px-8">
      <div className="space-y-4 text-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 ">
          404
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 ">
          Lo sentimos, la página que buscas no existe.
        </p>
        <Button onClick={() => navigate("/")} color="primary">
          Volver al inicio
        </Button>
      </div>
    </div>
  );
}
