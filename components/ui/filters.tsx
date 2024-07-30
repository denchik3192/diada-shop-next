'use client';

import React from 'react';

import { Input } from '@/components/ui/input';
// import { CheckboxFiltersGroup } from '@/components/shared/checkbox-filters-group';
import { Title } from '../shared/title';
// import { RangeSlider } from '../ui/range-slider';
import { useRouter, useSearchParams } from 'next/navigation';
import { FilterCheckbox } from './filter-checkbox';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from '../shared/checkbox-filters-group';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold pb-4" />

      <FilterCheckbox text="ddd" value="1" />
      <FilterCheckbox text="ddd" value="2s" />
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-2 mb-5">
          <Input type="number" placeholder="0" min={0} max={30000} value={0} />
          <Input type="number" min={100} max={30000} placeholder="1000" value={500} />
        </div>
      </div>
      <RangeSlider min={0} max={100} step={20} />
      <CheckboxFiltersGroup
        title="Ингредиенты"
        items={[
          { text: 'чеснок', value: '1' },
          { text: 'сырный сокс', value: '2' },
          { text: 'терияки', value: '2' },
          { text: 'барбекю', value: '2' },
          { text: 'моцарэлла', value: '2' },
          { text: 'гибной соус', value: '2' },
        ]}
        defaultItems={[
          { text: 'чеснок', value: '1' },
          { text: 'сырный сокс', value: '2' },
          { text: 'терияки', value: '2' },
          { text: 'барбекю', value: '2' },
        ]}
      />
    </div>
  );
};
