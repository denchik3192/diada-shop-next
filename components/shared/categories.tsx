'use client';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import { Category } from '@prisma/client';
import Link from 'next/link';
import React from 'react';

type Props = { className?: string; items: Category[] };

// const categories = ['Чаи', 'мед', 'урбеч', 'жиры', 'Кофе', 'Напитки', 'Десерты'];

const Categories: React.FC<Props> = ({ className, items }) => {
  console.log(items);

  const activeCategoryId = useCategoryStore((state) => state.activeId);
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {items.map((category, index) => (
        <Link
          key={index}
          href={`/#${category.name}`}
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            index === activeCategoryId && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}>
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
