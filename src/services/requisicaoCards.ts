import axios from "axios";

export default axios.create({
    baseURL: "https://arnia-kanban.vercel.app/api/",
    headers: {
        "x-api-key": "52a8b954-e25d-4cc5-86e5-c32e92f994bb",
        "Content-Type": "application/json",
       
      },
})

