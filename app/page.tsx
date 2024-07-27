import { Button } from '@/components/ui/button';
import Categories from '@/components/ui/shared/categories';
import { Container } from '@/components/ui/shared/container';
import Header from '@/components/ui/shared/header';
import { SortPopup } from '@/components/ui/shared/sort-popup';
import { Title } from '@/components/ui/shared/title';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Container className="mt-8">
        <Title text="DIADA" size="lg" className="font-extrabold"></Title>
        <Categories></Categories>
        <SortPopup />
      </Container>
    </>
  );
}
