import { Ingredient } from '@prisma/client';
import { ingredients } from './../prisma/constants';
import { useEffect, useState } from 'react';
import { Api } from '@/services/api-client';
import { useSet } from 'react-use';
interface IProps {
    ingredients: Ingredient[]
    loading: boolean
}
export const useFilterIngredients = (): IProps => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([])
    const [loading, setLoading] = useState<boolean>(false)



    useEffect(() => {
        const fetchIngredients = async () => {
            setLoading(true)
            try {
                const ingredients = await Api.ingredients.getAll()
                setIngredients(ingredients)
            } catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false)
            }
        }
        fetchIngredients()


    }, [])
    return { ingredients, loading }
}