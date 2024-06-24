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
  category: yup.string().required("Este campo es requerido"),
});

export default function TestCategories({
  onContinue,
  onBack,
  categories,
  setTestInfo,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      category: "",
    },
  });

  const onSubmit = (data) => {
    if (categories.length > 0) {
      setTestInfo((prev) => ({
        ...prev,
        categories: [...prev.categories, data.category],
      }));
    } else {
      setTestInfo((prev) => ({
        ...prev,
        categories: [data.category],
      }));
    }
    reset();
    toast.success("Carta agregada correctamente");
  };

  const onRemoveCategory = (index) => {
    const newCategories = categories.filter((_, i) => i !== index);
    setTestInfo((prev) => ({
      ...prev,
      categories: newCategories,
    }));
    toast.success("Pregunta eliminada correctamente");
  };

  return (
    <div className="flex flex-col justify-center gap-4 w-full md:flex-row ">
      <span className="w-[50%]">
        <Card className="p-2 ">
          <CardHeader>
            <span>
              <h1 className="font-bold text-2xl">Categorías</h1>
              <p className="text-gray-500">
                En el siguiente formulario podrás agregar tantas categorías como
                considere necesarias para la prueba de Card sorting.
              </p>
            </span>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col  gap-1">
                <span className="flex items-start gap-1">
                  <Input
                    {...register("category")}
                    label="Categoría"
                    type="text"
                    isInvalid={!!errors?.category}
                    errorMessage={errors?.category?.message}
                    color={errors?.category ? "danger" : "default"}
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
              disabled={categories && categories?.length === 0}
              onClick={onContinue}
              color={
                categories && categories?.length === 0 ? "default" : "primary"
              }
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
          <h1 className="font-bold text-2xl">Categorías Creadas</h1>
        </CardHeader>
        <CardBody>
          <Table aria-label="Example empty table">
            <TableHeader>
              <TableColumn>CATEGORIAS</TableColumn>
              <TableColumn>ACCIONES</TableColumn>
            </TableHeader>
            <TableBody emptyContent={"No hay Categorías disponibles."}>
              {categories.length > 0 &&
                categories.map((category, index) => (
                  <TableRow key={index}>
                    <TableCell>{category}</TableCell>
                    <TableCell className="relative flex items-center gap-2">
                      <span className="text-lg text-danger cursor-pointer active:opacity-50">
                        <DeleteIcon onClick={() => onRemoveCategory(index)} />
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

TestCategories.propTypes = {
  onContinue: propTypes.func.isRequired,
  onBack: propTypes.func.isRequired,
  categories: propTypes.array.isRequired,
  setTestInfo: propTypes.func.isRequired,
};
