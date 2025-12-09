import { useQuery } from "@tanstack/react-query"
import { Product } from "./useProducts"
import { api } from "@/api/api"

export const useProduct = (id: number) => {
    return useQuery<Product>({
        queryKey: ["product", id],
        queryFn: () => api
            .get(`/products/${id}`)
            .then(res => res.data)
    })
}