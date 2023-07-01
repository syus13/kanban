import { isAxiosError } from "axios";
import api from "./requisicaoCards";

export default async function getUser() {
    try {
        const token = localStorage.getItem("AUTH-TOKEN");
        const result = await api.get("/user",
            {
                headers: {
                    Authorization: token
                }
            }
        )

        const fullName = result.data.name

        return fullName
    } catch (error) {
        if (isAxiosError(error)) {
            return error.response?.data;
        }
    }
}