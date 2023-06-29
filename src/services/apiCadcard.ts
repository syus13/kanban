import { isAxiosError } from "axios";
import api from "./requisicaoCards";
import { CadCardService } from "./types";

export default async function cardService(title: string, content: string) {
  try {
    const token = localStorage.getItem("AUTH-TOKEN");
    const result = await api.post<CadCardService>(
      "/card",
      {
        title,
        content,
      },
      {
        headers: {
          Authorization:  token, 
        },
      }
    );

    return result.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data;
    }
  }
}
