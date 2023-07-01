import { isAxiosError } from "axios";
import api from "./requisicaoCards";
import { Card } from "./types";


export default async function cardService(title: string, content: string, column:string) {
  try {
    const token = localStorage.getItem("AUTH-TOKEN");
    const result = await api.put<Card>("/card", {
        title,
        content,
        column,
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
