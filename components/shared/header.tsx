import React from 'react';
import { Container } from './container';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';
import { Title } from './title';

type Props = { className?: string };

const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        <div>
          <Title text="DIADA" size="lg" className="font-extrabold"></Title>
        </div>
        <div className="flex items-center">
          <Button className="mr-4 flex items-center gap-1" variant={'outline'}>
            <User size={16} />
            Войти
          </Button>
          <div>
            <Button className="group relative">
              <b>500 ₽</b>
              <span className="h-full w-[1px] bg-white/30 mx-3" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
