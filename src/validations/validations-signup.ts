import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Validations = yup.object({
  email: yup
    .string()
    .email("Este campo precisa ser um email")
    .required("Este campo não pode estar em branco"),
    password: yup
    .string()
    .required("Este campo está em branco")
    .min(3, "Sua senha precisa ser maior"),
});

export const ValidationsSignUp = yupResolver(Validations);
