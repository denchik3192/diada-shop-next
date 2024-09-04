'use client';

import React, { useEffect, useState } from 'react';

import { Input } from '@/components/ui/input';
// import { CheckboxFiltersGroup } from '@/components/shared/checkbox-filters-group';
import { Title } from '../shared/title';
// import { RangeSlider } from '../ui/range-slider';
import { useRouter, useSearchParams } from 'next/navigation';
import { FilterCheckbox } from './filter-checkbox';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from '../shared/checkbox-filters-group';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';
import { useSet } from 'react-use';
import qs from 'qs';

interface Props {
  className?: string;
}
interface IPriceRange {
  priceFrom: number;
  priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const { ingredients, loading } = useFilterIngredients();
  const [price, setPrice] = useState<IPriceRange>({ priceFrom: 0, priceTo: 1000 });
  // const [set, { toggle }] = useSet(new Set<string>([]));
  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
  const [dough, { toggle: toggleDough }] = useSet(new Set<string>([]));

  const allIngredients = ingredients.map((i) => ({ text: String(i.name), value: String(i.id) }));
  const defaultIngredients = allIngredients.slice(0, 5);

  useEffect(() => {
    const filters = {
      ...price,
      dough: Array.from(dough),
      sizes: Array.from(sizes),
      // ingredients: Array.from(se),
    };

    const query = qs.stringify(filters, {
      arrayFormat: 'comma',
    });
    console.log(query);

    router.push(`?${query}`, { scroll: false });
  }, [ingredients, dough, sizes, price, router]);

  const updatePrice = (name: keyof IPriceRange, value: number) => {
    setPrice({
      ...price,
      [name]: value,
    });
  };

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold pb-4" />

      <CheckboxFiltersGroup
        title="Тип теста"
        name="dough"
        className="mb-5"
        selectedIds={dough}
        onClickCheckbox={toggleDough}
        items={[
          { text: 'Тонкое', value: '1' },
          { text: 'Традиционное', value: '2' },
        ]}
      />
      <CheckboxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mb-5"
        selectedIds={sizes}
        onClickCheckbox={toggleSizes}
        items={[
          { text: '20 см', value: '20' },
          { text: '30 см', value: '30' },
          { text: '40 см', value: '40' },
        ]}
      />
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-2 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(price.priceFrom)}
            onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}
          />
          <Input
            type="number"
            min={100}
            max={1000}
            placeholder="1000"
            value={String(price.priceTo)}
            onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
          />
        </div>
      </div>
      <RangeSlider
        min={0}
        max={1000}
        step={20}
        value={[price.priceFrom, price.priceTo]}
        className="mb-12"
        onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })}
      />
      <CheckboxFiltersGroup
        loading={loading}
        title="Ингредиенты"
        items={allIngredients}
        defaultItems={defaultIngredients}
        onClickCheckbox={(id) => console.log(id)}
      />
    </div>
  );
};
