import { isAxiosError } from "axios"
import api from "./requisicaoCards"
import { CadCardService } from "./types"


export default async function CardService(title: string, content: string) {
    try {
        const result = await api.post<CadCardService>("/card", {
            title,
            content,
        })

        return result.data
    } catch (error) {
        if (isAxiosError(error)) {
            return error.response?.data
        }
    }
}