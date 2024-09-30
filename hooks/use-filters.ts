import { Ingredient } from '@prisma/client';
import { ingredients } from './../prisma/constants';
import { useEffect, useState } from 'react';
import { Api } from '@/services/api-client';
import { useSet } from 'react-use';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { useIngredients } from './use-ingredients';
import { split } from 'postcss/lib/list';

interface IPriceRange {
    priceFrom?: number;
    priceTo?: number;
}
export interface IQeryFilters extends IPriceRange {
    dough: string;
    sizes: string;
    ingredients: string;
}

export interface IFilters {
    sizes: Set<string>,
    dough: Set<string>,
    price: IPriceRange,
    selectedIds: Set<string>,

}
interface IReturnProps extends IFilters {
    setPrice: (name: keyof IPriceRange, value: number) => void;
    setDough: (value: string) => void,
    setSizes: (value: string) => void,
    toggleSelectedIds: (value: string) => void;
}

export const useFilters = (): IReturnProps => {
    const searchParams = useSearchParams() as unknown as Map<keyof IQeryFilters, string>;
    const [selectedIds, { toggle: toggleSelectedIds }] = useSet(new Set<string>(searchParams.get('ingredients')?.split(',')));
    const [price, setPrice] = useState<IPriceRange>({
        priceFrom: Number(searchParams.get('priceFrom') || undefined),
        priceTo: Number(searchParams.get('priceTo') || undefined),
    });
    const [sizes, { toggle: toggleSizes }] = useSet(
        new Set<string>(searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : []),
    );

    const [dough, { toggle: toggleDough }] = useSet(
        new Set<string>(searchParams.has('dough') ? searchParams.get('dough')?.split(',') : []),
    );


    const updatePrice = (name: keyof IPriceRange, value: number) => {
        setPrice((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    return { sizes, setSizes: toggleSizes, dough, setDough: toggleDough, price, setPrice: updatePrice, selectedIds, toggleSelectedIds }
}