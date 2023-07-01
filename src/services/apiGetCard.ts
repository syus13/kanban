import { isAxiosError } from "axios";
import api from "./requisicaoCards";

export default async function getCard() {
    try {
        const token = localStorage.getItem("AUTH-TOKEN");
        const result = await api.get("/card",
            {
                headers: {
                    Authorization: token
                }
            }
        )


        return result.data;
    } catch (error) {
        if (isAxiosError(error)) {
            return error.response?.data;
        }
    }
}