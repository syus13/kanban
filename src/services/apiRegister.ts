import { RegisterParams, RegisterResponse } from "./types";

export const RegisterService = async ({
  name,
  email,
  password,
}: RegisterParams): Promise<RegisterResponse> => {
  const response = await fetch("https://arnia-kanban.vercel.app/api/user", {
    method: "POST",
    headers: {
      "x-api-key": "52a8b954-e25d-4cc5-86e5-c32e92f994bb",
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });

  if (response.status === 201) {
    return await response.json();
  }

  if (response.status === 401 || response.status === 404) {
    throw new Error("Senha Incorreta");
  }

  throw new Error("Ocorreu um erro, aguarde um tempo e volte novamente!");
};
