//Next Ui Components
import { Button } from "@nextui-org/react";
//React router
import { useNavigate } from "react-router-dom";

export default function Congratulation() {
  const navigate = useNavigate();
  return (
    <span className="flex flex-col w-full h-[80vh] justify-center align-top items-center gap-2 p-10">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Prueba completada{" "}
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-lg mx-auto mb-8">
          Muchas gracias por completar la prueba, tus respuestas han sido
          guardadas y será de gran ayuda para el evaluador.
        </p>
      </div>
      <Button size="lg" color="primary" onClick={() => navigate("/")}>
        Terminar prueba.
      </Button>
    </span>
  );
}
