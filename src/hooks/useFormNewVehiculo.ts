import { Vehiculos } from "../interface/Vehiculos";
import {yupResolver} from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";

export default function useFormNewVehiculo() {

  const { register, handleSubmit, reset, formState:{errors} } = useForm<Vehiculos>({
    //resolver: yupResolver()
  });

  return {
    errors,
    register,
    handleSubmit,
  };
}