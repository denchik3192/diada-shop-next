'use client';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import React from 'react';

type Props = { className?: string };

// const categories = ['Чаи', 'мед', 'урбеч', 'жиры', 'Кофе', 'Напитки', 'Десерты'];
const categories = ['Пиццы', 'Комбо', 'Закуски', 'Коктелт', 'Кофе', 'Напитки', 'Десерты'];

const Categories: React.FC<Props> = ({ className }) => {
  const activeCategoryId = useCategoryStore((state) => state.activeId);
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {categories.map((category, index) => (
        <a
          key={index}
          href={`/#${category}`}
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            index === activeCategoryId && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}>
          {category}
        </a>
      ))}
    </div>
  );
};

export default Categories;
