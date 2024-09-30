'use client';
import React from 'react';
import { Input } from '@/components/ui/input';
import { Title } from '../shared/title';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from '../shared/checkbox-filters-group';
import { useFilters, useQueryFilters, useIngredients } from '@/hooks';

interface Props {
  className?: string;
}
interface IPriceRange {
  priceFrom: number;
  priceTo: number;
}
interface IQeryFilters extends IPriceRange {
  dough: string;
  sizes: string;
  ingredients: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();
  useQueryFilters(filters);

  const allIngredients = ingredients.map((i) => ({ text: String(i.name), value: String(i.id) }));
  const defaultIngredients = allIngredients.slice(0, 5);

  const updatePrice = (prices: number[]) => {
    filters.setPrice('priceFrom', prices[0]);
    filters.setPrice('priceTo', prices[1]);
  };

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold pb-4" />

      <CheckboxFiltersGroup
        title="Тип теста"
        name="dough"
        className="mb-5"
        selectedIds={filters.dough}
        onClickCheckbox={filters.setDough}
        items={[
          { text: 'Тонкое', value: '1' },
          { text: 'Традиционное', value: '2' },
        ]}
      />
      <CheckboxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mb-5"
        selectedIds={filters.sizes}
        onClickCheckbox={filters.setSizes}
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
            value={String(filters.price.priceFrom)}
            onChange={(e) => filters.setPrice('priceFrom', Number(e.target.value))}
          />
          <Input
            type="number"
            min={100}
            max={1000}
            placeholder="1000"
            value={String(filters.price.priceTo)}
            onChange={(e) => filters.setPrice('priceTo', Number(e.target.value))}
          />
        </div>
      </div>
      <RangeSlider
        min={0}
        max={1000}
        step={20}
        value={[filters.price.priceFrom || 0, filters.price.priceTo || 1000]}
        className="mb-12"
        onValueChange={updatePrice}
      />
      <CheckboxFiltersGroup
        loading={loading}
        title="Ингредиенты"
        items={allIngredients}
        defaultItems={defaultIngredients}
        selectedIds={filters.selectedIds}
        onClickCheckbox={filters.toggleSelectedIds}
      />
    </div>
  );
};
