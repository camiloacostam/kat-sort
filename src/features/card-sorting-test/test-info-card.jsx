import propTypes from "prop-types";
//date fns
import { format } from "date-fns";
import { es } from "date-fns/locale";
//next UI Components
import { Card, CardBody, CardHeader, Button } from "@nextui-org/react";
//notifications
import { toast } from "sonner";

export default function TestInfoCard({ test }) {
  const copyTestLink = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(`${currentUrl}prueba/${test?.accessLink}`)
      .then(() => {
        toast.success("Link de la prueba copiado correctamente");
      })
      .catch(() => {
        toast.error("No se pudo copiar el link de la prueba");
      });
  };

  return (
    <Card className="p-4 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <CardHeader className="">
        <div className="grid gap-1  ">
          <h1 className="text-3xl font-bold">{test?.name || ""}</h1>
          <p className="capitalize text-gray-500 text-md">
            Fecha de creación:{" "}
            {format(test?.createdAt, "MMMM, dd 'de' yyyy", { locale: es })}
          </p>
        </div>
      </CardHeader>
      <CardBody className="gap-2 flex flex-row">
        <Button color="primary" onClick={copyTestLink}>
          Copiar Link de la prueba
        </Button>
        <Button color="primary" size="md">
          Ver detalle de la prueba
        </Button>
      </CardBody>
    </Card>
  );
}

TestInfoCard.propTypes = {
  test: propTypes.object.isRequired,
};
