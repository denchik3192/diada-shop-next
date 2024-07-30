'use client';

import React from 'react';
import { Title } from './title';
import { cn } from '@/lib/utils';
import ProductCard from './product-card';

interface Props {
  title: string;
  products: any[];
  className?: string;
  listClassName?: string;
  categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  products,
  listClassName,
  categoryId,
  className,
}) => {
  // const setActiveId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef(null);
  // const intersection = useIntersection(intersectionRef, {
  //   threshold: 0.4,
  // });

  // React.useEffect(() => {
  //   if (intersection?.isIntersecting) {
  //     setActiveId(categoryId);
  //   }
  // }, [intersection?.isIntersecting]);

  return (
    <div className={className} id={title}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div ref={intersectionRef} className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {products
          .filter((product: any) => product.items.length > 0)
          .map((product: any) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              imageURL={product.imageUrl}
              price={product.items[0].price}
            />
          ))}
      </div>
    </div>
  );
};
