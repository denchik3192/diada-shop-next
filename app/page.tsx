import { Button } from '@/components/ui/button';
import { Filters } from '@/components/ui/filters';
import Categories from '@/components/shared/categories';
import { Container } from '@/components/shared/container';
import { TopBar } from '@/components/shared/top-bar';
import { ProductsGroupList } from '@/components/shared/products-group-list';
import { prisma } from '@/prisma/prisma-client';

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true,
        },
      },
    },
  });

  return (
    <>
      <TopBar categories={categories.filter((category) => category.products.length > 0)} />

      <Container className="mt-10">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">{<Filters />}</div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      products={category.products}
                      categoryId={category.id}
                    />
                  ),
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
