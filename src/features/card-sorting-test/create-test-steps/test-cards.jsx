import propTypes from "prop-types";
// Next ui Components
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
  Input,
  Divider,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
// Notifications
import { toast } from "sonner";
// Form validation
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { DeleteIcon } from "../../ui/icons/remove";

const schema = yup.object().shape({
  card: yup.string().required("Este campo es requerido"),
});

export default function TestCards({ onContinue, onBack, cards, setTestInfo }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      card: "",
    },
  });

  const onSubmit = (data) => {
    if (cards.length > 0) {
      setTestInfo((prev) => ({
        ...prev,
        cards: [...prev.cards, data.card],
      }));
    } else {
      setTestInfo((prev) => ({
        ...prev,
        cards: [data.card],
      }));
    }
    reset();
    toast.success("Carta agregada correctamente");
  };

  const onRemoveCard = (index) => {
    const newCards = cards.filter((_, i) => i !== index);
    setTestInfo((prev) => ({
      ...prev,
      cards: newCards,
    }));
    toast.success("Pregunta eliminada correctamente");
  };

  return (
    <div className="flex flex-col justify-center gap-4 w-full md:flex-row ">
      <span className=" w-[50%]">
        <Card className="p-2">
          <CardHeader>
            <span>
              <h1 className="font-bold text-2xl">Cartas</h1>
              <p className="text-gray-500">
                En el siguiente formulario podrás agregar tantas cartas como
                considere necesarias para la prueba de Card sorting.
              </p>
            </span>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col  gap-1">
                <span className="flex items-start gap-2">
                  <Input
                    {...register("card")}
                    label="Carta"
                    type="text"
                    isInvalid={!!errors?.card}
                    errorMessage={errors?.card?.message}
                    color={errors?.card ? "danger" : "default"}
                  />
                  <Button color="primary" type="submit" size="lg">
                    Agregar
                  </Button>
                </span>
              </div>
            </form>
          </CardBody>
          <Divider />
          <CardFooter className="flex gap-7 flex-row-reverse">
            <Button
              disabled={cards && cards?.length === 0}
              onClick={onContinue}
              color={cards && cards?.length === 0 ? "default" : "primary"}
              size="lg"
            >
              Siguiente paso
            </Button>
            <Button onClick={onBack} color="primary" size="lg">
              Volver atrás
            </Button>
          </CardFooter>
        </Card>
      </span>
      <Card className="p-2 w-[40%]">
        <CardHeader>
          <h1 className="font-bold text-2xl">Cartas Creadas</h1>
        </CardHeader>
        <CardBody>
          <Table aria-label="Example empty table">
            <TableHeader>
              <TableColumn>CARTAS</TableColumn>
              <TableColumn>ACCIONES</TableColumn>
            </TableHeader>
            <TableBody emptyContent={"No hay Cartas disponibles."}>
              {cards.length > 0 &&
                cards.map((card, index) => (
                  <TableRow key={index}>
                    <TableCell>{card}</TableCell>
                    <TableCell className="relative flex items-center gap-2">
                      <span className="text-lg text-danger cursor-pointer active:opacity-50">
                        <DeleteIcon onClick={() => onRemoveCard(index)} />
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}

TestCards.propTypes = {
  onContinue: propTypes.func.isRequired,
  onBack: propTypes.func.isRequired,
  cards: propTypes.array.isRequired,
  setTestInfo: propTypes.func.isRequired,
};
