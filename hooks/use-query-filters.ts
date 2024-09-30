import React, { useEffect } from 'react'
import { IFilters, IQeryFilters } from './use-filters';
import qs from 'qs';
import { useRouter } from 'next/navigation';

export const useQueryFilters = (filters: IFilters) => {
    const router = useRouter()
    useEffect(() => {
        const params = {
            ...filters.price,
            dough: Array.from(filters.dough),
            sizes: Array.from(filters.sizes),
            ingredients: Array.from(filters.selectedIds),
        };

        const query = qs.stringify(params, {
            arrayFormat: 'comma',
        });

        router.push(`?${query}`, { scroll: false });
    }, [filters, router]);
}

