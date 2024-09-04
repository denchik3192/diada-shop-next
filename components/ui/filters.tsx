'use client';

import React, { useState } from 'react';

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

interface Props {
  className?: string;
}
interface IPriceRange {
  priceFrom: number;
  priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useFilterIngredients();
  const [price, setPrice] = useState<IPriceRange>({ priceFrom: 0, priceTo: 1000 });
  const [set, { toggle }] = useSet(new Set<string>([]));

  const allIngredients = ingredients.map((i) => ({ text: String(i.name), value: String(i.id) }));
  const defaultIngredients = allIngredients.slice(0, 5);

  const updatePrice = (name: keyof IPriceRange, value: number) => {
    console.log(price);

    setPrice({
      ...price,
      [name]: value,
    });
  };

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold pb-4" />

      <FilterCheckbox text="ddd" value="1" />
      <FilterCheckbox text="ddd" value="2s" />
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
