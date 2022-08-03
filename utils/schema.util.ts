import * as yup from "yup";

export const createUserSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  cpf: yup.string().required("Senha obrigatória"),
  alias: yup.string(),
  gender: yup.string(),
  phone: yup.string(),
  address: yup.string(),
  comments: yup.string(),
  profilePicture: yup.string()
});

export const updateUserSchema = yup.object().shape({
  name: yup.string(),
  cpf: yup.string(),
  alias: yup.string(),
  gender: yup.string(),
  phone: yup.string(),
  address: yup.string(),
  comments: yup.string(),
  profilePicture: yup.string()
});
