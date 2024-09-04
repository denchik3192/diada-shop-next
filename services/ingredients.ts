
import { ApiRoutes } from './constants';
import { Ingredient, Product } from "@prisma/client"
import { axiosInstance } from "./instance"

export const getAll = async (): Promise<Ingredient[]> => {
    const { data } = await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)
    return data
}