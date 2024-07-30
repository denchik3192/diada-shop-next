import { Button } from '@/components/ui/button';
import { Filters } from '@/components/ui/filters';
import Categories from '@/components/shared/categories';
import { Container } from '@/components/shared/container';

import Header from '@/components/shared/header';
import { SortPopup } from '@/components/shared/sort-popup';
import { Title } from '@/components/shared/title';
import { TopBar } from '@/components/shared/top-bar';
import Image from 'next/image';
import ProductCard from '@/components/shared/product-card';
import { ProductsGroupList } from '@/components/shared/products-group-list';

export default function Home() {
  return (
    <>
      <TopBar />

      <Container className="mt-10">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">{<Filters />}</div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title={'Пиццы'}
                products={[
                  {
                    id: 1,
                    name: 'tea',
                    imageURL:
                      'https://media.dodostatic.net/image/r:292x292/11EF0234EAFD8424A3D86A21876DE68C.avif',
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 2,
                    name: 'tea',
                    imageURL:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D5F2F13041E9101158D09CEBAE0.avif',
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 3,
                    name: 'fat',
                    imageURL:
                      'https://media.dodostatic.net/image/r:292x292/11EF0234EAFD8424A3D86A21876DE68C.avif',
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 4,
                    name: 'tea',
                    imageURL:
                      'https://media.dodostatic.net/image/r:292x292/11EF0234EAFD8424A3D86A21876DE68C.avif',
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 5,
                    name: 'tea',
                    imageURL:
                      'https://media.dodostatic.net/image/r:292x292/11EF0234EAFD8424A3D86A21876DE68C.avif',
                    price: 550,
                    items: [{ price: 500 }],
                  },
                ]}
                categoryId={0}
              />
              <ProductsGroupList
                title={'Комбо'}
                products={[
                  {
                    id: 1,
                    name: 'tea',
                    imageURL:
                      'https://media.dodostatic.net/image/r:292x292/11EF0234EAFD8424A3D86A21876DE68C.avif',
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 2,
                    name: 'tea',
                    imageURL:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D5F2F13041E9101158D09CEBAE0.avif',
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 3,
                    name: 'fat',
                    imageURL:
                      'https://media.dodostatic.net/image/r:292x292/11EF0234EAFD8424A3D86A21876DE68C.avif',
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 4,
                    name: 'tea',
                    imageURL:
                      'https://media.dodostatic.net/image/r:292x292/11EF0234EAFD8424A3D86A21876DE68C.avif',
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 5,
                    name: 'tea',
                    imageURL:
                      'https://media.dodostatic.net/image/r:292x292/11EF0234EAFD8424A3D86A21876DE68C.avif',
                    price: 550,
                    items: [{ price: 500 }],
                  },
                ]}
                categoryId={1}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
