import { cn } from '@/lib/utils';
import React from 'react';

type Props = { className?: string };

const categories = ['Чаи', 'мед', 'урбеч', 'жиры', 'Кофе', 'Напитки', 'Десерты'];
// const categories = ['Пиццы', 'Комбо', 'Закуски', 'Коктелт', 'Кофе', 'Напитки', 'Десерты'];
const activeIdx = 0;

const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {categories.map((category, index) => (
        <a
          key={index}
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            index === activeIdx && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}>
          {category}
        </a>
      ))}
    </div>
  );
};

export default Categories;
