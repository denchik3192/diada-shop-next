import { Container } from '@/components/shared/container';
import { GroupVariants } from '@/components/shared/group-variants';
import { ProductImage } from '@/components/shared/product-image';
import { Title } from '@/components/shared/title';
import { Button } from '@/components/ui/button';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });
  if (!product) {
    return notFound();
  }
  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <ProductImage imageUrl={product.imageUrl} size={30} />
        <div className="w-[490px] bg[#FCFCFC] p-7">
          <Title text={product.name} size="md" className="font-extrabold mb-1" />
          <GroupVariants
            selectedValue="2"
            items={[
              {
                name: 'ddfd',
                value: '1',
              },
              {
                name: 'dsf',
                value: '2',
              },
              {
                name: 'dfg',
                value: '3',
              },
            ]}
          />
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusantium ipsum quae
            animi, adipisci amet necessitatibus voluptatem dolore impedit nisi accusamus saepe
            officia ullam, esse atque! Nisi expedita qui sequi!
          </p>
          <Button>В корзину</Button>
        </div>
      </div>
    </Container>
  );
}
