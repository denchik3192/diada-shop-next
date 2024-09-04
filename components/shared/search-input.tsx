'use client';
import { cn } from '@/lib/utils';
import { Api } from '@/services/api-client';
import { Product } from '@prisma/client';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useClickAway, useDebounce } from 'react-use';

export const SearchInput: React.FC = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [products, setProducts] = useState<Product[]>([]);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setIsFocused(false);
  });
  const onClickItem = () => {
    setIsFocused(false);
    setSearchQuery('');
    setProducts([]);
  };

  useDebounce(
    async () => {
      try {
        Api.products.search(searchQuery).then((items) => {
          setProducts(items);
        });
      } catch (error) {
        console.log(error);
      }
    },
    250,
    [searchQuery],
  );

  return (
    <>
      {isFocused && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />}
      <div
        ref={ref}
        className={cn(
          'flex rounded-2xl flex-1 justify-between relative h-11',
          isFocused && 'z-30',
        )}>
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />

        <input
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          type="text"
          placeholder="Найти пиццу..."
          onFocus={() => setIsFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {products?.length > 0 && (
          <div
            className={cn(
              'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
              isFocused && 'visible opacity-100 top-12',
            )}>
            {products?.map((product) => (
              <Link
                className={
                  'flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10 cursor-pointer'
                }
                onClick={onClickItem}
                href={`/product/${product.id}`}
                key={product.id}>
                <img src={product.imageUrl} width={25} height={25} alt="product image" />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchInput;
