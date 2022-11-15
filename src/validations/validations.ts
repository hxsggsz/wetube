import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Validations = yup.object({
  titulo: yup
    .string()
    .min(10, "precisa ter pelo menos 10 caracteres")
    .max(100, "limite de 50 caracteres atingido")
    .required("Este campo não pode estar em branco"),
  url: yup
    .string()
    .required("Este campo está em branco")
    .url("Preencha com uma URL válida")
    .max(100),
});

export const ValidationsResolvers = yupResolver(Validations);
