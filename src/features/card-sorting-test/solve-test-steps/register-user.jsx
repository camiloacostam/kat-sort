import propTypes from "prop-types";
//Next Ui Components
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Divider,
  Button,
} from "@nextui-org/react";

export default function RegisterUserStep({ onContinue }) {
  return (
    <span className="flex flex-col md:flex-row w-full h-[80vh] justify-center align-top items-center gap-10 p-10">
      <h1></h1>
    </span>
  );
}

RegisterUserStep.propTypes = {
  onContinue: propTypes.func.isRequired,
};
