type LoginParams = {
  email: string;
  password: string;
};

type LoginResponse = {
  token: string;
};

export const loginService = async ({
  email,
  password,
}: LoginParams): Promise<LoginResponse> => {
  const response = await fetch(
    "https://arnia-kanban.vercel.app/api/user/login",
    {
      method: "POST",
      headers: {
        "x-api-key": "52a8b954-e25d-4cc5-86e5-c32e92f994bb",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("AUTH-TOKEN") || "",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );

  if (response.status === 200) {
    return await response.json();
  }

  if (response.status === 401 || response.status === 404) {
    throw new Error("Senha Incorreta");
  }

  throw new Error("Ocorreu um erro, aguarde um tempo e volte novamente!");
};
